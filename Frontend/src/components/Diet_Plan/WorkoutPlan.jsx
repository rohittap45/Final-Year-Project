import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const WorkoutPlan = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
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

        const response = await axios.get(`http://localhost:8000/api/workout/plan/${userId}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data.workout_plan);
        setWorkoutPlan(response.data.workout_plan);
      } catch (error) {
        console.error("Error fetching workout plan:", error);
        setError(error.response?.data?.message || "Failed to fetch workout plan.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutPlan();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white py-10">
      <h1 className="text-orange-500 text-4xl font-bold mb-8">Your AI-Powered Workout Plan</h1>

      {loading ? (
        <p className="text-xl font-semibold">Generating your workout plan...</p>
      ) : workoutPlan ? (
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="w-full border-collapse border-4 border-white bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="p-3 border-4 border-white">Day</th>
                <th className="p-3 border-4 border-white">Warm-up</th>
                <th className="p-3 border-4 border-white">Main Workout</th>
                <th className="p-3 border-4 border-white">Cool-down</th>
                <th className="p-3 border-4 border-white">Duration</th>
                <th className="p-3 border-4 border-white">Intensity</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(workoutPlan).map(([day, workout], index) => (
                <tr key={index} className="text-center border-4 border-white odd:bg-gray-700 even:bg-gray-800">
                  <td className="p-3 font-bold text-orange-400 border-4 border-white capitalize">{day}</td>
                  <td className="p-3 border-4 border-white">{workout.warm_up}</td>
                  <td className="p-3 border-4 border-white">{workout.main_workout}</td>
                  <td className="p-3 border-4 border-white">{workout.cool_down}</td>
                  <td className="p-3 border-4 border-white">{workout.duration}</td>
                  <td className="p-3 border-4 border-white">{workout.intensity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl text-red-500">Error fetching workout plan. Please try again.</p>
      )}


    </div>
  );
};

export default WorkoutPlan;
