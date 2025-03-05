from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .models import UserProfile
from .serializers import UserProfileSerializer, UpdateUserProfileSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.dateparse import parse_date
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
import json
from datetime import date
from .models import  UserProfile
from users.models import CustomUser

# Get or Create User Profile
class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Update weight, calories, and protein intake
class UpdateUserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        profile = UserProfile.objects.get(user=request.user)
        serializer = UpdateUserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_weight(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            new_weight = data.get("new_weight")

            if new_weight is None:
                return JsonResponse({"error": "new_weight is required"}, status=400)

            # Extract user from JWT token
            user = request.user

            # Get or create the user profile
            profile, created = UserProfile.objects.get_or_create(user=user)

            # Append new weight entry to history
            profile.weight_history.append({"date": date.today().isoformat(), "weight": new_weight})

            # Update the current weight of the user
            user.weight = new_weight
            user.save(update_fields=['weight'])

            # Save profile updates
            profile.save(update_fields=['weight_history'])

            return JsonResponse({"message": "Weight updated successfully", "weight_history": profile.weight_history}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)
from django.contrib.auth import get_user_model  # ✅ Import this
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import UserProfile, DailyTracking

User = get_user_model()  # ✅ Get the custom user model

@csrf_exempt
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_dashboard_data(request, user_id):
    try:
        user = User.objects.get(id=user_id)  # ✅ Use the custom user model
        profile = UserProfile.objects.get(user=user)

        # Get last 7 weight history records
        weight_history = profile.weight_history[-7:] if profile.weight_history else []

        # Get last 7 daily tracking records
        daily_data = DailyTracking.objects.filter(user=user).order_by('-date')[:7]
        weekly_calories = [{"day": d.date.strftime('%A'), "calories": d.calories_consumed} for d in daily_data]

        # Prepare response
        data = {
            "name": user.name.split(" ")[0],
            # "current_weight": profile.current_weight,  
            # "target_weight": profile.target_weight,
            # "fitness_goal": profile.fitness_goal,
            "bmi": profile.bmi,
            "calorie_intake": profile.calorie_intake,
            "protein_intake": profile.protein_intake,
            "calories_consumed_today": profile.calories_consumed,
            "protein_consumed_today": profile.protein_consumed,
            "weight_history": weight_history,
            "weekly_calories": weekly_calories
        }

        return JsonResponse(data, safe=False)

    except UserProfile.DoesNotExist:
        return JsonResponse({"error": "User profile not found"}, status=404)

    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)
