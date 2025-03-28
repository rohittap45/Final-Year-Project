from django.contrib import admin
from .models import  DietPlan, WorkoutPlan

# Register your models here.
admin.site.register(DietPlan)
admin.site.register(WorkoutPlan)