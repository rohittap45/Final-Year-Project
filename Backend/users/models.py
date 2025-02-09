from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    age = models.PositiveIntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    target_weight = models.FloatField()
    fitness_goal = models.TextField()
    motivation = models.TextField()
    current_body_shape = models.TextField()
    target_body_shape = models.TextField()
    workout_level = models.CharField(max_length=50)

    REQUIRED_FIELDS = ['email', 'age', 'height', 'weight', 'target_weight', 'fitness_goal',
                       'motivation', 'current_body_shape', 'target_body_shape', 'workout_level']

    def __str__(self):
        return self.username
