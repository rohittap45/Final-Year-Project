import React from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");  // Navigate to login page
    };

    const handleSignUp = () => {    
        navigate("/signup");  // Navigate to sign up page
    };
    return (
        <nav className="bg-black text-white py-4">
            <div className="flex justify-evenly items-center ">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <span className="text-white">Fit</span>
                    <span className="text-orange-500">AI</span>
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex space-x-8 mx-45">
                    <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition">About</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
                    <li><a href="#" className="hover:text-orange-500 transition">Anything</a></li>
                </ul>

                {/* Buttons */}
                <div className="space-x-4">
                    <button
                        onClick={handleLogin}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        Log In
                    </button>
                    <button onClick={handleSignUp} className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
