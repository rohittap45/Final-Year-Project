import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); 
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username_or_email: email, 
          password: password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Login successful!"); 
        localStorage.setItem("token", data.token); // Store JWT token
        localStorage.setItem("user_id", data.user_id); // Store user ID separately
        window.location.href = "/dashboard"; // Redirect after login
      } else {
        setError(data.detail || "Invalid credentials");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };
  

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="text-4xl font-bold" style={{ marginRight: "70px" }}>
        <span className="text-white">Fit</span>
        <span className="text-orange-500">AI</span>
      </div>
      
      <div className="relative w-full max-w-3xl bg-orange-400 rounded-lg p-10 shadow-lg my-10">
        <div className="rectangle flex flex-row items-center justify-between gap-3">
          
          {/* Form Section */}
          <div className="w-2/3 mx-10">
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">Your email</label>
              <div className="flex items-center border-2 border-black rounded-md overflow-hidden">
                <div className="bg-yellow-500 p-3">
                  <FaUser className="text-black" />
                </div>
                <input
                  type="email"
                  placeholder="e.g. samcurry@gmail.com"
                  className="w-full p-3 text-black placeholder-gray-700 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-black font-semibold mb-2">Your password</label>
              <div className="flex items-center border-2 border-black rounded-md overflow-hidden">
                <div className="bg-yellow-500 p-3">
                  <FaLock className="text-black" />
                </div>
                <input
                  type="password"
                  placeholder="e.g. ilovedress123"
                  className="w-full p-3 text-black placeholder-gray-700 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Sign-in Button */}
            <button 
              onClick={handleLogin} 
              className="w-full bg-gray-600 text-white font-bold py-3 rounded-md hover:bg-gray-700 transition">
              Sign in
            </button>

            {/* Links */}
            <div className="flex justify-between mt-4 text-sm text-blue-600">
              <a href="signup" className="hover:underline">Don't have an account?</a>
              <a href="/resetpassword" className="hover:underline">Forget password?</a>
            </div>
          </div>

          {/* Illustration */}
          <div className="w-1/3">
            <img src="src/assets/images/boy.png" alt="Login Illustration" className="w-40 h-auto"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage; 