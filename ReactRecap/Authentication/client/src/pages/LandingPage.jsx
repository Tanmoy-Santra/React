import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to AuthMaster 🔐</h1>
      <p className="text-gray-600 text-lg mb-8">Secure Authentication with Email, OTP, Captcha & JWT</p>
      <div className="flex gap-4">
        <Link to="/login" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Login</Link>
        <Link to="/signup" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;
