import React from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Pages/Home';

import Hotels from './components/Pages/Hotels'
import TouristPlaces from './components/Pages/TouristPlaces';
import Restaurants from './components/Pages/Restaurants';
import Contact from './components/Pages/Contact';
import Blog from './components/Pages/Blog';
import WhoWeAre from './components/Pages/WhoWeAre';

import Contact from './components/Pages/Contact';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import PostDetail from './components/Post/PostDetail'; 








const App = () => {
  return (
    <Router>
      <div className="App">
        
        
      <Navbar />


      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/tourist-places" element={<TouristPlaces />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/post/:id" element={<PostDetail />} />

      </Routes>
      </div>

    </Router>
    
  );
}

export default App;