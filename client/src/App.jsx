import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Donate from './pages/Donate';
import SearchPage from './pages/Search';
import Contact from './pages/Contact';
import CallToAction from './pages/CallToAction';
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/call-to-action" element={<CallToAction />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
};

export default App;
