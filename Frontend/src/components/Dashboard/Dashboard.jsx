import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar } from "recharts";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
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

        const response = await fetch(`http://localhost:8000/api/dashboard/${userId}/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error("Error fetching dashboard:", error);
        setError(error.message || "Failed to fetch dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <p className="text-center text-white mt-5">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-5">{error}</p>;
  if (!dashboardData) return <p className="text-gray-500 text-center mt-5">No data available.</p>;

  const { name, bmi, calorie_intake, protein_intake, weight_history, weekly_calories } = dashboardData;

  const formattedWeightHistory = weight_history.map((entry) => ({
    date: entry.date,
    weight: parseFloat(entry.weight),
  }));

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-extrabold text-orange-500 mb-6">Dashboard for {name}</h1>

      {/* BMI & Intake Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-gray-900 shadow-xl rounded-xl">
          <p className="text-2xl font-semibold">BMI: <span className="text-orange-500">{bmi}</span></p>
        </div>
        <div className="p-6 bg-gray-900 shadow-xl rounded-xl">
          <p className="text-lg font-semibold">Daily Calories Intake: <span className="text-orange-500">{calorie_intake} kcal</span></p>
          <p className="text-lg font-semibold">Dailly Protein Intake: <span className="text-orange-500">{protein_intake} g</span></p>
        </div>
      </div>

      {/* Weight History Chart */}
      <div className="p-6 bg-gray-900 shadow-xl rounded-xl mb-6">
        <h2 className="text-xl font-bold text-orange-500 mb-3">Weight History</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={formattedWeightHistory}>
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <Line type="monotone" dataKey="weight" stroke="#FF9800" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly Calories Chart */}
      <div className="p-6 bg-gray-900 shadow-xl rounded-xl">
        <h2 className="text-xl font-bold text-orange-500 mb-3">Daily Calorie Consumption</h2>
        {weekly_calories.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weekly_calories}>
              <XAxis dataKey="day" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <Bar dataKey="calories" fill="#FF9800" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-400">No calorie data available for the past week.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
