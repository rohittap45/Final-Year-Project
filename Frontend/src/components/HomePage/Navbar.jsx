import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token"); // Check if the user is logged in

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignUp = () => {
        navigate("/signup");
    };

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token on logout
        navigate(""); // Redirect to login page
    };

    return (
        <nav className="bg-black text-white py-4">
            <div className="flex justify-evenly items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <span className="text-white">Fit</span>
                    <span className="text-orange-500">AI</span>
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex space-x-8">
                    <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
                    <li><a href="/about" className="hover:text-orange-500 transition">About</a></li>
                    <li><a href="/contact" className="hover:text-orange-500 transition">Contact</a></li>
                    <li><a href="/dietplan" className="hover:text-orange-500 transition">Diet Plan</a></li>
                    <li><a href="/workoutplan" className="hover:text-orange-500 transition">Workout Plan</a></li>
                    <li><a href="/dashboard" className="hover:text-orange-500 transition">Dashboard</a></li>
                </ul>

                {/* Buttons */}
                <div className="space-x-4">
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={handleLogin}
                                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                            >
                                Log In
                            </button>
                            <button
                                onClick={handleSignUp}
                                className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
