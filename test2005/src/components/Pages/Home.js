import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Headerhome from '../components/Cardshome/Headerome';
import Cardshome from '../components/Cardshome/Cardshome'; 
import Footer from '../components/Footer/Footer'; 
import useVisitCount from "./components/Hooks/Useeffect";
import "./App.css";

const Home = () => {
    const visitCount = useVisitCount();
  return (
    <div>
    
      <Navbar />

   
      <Headerhome />

      <Cardshome />
      
      <div className="visit-count">
          {visitCount === 1 ? (
            <p>مرحبًا! هذه هي زيارتك الأولى. نأمل أن تستمتع بالموقع!</p>
          ) : (
            <p>مرحبًا بك مجددًا! لقد زرتنا {visitCount} مرات.</p>
          )}
        </div>

  
      <Footer />
    </div>
  );
};

export default Home;