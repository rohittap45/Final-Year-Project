import React, { useState, useEffect } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const DietPlan = () => {
  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDietPlan = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        if (!decodedToken || !decodedToken.user_id) {
          throw new Error("Invalid token structure.");
        }

        const userId = decodedToken.user_id;

        const response = await axios.get(`http://localhost:8000/api/diet-plan/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.diet_plan);
        setDietPlan(response.data.diet_plan);
      } catch (error) {
        console.error("Error fetching diet plan:", error);
        setError(error.response?.data?.message || "Failed to fetch diet plan.");
      } finally {
        setLoading(false);
      }
    };

    fetchDietPlan();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white py-10">
      <h1 className="text-orange-500 text-4xl font-bold mb-8">Your AI-Powered Diet Plan</h1>
      
      {loading ? (
        <p className="text-xl font-semibold">Generating your diet plan...</p>
      ) : dietPlan ? (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="w-full border-collapse border-4 border-white bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="p-3 border-4 border-white">Day</th>
                <th className="p-3 border-4 border-white">Breakfast</th>
                <th className="p-3 border-4 border-white">Lunch</th>
                <th className="p-3 border-4 border-white">Dinner</th>
                <th className="p-3 border-4 border-white">Snacks</th>
                <th className="p-3 border-4 border-white">Hydration</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(dietPlan).map(([day, meals], index) => (
                <tr key={index} className="text-center border-4 border-white odd:bg-gray-700 even:bg-gray-800">
                  <td className="p-3 font-bold text-orange-400 border-4 border-white capitalize">{day}</td>
                  <td className="p-3 border-4 border-white">{meals.breakfast}</td>
                  <td className="p-3 border-4 border-white">{meals.lunch}</td>
                  <td className="p-3 border-4 border-white">{meals.dinner}</td>
                  <td className="p-3 border-4 border-white">{meals.snacks}</td>
                  <td className="p-3 border-4 border-white">{meals.hydration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl text-red-500">Error fetching diet plan. Please try again.</p>
      )}

    </div>
  );
};

export default DietPlan;
