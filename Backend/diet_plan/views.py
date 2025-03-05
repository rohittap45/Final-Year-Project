import google.generativeai as genai
import os
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv
from users.models import CustomUser
from .models import DietPlan  # Import the DietPlan model
from datetime import date

# Load API Key from .env file
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Configure Google AI API
genai.configure(api_key=GEMINI_API_KEY)

@csrf_exempt
def generate_diet_plan(request, user_id):
    if request.method != "GET":
        return JsonResponse({"error": "Invalid request method"}, status=400)

    try:
        # Fetch user by user_id
        try:
            user = CustomUser.objects.get(id=user_id)
        except CustomUser.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)

        # User details for AI prompt
        user_data = {
            "name": user.name,
            "age": user.age,
            "height": user.height,
            "current_weight": user.weight,
            "target_weight": user.target_weight,
            "fitness_goal": user.fitness_goal,
            "target_body_shape": user.target_body_shape
        }

        # AI Prompt with enforced JSON formatting
        prompt = f"""
You are a professional AI nutritionist. Generate a **fully personalized** 7-day diet plan based on the following user details:

## **User Details:**
{json.dumps(user_data, indent=4)}

## **Instructions:**
- Create a unique diet plan based on the user's weight, target weight, fitness goal, and target body shape.
- Ensure each day's meal plan is unique (no repeated meals).
- Include **hydration recommendations** for each day.
- **STRICTLY RETURN ONLY RAW JSON WITHOUT TRIPLE QUOTES, CODE BLOCKS, OR ANY EXTRA CHARACTERS. DO NOT INCLUDE ANY EXPLANATIONS OR HEADERS.** 

---

## **Expected JSON Format (STRICTLY FOLLOW THIS FORMAT)**
{{
    "monday": {{
        "breakfast": "Oatmeal with banana and almonds",
        "lunch": "Grilled chicken salad with quinoa",
        "dinner": "Baked salmon with steamed vegetables",
        "snacks": "Greek yogurt with honey",
        "hydration": "Drink 2.5 liters of water"
    }},
    "tuesday": {{
        "breakfast": "Scrambled eggs with whole wheat toast",
        "lunch": "Lentil soup with brown rice",
        "dinner": "Stir-fried tofu with vegetables",
        "snacks": "Handful of mixed nuts",
        "hydration": "Drink 2.5 liters of water"
    }},
    "wednesday": {{ ... }},
    "thursday": {{ ... }},
    "friday": {{ ... }},
    "saturday": {{ ... }},
    "sunday": {{ ... }}
}}
"""


        model = genai.GenerativeModel("gemini-1.5-pro-latest")

        # Attempt multiple retries to get valid JSON
        for _ in range(1):
            response = model.generate_content(prompt)

            if hasattr(response, "text"):
                response_text = response.text.strip()
                print(response_text)
                
                # Ensure the response starts and ends with JSON brackets
                try:
                        
                        diet_plan_json = json.loads(response_text)  # Validate JSON

                        week_start_date = date.today()  # Use the current date as the week's start date
                        DietPlan.objects.filter(user=user, week_start_date=week_start_date).delete()
                        diet_plan, created = DietPlan.objects.update_or_create(
                            user=user,
                            week_start_date=week_start_date,
                            defaults={"diet_data": diet_plan_json}  # Correct usage
                        )

                        return JsonResponse({"diet_plan": diet_plan.diet_data}, status=200)

                except json.JSONDecodeError:
                        continue  # Retry if invalid JSON

        # If retries fail, return an error
        return JsonResponse({"error": "AI failed to generate a valid diet plan"}, status=500)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
