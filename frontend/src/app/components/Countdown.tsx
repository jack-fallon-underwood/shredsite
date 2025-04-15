
'use client';

import React , {useState, useEffect} from 'react'

interface CountdownProps {
    targetDateString: string
}

function Countdown({targetDateString}: CountdownProps){

    const [timeRemaining, setTimeRemaining] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
          const targetDate = new Date(targetDateString).getTime();
          const now = new Date().getTime();
          const difference = targetDate - now;
    
          if (difference <= 0) {
            clearInterval(intervalId);
            setTimeRemaining('Countdown Finished!');
            return;
          }
    
          const days = Math.floor(difference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
          setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
    
        return () => clearInterval(intervalId); // Cleanup on unmount
      }, [targetDateString]);
    
      return <div style={{ color: 'white' }}>{timeRemaining || 'Loading...'}</div>;
    }
    
    export default Countdown