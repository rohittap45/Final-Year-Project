import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password2) {
      alert("Passwords do not match!");
      return;
    }

    // Store data in localStorage
    localStorage.setItem("userData", JSON.stringify(formData));
    
    navigate("/page1");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-2xl font-bold mb-6">
        <span className="text-orange-500">Fit</span>AI
      </h1>

      <div className="relative w-full max-w-lg bg-orange-400 rounded-lg p-10 shadow-lg">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 right-4 text-black text-2xl hover:text-gray-700 transition"
        >
          <FiArrowLeft />
        </button>

        <h2 className="text-black text-3xl font-bold text-center mb-6">Registration</h2>

        <form className="space-y-4" onSubmit={handleNext}>
          <div>
            <label className="block text-black font-semibold">Email <span className="text-red-600">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black rounded-md outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Username <span className="text-red-600">*</span></label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black rounded-md outline-none"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Password <span className="text-red-600">*</span></label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black rounded-md outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label className="block text-black font-semibold">Confirm Password <span className="text-red-600">*</span></label>
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              className="w-full p-3 border-2 border-black rounded-md outline-none"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button type="submit" className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-900 transition">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
