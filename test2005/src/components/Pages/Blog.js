import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import PostBox from '../PostB/PostBox';
import PostContainer from '../PostB/PostContainer';
import PostFilter from '../PostB/PostFilter';

 
const Blog = () => {
    return (
      <div>
         <Navbar/>
          <Header
          title="مدونة أفق"  
          subtitle="مدونة تستحق قراءة" 
          backgroundImage="https://i.pinimg.com/736x/2c/81/03/2c810352bcbdfa12cbe35bc9201bd3be.jpg"
         
         />
        
         <PostContainer/>
       
      </div>
        );
      };
      
      export default Blog ;