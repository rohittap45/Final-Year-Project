import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/HomePage/Navbar';  // Ensure correct import path
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/Registration/SignUpPage';
import ForgetPassword from './components/Login/ForgetPassword';
import Page1 from './components/Registration/Page1';
import Page2 from './components/Registration/Page2';
import Page3 from './components/Registration/Page3';
import DietPlan from './components/Diet_Plan/DietPlan';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/StaticPages/About';
import Contact from './components/StaticPages/Contact';
import WorkoutPlan from './components/Diet_Plan/WorkoutPlan';

function App() {
  return (
    <Router>
      {/* Navbar is placed outside Routes so it appears on every page */}
      <Navbar />  
      
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/signup" element={<SignUpPage />} />  
        <Route path="/resetpassword" element={<ForgetPassword />} />  
        <Route path="/page1" element={<Page1 />} /> 
        <Route path="/page2" element={<Page2 />} /> 
        <Route path="/page3" element={<Page3 />} />
        <Route path="/dietplan" element={<DietPlan />} />
        <Route path="/workoutplan" element={<WorkoutPlan />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
