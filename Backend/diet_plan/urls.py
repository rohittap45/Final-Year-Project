from django.urls import path
from .views import generate_diet_plan

urlpatterns = [
    path("<int:user_id>/", generate_diet_plan, name="generate_diet_plan"),
]
