import React from "react";
import { ArrowLeft } from "lucide-react";

const Page3 = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
          {/* Title */}
      <h1 className="text-white text-3xl font-bold mb-6" style={{marginRight: "40px"}}>
        <span className="text-orange-500">Fit</span>AI
      </h1>
      <div className="max-w-lg my-5 w-full bg-orange-400 text-black p-8 rounded-2xl relative shadow-xl">
        <button className="absolute top-4 left-4 text-black">
          <ArrowLeft />
        </button>
        <h1 className="text-center text-3xl font-bold mb-6">Registration</h1>
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Target Body <span className="text-red-600">*</span>
              </label>
              <select className="w-full p-2 border rounded">
                <option value="">Select your Target Body</option>
                <option value="weight_loss">Bulcking</option>
                <option value="muscle_gain">Cut</option>
                <option value="general_fitness">General Fitness</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Fitness Goal <span className="text-red-600">*</span>
              </label>
              <select className="w-full p-2 border rounded">
                <option value="">Select your fitness goal</option>
                <option value="weight_loss">Weight Loss</option>
                <option value="muscle_gain">Muscle Gain</option>
                <option value="general_fitness">General Fitness</option>
              </select>
            </div>
            <button type="submit" className="mx-93 mt-4 bg-orange-600 text-white hover:bg-orange-700 p-1 px-5 rounded">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page3;
