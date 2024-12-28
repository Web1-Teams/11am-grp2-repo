import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Header 
          title="مدونة أفق" 
          subtitle="محتوى يستحق القراءة" 
          backgroundImage="https://i.pinimg.com/736x/07/50/81/0750817f271177230fd0cd8741aa33e8.jpg"
        />
        <Navbar /> 
      
        <Routes>
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/hotels" element={<div>Hotels Page</div>} />
          <Route path="/tourist-places" element={<div>Tourist Places Page</div>} />
          <Route path="/restaurants" element={<div>Restaurants Page</div>} />
          <Route path="/contact-us" element={<div>Contact Us Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/who-we-are" element={<div>Who We Are Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
