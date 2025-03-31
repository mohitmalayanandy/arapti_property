import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Properties from './pages/Properties';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/properties" element={<Properties />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;