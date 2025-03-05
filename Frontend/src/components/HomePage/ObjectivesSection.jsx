import React from "react";

const ObjectivesSection = () => {
  return (
    <section className="bg-black text-white py-16 px-8" style={{ backgroundColor: "#101011" }}>
      <h2 className="text-center text-3xl font-bold mb-10">OBJECTIVES</h2>

      {/* First Objective Row */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 mx-25">
        <p className="md:w-1/2 text-left text-lg px-6">
          To create adaptive algorithms that generate customized workout routines 
          based on individual user data, fitness goals, and performance history.
        </p>
        <img 
          src="src/assets/images/workoutplan.png" 
          alt="Workout Plan"
          className="md:w-1/4 w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Second Objective Row */}
      <div className="flex flex-col md:flex-row items-center justify-between mx-25">
        <img 
          src="src/assets/images/girl.png" 
          alt="Workout Illustration"
          className="md:w-1/4 w-full rounded-lg shadow-lg"
        />
        <p className="md:w-1/2 text-left text-lg px-6">
        To Develop an AI-driven system to analyze workout videos and provide immediate feedback on exercise form and posture to prevent injuries.

        </p>
      </div>
       {/* Third Objective Row */}
       <div className="flex flex-col md:flex-row items-center justify-between mb-10 mx-25">
        <p className="md:w-1/2 text-left text-lg px-6">
        To Integrate advanced data analytics to monitor and visualize users' fitness progress, providing actionable insights for continuous improvement.
        </p>
        <img 
          src="src/assets/images/3699912.jpg" 
          alt="Workout Plan"
          className="md:w-1/4 w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Fourth Objective Row */}
      <div className="flex flex-col md:flex-row items-center justify-between mx-25">
        <img 
          src="src/assets/images/sporthome.jpg" 
          alt="Workout Illustration"
          className="md:w-1/4 w-full rounded-lg shadow-lg"
        />
        <p className="md:w-1/2 text-left text-lg px-6 ">
        To Design an intuitive, user-friendly platform that allows seamless video uploads, real-time feedback, and easy access to personalized fitness recommendations.

        </p>
      </div>
    </section>
  );
};

export default ObjectivesSection;
