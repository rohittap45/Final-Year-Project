import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

const Page3 = () => {
  const [userData, setUserData] = useState({
    targetBody: "",
    fitnessGoal: "",
  });

  const handleChange = (e) => {
    // Retrieve the existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("userData")) || {};
  
    // Update only the current field while preserving other data
    const updatedData = {
      ...existingData,
      [e.target.name]: e.target.value,
    };
  
    // Save the updated data back to localStorage
    localStorage.setItem("userData", JSON.stringify(updatedData));
  
    // Update local state as well
    setUserData(updatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Retrieve complete user data from localStorage
    const completeUserData = JSON.parse(localStorage.getItem("userData")) || {};
  
    console.log("User Data Sent to Backend:", completeUserData);
  
    try {
      const response = await axios.post("http://localhost:8000/api/users/register/", completeUserData);
      console.log("Success Response:", response.data);
    } catch (error) {
      console.error("Error Response:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <h1 className="text-white text-3xl font-bold mb-6">
        <span className="text-orange-500">Fit</span>AI
      </h1>
      <div className="max-w-lg my-5 w-full bg-orange-400 text-black p-8 rounded-2xl relative shadow-xl">
        <button className="absolute top-4 left-4 text-black">
          <ArrowLeft />
        </button>
        <h1 className="text-center text-3xl font-bold mb-6">Registration</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Target Body <span className="text-red-600">*</span>
            </label>
            <select
              name="target_body_shape"
              value={userData.target_body_shape}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select your Target Body</option>
              <option value="bulking">Bulking</option>
              <option value="cutting">Cut</option>
              <option value="general_fitness">General Fitness</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Fitness Goal <span className="text-red-600">*</span>
            </label>
            <select
              name="fitness_goal"
              value={userData.fitness_goal}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select your fitness goal</option>
              <option value="weight_loss">Weight Loss</option>
              <option value="muscle_gain">Muscle Gain</option>
              <option value="general_fitness">General Fitness</option>
            </select>
          </div>
          <button type="submit" className="mx-93 mt-4 bg-orange-600 text-white hover:bg-orange-700 p-1 px-5 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page3;
