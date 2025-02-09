from rest_framework import serializers
from .models import UserProfile
from django.conf import settings

class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)  # Returns the username

    class Meta:
        model = UserProfile
        fields = [
            'user', 'bmi', 'calorie_intake', 'protein_intake', 
            'calories_consumed', 'protein_consumed', 'weight_history'
        ]
        read_only_fields = ['bmi', 'calorie_intake', 'protein_intake']

class UpdateUserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['calories_consumed', 'protein_consumed', 'weight_history']
