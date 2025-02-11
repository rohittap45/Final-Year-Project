import google.generativeai as genai
import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from dotenv import load_dotenv

# Load API Key from .env file
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Configure Google AI API
genai.configure(api_key=GEMINI_API_KEY)

@csrf_exempt
def generate_diet_plan(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            user_info = f"""
            User Information:
            Name: {data.get("name")}
            Age: {data.get("age")}
            Gender: {data.get("gender")}
            Height: {data.get("height")}
            Current Weight: {data.get("currentWeight")}
            Target Weight: {data.get("targetWeight")}
            Target Body: {data.get("targetBody")}
            Fitness Goal: {data.get("fitnessGoal")}
            """

            prompt = f"""
            Based on the following user details, suggest a personalized 7-day diet plan.
            {user_info}

            Format:
            - Breakfast:
            - Lunch:
            - Dinner:
            - Snacks:
            - Hydration:
            """

            model = genai.GenerativeModel("gemini-pro")
            response = model.generate_content(prompt)

            diet_plan = response.text if hasattr(response, "text") else "Diet plan could not be generated."

            return JsonResponse({"diet_plan": diet_plan}, status=200)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)
