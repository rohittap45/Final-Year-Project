import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(() => JSON.parse(localStorage.getItem("userData")) || {});

  const handleChange = (e) => {
    const updatedData = { ...userData, [e.target.name]: e.target.value };
    setUserData(updatedData);
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };
  
  

  const handleNext = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/page3");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
      <h1 className="text-white text-3xl font-bold mb-6">
        <span className="text-orange-500">Fit</span>AI
      </h1>
      <div className="max-w-lg my-5 w-full bg-orange-400 text-black p-8 rounded-2xl shadow-xl">
        <form className="space-y-4" onSubmit={handleNext}>
          <div>
            <label>Height <span className="text-red-600">*</span></label>
            <input type="number" name="height" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label>Current Weight <span className="text-red-600">*</span></label>
            <input type="number" name="weight" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <div>
            <label>Target Weight <span className="text-red-600">*</span></label>
            <input type="number" name="target_weight" onChange={handleChange} className="w-full p-2 border rounded" required />
          </div>
          <button type="submit" className="bg-orange-600 text-white p-1 px-5 rounded">Next</button>
        </form>
      </div>
    </div>
  );
};

export default Page2;
