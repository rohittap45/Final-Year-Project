from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    name= models.TextField(max_length=50)
    age = models.PositiveIntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    target_weight = models.FloatField()
    fitness_goal = models.TextField()  
    target_body_shape = models.TextField()
  

    REQUIRED_FIELDS = ['email','name', 'age', 'height', 'weight', 'target_weight', 'fitness_goal',
                      'target_body_shape']

    def __str__(self):
        return self.username
