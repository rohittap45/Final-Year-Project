import React from "react";
import { FaHandPointLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");  // Navigate to login page
    };

    const handleSignUp = () => {    
        navigate("/signup");  // Navigate to sign up page
    };

  return (
    <section className="relative w-full h-screen flex items-center bg-black text-white px-10 md:px-20" style={{backgroundColor: "#000000"}}>
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 mx-17">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight water-brush-regular">
         NO PAIN <br /> <span className="ml-10 md:ml-16">NO GAIN</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          “The worst thing I can be is the same as everybody else.” 
          <br /> <span className="ml-15 md:ml-70">- Arnold Schwarzenegger</span>
        </p>
        {/* Buttons */}
        <div className="space-x-4 my-10">
          <button onClick={handleLogin} className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Log In
          </button>
          <button onClick={handleSignUp} className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="src\assets\images\image.png"
          alt="Gym Workout"
          className="w-250 h-auto object-cover mx-3 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
