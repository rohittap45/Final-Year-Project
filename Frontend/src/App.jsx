import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/Login/LoginPage'
import HomePage from './components/HomePage/HomePage'
import SignUpPage from './components/Registration/SignUpPage'
import ForgetPassword from './components/Login/ForgetPassword';
import Page1 from './components/Registration/Page1';
import Page2 from './components/Registration/Page2';
import Page3 from './components/Registration/Page3';
import DietPlan from './components/Diet_Plan/DietPlan';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Default Homepage */}
        <Route path="/login" element={<LoginPage />} />  {/* Login Page */}
        <Route path="/signup" element={<SignUpPage />} />  {/* Sign Up Page */}
        <Route path="/resetpassword" element={<ForgetPassword />} />  {/* Forget Password Page */}
        <Route path="/page1" element={<Page1 />} /> 
        <Route path="/page2" element={<Page2 />} /> 
        <Route path="/page3" element={<Page3 />} />
        <Route path="/dietplan" element={<DietPlan />} /> 

      </Routes>
    </Router>
  )
}

export default App
