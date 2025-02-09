from django.db import models
from django.conf import settings
from datetime import date, timedelta
from django.dispatch import receiver
from django.db.models.signals import post_save

class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')

    # Computed fields
    bmi = models.FloatField(blank=True, null=True)
    calorie_intake = models.FloatField(blank=True, null=True)
    protein_intake = models.FloatField(blank=True, null=True)

    # Progress tracking (Reset daily)
    calories_consumed = models.FloatField(default=0.0)
    protein_consumed = models.FloatField(default=0.0)

    # Weight history tracking
    weight_history = models.JSONField(default=list)  

    last_updated = models.DateField(auto_now_add=True)  # Track last update

    def calculate_bmi(self):
        """Calculate BMI using weight (kg) / height (m)^2"""
        if self.user.height > 0:
            return round(self.user.weight / ((self.user.height / 100) ** 2), 2)
        return None

    def calculate_calorie_intake(self):
        """Example: Estimate daily calorie needs based on target weight"""
        return round(2000 - (self.user.target_weight - self.user.weight) * 50, 2)

    def calculate_protein_intake(self):
        """Estimate daily protein intake (1.2g per kg of body weight)"""
        return round(self.user.weight * 1.2, 2)  

    def reset_if_new_day(self):
        """Resets daily tracking if a new day has started"""
        today = date.today()

        # Ensure last_updated is not None before comparison
        if self.last_updated is None or self.last_updated < today:
            if self.pk:  # Ensure the object is already saved before updating
                if self.last_updated:  # Only store previous day's data if it exists
                    DailyTracking.objects.create(
                        user=self.user,
                        date=self.last_updated,
                        calories_consumed=self.calories_consumed,
                        protein_consumed=self.protein_consumed
                    )

                # Reset fields without causing another save() call
                self.calories_consumed = 0.0
                self.protein_consumed = 0.0
                self.last_updated = today

                # Use update_fields to prevent recursive calls
                super().save(update_fields=['calories_consumed', 'protein_consumed', 'last_updated'])

    def save(self, *args, **kwargs):
        """Automatically update BMI, calorie intake, and protein intake before saving"""
        self.reset_if_new_day()  # Ensure daily reset if needed
        self.bmi = self.calculate_bmi()
        self.calorie_intake = self.calculate_calorie_intake()
        self.protein_intake = self.calculate_protein_intake()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Profile of {self.user.username}"

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

# History model for daily tracking
class DailyTracking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='daily_tracking')
    date = models.DateField()
    calories_consumed = models.FloatField()
    protein_consumed = models.FloatField()

    def __str__(self):
        return f"{self.user.username} - {self.date}"


