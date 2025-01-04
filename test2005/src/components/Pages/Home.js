import React from 'react';
import Navbar from '../Navbar/Navbar';
import Headerhome from '../Cardshome/Headerhome';
import Cardshome from '../Cardshome/Cardshome';
import Footer from '../Footer/Footer';
import Resp from '../Recp/Resp';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Headerhome />
      <Cardshome />
      <Resp/>
      <Footer />
    </div>
  );
};

export default Home;