import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import useVisitCount from './components/Hooks/Useeffect';
import "./App.css";

const App = () => {
  const visitCount = useVisitCount();
  return (
    <Router>
      <div className="App">
        
        <Header 
          title="مدونة أفق" 
          subtitle="محتوى يستحق القراءة" 
          

        />
        <div className="intro-paragraph">
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>fgrkgprgkrfpgkrpgrkg</p>
          <p>هذه مدونة تقدم محتوى مميزًا حول مختلف المواضيع. تجد هنا مقالات عن السياحة، الفن، الثقافة، والمزيد. نتمنى أن تستمتع بتصفح المقالات وأن تجد ما يهمك.</p>
        </div>

        
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
      <div className="visit-count">
        {visitCount === 1 ? (
          <p>مرحبًا! هذه هي زيارتك الأولى. نأمل أن تستمتع بالموقع!</p>
        ) : (
          <p>مرحبًا بك مجددًا! لقد زرتنا {visitCount} مرات.</p>
        )}
      </div>
      <Footer />
    </Router>
  );
}

export default App;