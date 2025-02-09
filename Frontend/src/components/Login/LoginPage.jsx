import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
      
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
         {/* Logo */}
       <div className="text-4xl font-bold" style={{marginRight: "70px"}}>
       <span className="text-white">Fit</span>
       <span className="text-orange-500">AI</span>
     </div>
      <div className="relative w-full max-w-3xl bg-orange-400 rounded-lg p-10 shadow-lg my-10">
        
        {/* Top Decorative Shape
        <div className="absolute -top-8 left-10 w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div> */}

        {/* Login Form and Illustration */}
        <div className="rectangle flex flex-row items-center justify-between gap-3">
          
          {/* Form Section */}
          <div className="w-2/3 mx-10">
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
                />
              </div>
            </div>

            {/* Sign-in Button */}
            <button className="w-full bg-gray-600 text-white font-bold py-3 rounded-md hover:bg-gray-700 transition">
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
