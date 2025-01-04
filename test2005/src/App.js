import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import useVisitCount from "./components/Hooks/Useeffect";
import Cardshome from "./components/Cardshome/Cardshome";
import "./App.css";
import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Pages/Home';

import Hotels from './components/Pages/Hotels';
import TouristPlaces from './components/Pages/TouristPlaces';
import Restaurants from './components/Pages/Restaurants';
import Contact from './components/Pages/Contact';
import Blog from './components/Pages/Blog';
import WhoWeAre from './components/Pages/WhoWeAre';
import PostDetail from './components/Post/PostDetail'; 
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';




const App = () => {
  const visitCount = useVisitCount();

  return (
    <Router>
      <div className="App">
        
        <Navbar />
        
         
        <Routes>
          <Route path="/" element={<Cardshome />} />
          <Route path="/home" element={<Cardshome />} />
          <Route path="/hotels" element={<div>Hotels Page</div>} />
          <Route path="/tourist-places" element={<div>Tourist Places Page</div>} />
          <Route path="/restaurants" element={<div>Restaurants Page</div>} />
          <Route path="/contact-us" element={<div>Contact Us Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/who-we-are" element={<div>Who We Are Page</div>} />
           <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
        </Routes>

        
        <div className="visit-count">
          {visitCount === 1 ? (
            <p>مرحبًا! هذه هي زيارتك الأولى. نأمل أن تستمتع بالموقع!</p>
          ) : (
            <p>مرحبًا بك مجددًا! لقد زرتنا {visitCount} مرات.</p>
          )}
        </div>

        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
