from django.urls import path
from .views import UserProfileView, UpdateUserProfileView, change_weight

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('profile/update/', UpdateUserProfileView.as_view(), name='update-profile'),
    path('profile/change_weight/', change_weight, name='change-weight'),  # New API for updating weight
]
