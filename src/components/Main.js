import React from 'react';
import './Main.css';
import iCardtop from './iCardtop.png';
import booktop from './booktop.png';
import { TypeAnimation } from 'react-type-animation';


function Main() {
  return (
    <div className='block'>
      <div className='bg'>
        <img 
          src={booktop}
          alt="Sample"
          className='kazha'
        />
      </div>
      
      <div className="container">
        <div className="image-container">
          <img 
            src={iCardtop}
            alt="Sample"
          />
        </div>

        {/* Typewriter Effect on the Right */}
        <div className="text-container">
         
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '    This is a sample paragraph placed on the right side of the screen. You can add more content here and style it as needed.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        // 'We produce food for Hamsters',
        // 1000,
        // 'We produce food for Guinea Pigs',
        // 1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      className='textAnimation'
      style={{ fontSize: '1.5em', display: 'inline-block', textAlign:"left", marginBottom:"70vh", width:"70%" }}
      repeat={Infinity}
    />
        </div>
      </div>
    </div>
  );
}

export default Main;
