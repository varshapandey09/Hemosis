// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Services from './components/Services';
import About from './components/About';
import CallToAction from './components/CallToAction';
import DonateUs from './components/DonateUs';
import DashboardBloodBank from './components/DashboardBloodBank';
import BloodBankPrivateRoute from './components/BloodBankPrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<HeroSection />} />
          <Route path="/donate-us" element={<DonateUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/call-to-action" element={<CallToAction />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/dashboard" 
            element={<BloodBankPrivateRoute element={<DashboardBloodBank />} />} 
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
