from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('username', 'email', 'age', 'height', 'weight', 'target_weight', 'is_staff', 'is_active')
    fieldsets = UserAdmin.fieldsets + (  # Add custom fields
        (None, {'fields': ('age', 'height', 'weight', 'target_weight', 'fitness_goal', 'motivation', 'current_body_shape', 'target_body_shape', 'workout_level')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (  # Fields shown when adding a new user
        (None, {'fields': ('age', 'height', 'weight', 'target_weight', 'fitness_goal', 'motivation', 'current_body_shape', 'target_body_shape', 'workout_level')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
