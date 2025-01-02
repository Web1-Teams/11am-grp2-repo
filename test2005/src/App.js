import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/tourist-places" element={<TouristPlaces />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
      </Routes>
    </Router>
  );
}

export default App;