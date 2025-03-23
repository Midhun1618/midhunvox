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
              'Growing up watching a lot of movies made me curious about how they were made—how every shot, cut, and detail came together to create a story that I could feel. That curiosity led me to filmmaking and eventually pushed me toward editing, where I began experimenting with short films.', 
              100,
              'Now, nine years later, I am making short films and videos with proper equipment and a deeper understanding of framing and color grading. Looking back, I realize just how far I’ve come—yet knowing there’s still so much more to learn and explore.',
              1000,
              'Along the way, exploring different filmmaking styles and understanding the art of cinematography deepened my love for cinema. I’ve traveled to diverse places, capturing landscapes in their true beauty. With every frame I compose and every scene I color, I strive to tell better stories and push my creative boundaries further every time.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="textAnimation"
            style={{ fontSize: '1.5em', display: 'inline-block', textAlign: "left", marginBottom: "70vh", width: "70%" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
