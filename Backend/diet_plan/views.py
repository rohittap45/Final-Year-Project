import google.generativeai as genai
import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from dotenv import load_dotenv
from users.models import CustomUser

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
            username = data.get("username")

            # Fetch user details based on username
            try:
                user = CustomUser.objects.get(username=username)
            except CustomUser.DoesNotExist:
                return JsonResponse({"error": "User not found"}, status=404)

            # Construct structured user data
            user_data = {
                "name": user.name,
                "age": user.age,
                "height": user.height,
                "current_weight": user.weight,
                "target_weight": user.target_weight,
                "fitness_goal": user.fitness_goal,
                "target_body_shape": user.target_body_shape
            }

            # Clear and structured prompt for JSON output
            prompt = f"""
            You are a professional AI nutritionist. Generate a *fully personalized* 7-day diet plan *based on the following user data*:

            User Details:
            {json.dumps(user_data, indent=4)}

            *Requirements:*
            - The diet plan must be unique and customized based on the user's weight, target weight, fitness goal, and target body shape.
            - Ensure meals align with the user’s needs (e.g., weight loss, muscle gain, balanced diet).
            - Use varied meals across all days (no repeated meals).
            - Provide daily hydration recommendations.

            *JSON Output Format Only (Do not include extra text):*
            {{
                "monday": {{
                    "breakfast": "Meal description",
                    "lunch": "Meal description",
                    "dinner": "Meal description",
                    "snacks": "Meal description",
                    "hydration": "Water intake recommendation"
                }},
                "tuesday": {{ ... }},
                "wednesday": {{ ... }},
                "thursday": {{ ... }},
                "friday": {{ ... }},
                "saturday": {{ ... }},
                "sunday": {{ ... }}
            }}

            Return *only* the JSON. Do *not* include explanations, summaries, or additional text.
            """

            model = genai.GenerativeModel("gemini-pro")

            # Generate and validate AI response
            for _ in range(3):  # Retry up to 3 times if invalid response
                response = model.generate_content(prompt)

                if hasattr(response, "text"):
                    try:
                        diet_plan_json = json.loads(response.text)

                        # Ensure meals are varied
                        meal_list = [meal for day in diet_plan_json.values() for meal in day.values()]
                        if len(set(meal_list)) >= len(meal_list) * 0.7:  # At least 70% unique meals
                            return JsonResponse({"diet_plan": diet_plan_json}, status=200)

                    except json.JSONDecodeError:
                        continue  # Retry if response is not valid JSON

            return JsonResponse({"error": "Failed to generate a valid diet plan"}, status=500)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)