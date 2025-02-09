import React from "react";
import { FaDumbbell } from "react-icons/fa"; // Importing an icon for features

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-8" style={{ backgroundColor: "#101011" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between "  style={{marginRight: "150px"}}>
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center" >
          <img 
            src="/src/assets/images/whychooseus.png" 
            alt="Why Choose Us" 
            className="w-80 h-80 rounded-full object-cover border-4 border-gray-700"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
          <h2 className="text-4xl font-bold">WHY CHOOSE US?</h2>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <FaDumbbell className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="text-xl font-semibold">LOREM LIPSUM</h3>
                  <p className="text-gray-400 text-sm">
                    LOREM LIPSUM LOREM LIPSUM LOREM LIPSUM LOREM LIPSUM
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
