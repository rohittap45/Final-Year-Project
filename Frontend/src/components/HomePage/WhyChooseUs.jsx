import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-16 px-16" style={{ backgroundColor: "#101011" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between" style={{ marginRight: "150px" }}>
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
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
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Personalized AI Trainer</h3>
              <p className="text-gray-400 text-sm">
                Our advanced AI Trainer customizes workouts based on your progress, preferences, and goals, providing you with a truly personalized fitness experience. Achieve your fitness targets faster and smarter.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Personalized Diet Plans</h3>
              <p className="text-gray-400 text-sm">
                Receive tailored diet plans from our expert nutritionists that suit your unique health needs and lifestyle. Stay on track with nutritious meals that complement your fitness routine.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Growth Dashboard</h3>
              <p className="text-gray-400 text-sm">
                Track your progress with our intuitive dashboard. Monitor your achievements, set new goals, and visualize your growth over time. Stay motivated by seeing your efforts pay off.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
              <p className="text-gray-400 text-sm">
                Enjoy an easy-to-use platform that makes navigating your fitness journey a breeze. Whether you're a beginner or a pro, our seamless design ensures a smooth and enjoyable experience.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
