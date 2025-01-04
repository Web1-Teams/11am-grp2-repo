import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Paragraph from '../Paragraph/Paragraph';

 
const WhoWeAre = () => {
    return (
      <div>
         <Navbar/>
          <Header
          title="من نحن"
          subtitle="لنتعرف" 
          backgroundImage="https://i.pinimg.com/736x/e7/39/dd/e739dd7f2cde2df40689f79cd0c3ee94.jpg"
          /> 
         <Paragraph/>


         
      </div>
        );
      };
      
      export default WhoWeAre;