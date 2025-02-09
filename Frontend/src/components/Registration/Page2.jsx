import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate= useNavigate();

  const handleNext = () => {  
      navigate("/page3");  // Navigate to page 2
  }
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
                Height <span className="text-red-600">*</span>
              </label>
              <input type="text" placeholder="Height" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Weight <span className="text-red-600">*</span>
              </label>
              <input type="text" placeholder="Current Weight" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Target Weight <span className="text-red-600">*</span>
              </label>
              <input type="number" placeholder="Target Weight" className="w-full p-2 border rounded" />
            </div>
            <button onClick={handleNext} type="submit" className="mx-93 mt-4 bg-orange-600 text-white hover:bg-orange-700 p-1 px-5 rounded">
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page2;
