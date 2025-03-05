from django.urls import path
from .views import UserProfileView, UpdateUserProfileView, change_weight,get_dashboard_data

urlpatterns = [
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('profile/update/', UpdateUserProfileView.as_view(), name='update-profile'),
    path('profile/change_weight/', change_weight, name='change-weight'),  # New API for updating weight
    path('dashboard/<int:user_id>/', get_dashboard_data, name='dashboard_data'),
]
