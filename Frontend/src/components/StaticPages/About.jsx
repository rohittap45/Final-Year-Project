import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-16 px-6">
      <h1 className="text-5xl font-extrabold text-orange-500 mb-6 animate-pulse">
        About FitAI
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-3xl mb-8 leading-relaxed">
        FitAI is an AI-driven fitness platform designed to provide personalized diet and workout 
        plans based on user preferences and health goals. Using advanced deep learning algorithms, 
        FitAI ensures that each user gets the most optimized fitness plan tailored to their body 
        type, lifestyle, and fitness level.
      </p>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl font-semibold text-orange-400 text-center mb-4">
          Our Vision
        </h2>
        <p className="text-gray-300 text-center">
          We believe in making fitness accessible to everyone. Our mission is to leverage AI 
          to simplify health and fitness while ensuring users achieve their goals effectively 
          and efficiently.
        </p>
      </div>
      
      <div className="mt-10 max-w-4xl w-full">
        <h2 className="text-3xl font-semibold text-orange-400 text-center mb-6">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Abhishek Patil",
            "Nitish Sonone",
            "Gitesh Uttarwar",
            "Rohit Tap",
          ].map((name, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white">{name}</h3>
              <p className="text-gray-400 text-sm">Co-Founder & Developer</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
