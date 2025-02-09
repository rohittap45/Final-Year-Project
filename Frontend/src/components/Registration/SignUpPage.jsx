import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const SignUpPage = () => {
  const navigate = useNavigate(); // Hook for navigation
  const handleRegister = () => {  
    // Function to handle registration
    navigate("/page1");  // Navigate to next page
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-white text-2xl font-bold mb-6">
        <span className="text-orange-500">Fit</span>AI
      </h1>

      {/* Registration Form */}
      <div className="relative w-full max-w-lg bg-orange-400 rounded-lg p-10 shadow-lg">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 right-4 text-black text-2xl hover:text-gray-700 transition"
        >
          <FiArrowLeft />
        </button>

        {/* Form Heading */}
        <h2 className="text-black text-3xl font-bold text-center mb-6">Registration</h2>

        {/* Input Fields */}
        <form className="space-y-4">
          <div>
            <label className="block text-black font-semibold">Email <span className="text-red-600">*</span></label>
            <input type="email" className="w-full p-3 border-2 border-black rounded-md outline-none" placeholder="Enter your email" required />
          </div>

          <div>
            <label className="block text-black font-semibold">Username <span className="text-red-600">*</span></label>
            <input type="text" className="w-full p-3 border-2 border-black rounded-md outline-none" placeholder="Enter your username" required />
          </div>

          <div>
            <label className="block text-black font-semibold">Password <span className="text-red-600">*</span></label>
            <input type="password" className="w-full p-3 border-2 border-black rounded-md outline-none" placeholder="Enter your password" required />
          </div>

          <div>
            <label className="block text-black font-semibold">Confirm Password <span className="text-red-600">*</span></label>
            <input type="password" className="w-full p-3 border-2 border-black rounded-md outline-none" placeholder="Re-enter your password" required />
          </div>

          {/* Submit Button */}
          <button onClick={handleRegister}  className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-900 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
