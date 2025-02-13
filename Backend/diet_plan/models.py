from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class DietPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="diet_plans")
    week_start_date = models.DateField(help_text="Start date of the diet plan week")
    diet_data = models.JSONField(help_text="Stores diet plan for each day in JSON format")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def _str_(self):
        return f"Diet Plan for {self.user.username} ({self.week_start_date})"