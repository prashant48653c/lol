import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './footer.scss'
const Footer = () => {
 
  const [currentTime, setCurrentTime] = useState('12:00 PM');

  useEffect(() => {
    const updateTime = () => {
      const now = moment();
      const formattedTime = now.format('hh:mm A');
      setCurrentTime(formattedTime);
    };

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <footer className='footer'>
    
        
       <div className='footer-flex' > 
      
       <span className='dot'>{currentTime}</span>
        </div>

   
        <div>
        
            <a  href="mailto: safal.connect@gmail.com" > <span style={{cursor:"pointer"}}>Email</span> </a>
            <a  target='_blank' href='https://www.linkedin.com/in/safalpoudel7/'><span style={{cursor:"pointer"}}>Linkedin</span></a>
        </div>

       
    </footer>
  )
}

export default Footer