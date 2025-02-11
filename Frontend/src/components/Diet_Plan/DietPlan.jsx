import React, { useState, useEffect } from "react";
import axios from "axios";

const DietPlan = () => {
  const [dietPlan, setDietPlan] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDietPlan = async () => {
      try {
        // Get user data from local storage
        const userData = JSON.parse(localStorage.getItem("userData")) || {};

        const response = await axios.post("http://localhost:8000/api/diet-plan/", userData);
        
        setDietPlan(response.data.diet_plan);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching diet plan:", error);
        setDietPlan("Error fetching diet plan. Please try again.");
        setLoading(false);
      }
    };

    fetchDietPlan();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <h1 className="text-orange-500 text-3xl font-bold mb-6">Your AI-Powered Diet Plan</h1>

      <div className="max-w-2xl bg-orange-400 text-black p-6 rounded-lg shadow-lg">
        {loading ? (
          <p className="text-center font-semibold">Generating your diet plan...</p>
        ) : (
          <pre className="whitespace-pre-wrap text-black">{dietPlan}</pre>
        )}
      </div>

      <button
        className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
        onClick={() => window.location.href = "/"}
      >
        Go to Home
      </button>
    </div>
  );
};

export default DietPlan;
