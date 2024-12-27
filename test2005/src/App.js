import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'; 
import Navbar from './components/Navbar/Navbar';
// مكون الرأس
import yyImage from './assets/yy.jpg'; // تأكد من مسار الصورة

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* تمرير القيم إلى مكون Header عبر props */}
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

        
        <Navbar /> {/* مكون الشريط العلوي */}
        
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
