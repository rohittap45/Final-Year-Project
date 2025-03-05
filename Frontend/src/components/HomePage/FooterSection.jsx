import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FooterSection = () => {
    const navigate = useNavigate();

    const handleLogin = () => { 
        navigate("/login");  // Navigate to login page
    };
  return (
    <section className="bg-black text-white py-16 px-8" style={{ backgroundColor: "#0C090A" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Section */}
        <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0 ">
          <h2 className="text-4xl font-extrabold text-orange-500 leading-tight">
            Ready to get
          </h2>
          <h2 className="text-4xl font-extrabold text-orange-500 leading-tight">
            Started?
          </h2>

          <p className="text-sm mt-4 text-gray-300">
            Create your <span className="font-bold">30-day free</span> trial and get started today!
          </p>
          <button onClick={handleLogin} className="mt-6 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-orange-600 transition">
            Get started
          </button>
        </div>

    

        {/* Right Section - Contact */}
        <div className="md:w-1/3" >
          <h3 className="text-orange-500 text-sm font-bold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center space-x-3">
              <MdEmail className="text-orange-500 text-lg" />
              <span>support@fitai.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="text-orange-500 text-lg" />
              <span>Toll Free (US & Canada): 1 877 910 6497</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="text-orange-500 text-lg" />
              <span>UK: 0203 966 6570</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="text-orange-500 text-lg" />
              <span>International: +1 289 861 7108</span>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-white text-lg cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-white text-lg cursor-pointer hover:text-gray-400" />
            <FaYoutube className="text-white text-lg cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
