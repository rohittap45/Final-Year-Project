from django.urls import path
from .views import *

urlpatterns = [
    path("<int:user_id>/", generate_diet_plan, name="generate_diet_plan"),
    path("plan/<int:user_id>/", generate_workout_plan, name="generate_diet_plan"),
]
