// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home';
import Course from './Components/Pages/Course';
import Contact from './Components/Pages/Contact';
import Login from './Components/Login';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Context/AuthProvider';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<ProtectedRoute><Course /></ProtectedRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
