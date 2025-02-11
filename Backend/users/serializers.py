from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser

class RegisterSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['username','name', 'email', 'password', 'password2', 'age', 'height', 'weight', 
                  'target_weight', 'fitness_goal',
                  'target_body_shape', ]
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(**validated_data)
        return user


class LoginSerializer(serializers.Serializer):
    username_or_email = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username_or_email = data['username_or_email']
        password = data['password']

        # Check if input is an email or a username
        user = CustomUser.objects.filter(email=username_or_email).first() or \
               CustomUser.objects.filter(username=username_or_email).first()

        if user and user.check_password(password):
            return user  # Return user object if authentication is successful

        raise serializers.ValidationError("Invalid credentials")
