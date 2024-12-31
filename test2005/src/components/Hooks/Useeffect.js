import { useState, useEffect, useRef } from 'react';
import './Useeffect.css';
const useVisitCount = () => {
  const [visitCount, setVisitCount] = useState(0);
  const hasVisited = useRef(false); 

  useEffect(() => {
    if (!hasVisited.current) {
      hasVisited.current = true;
      const storedVisits = localStorage.getItem('visitCount');

      if (storedVisits) {
        const updatedVisits = parseInt(storedVisits, 10) + 1;
        setVisitCount(updatedVisits);
        localStorage.setItem('visitCount', updatedVisits);
      } else {
        setVisitCount(1);
        localStorage.setItem('visitCount', 1);
      }
    }
    
  }, []);

  return visitCount;
};




export default useVisitCount;
