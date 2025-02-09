import React from "react";
import { ArrowLeft } from "lucide-react";

const ForgetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black">
         <div className="text-4xl font-bold" style={{marginRight: "50px"}}>
       <span className="text-white">Fit</span>
       <span className="text-orange-500">AI</span>
     </div>
      <div className="max-w-lg my-10 w-full bg-orange-400 text-black p-8 rounded-2xl relative shadow-xl">
        <button className="absolute top-4 left-4 text-black">
          <ArrowLeft />
        </button>
        <h1 className="text-center text-3xl font-bold mb-6">Forget password</h1>
        <div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Enter last password you remember <span className="text-red-600">*</span>
              </label>
              <input type="password" placeholder="Last Password" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                New Password <span className="text-red-600">*</span>
              </label>
              <input type="password" placeholder="New Password" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input type="password" placeholder="Confirm Password" className="w-full p-2 border rounded" />
            </div>
            <button type="submit" className="w-full mt-4 bg-black text-white hover:bg-gray-800 p-2 rounded">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
