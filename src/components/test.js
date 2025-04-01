import React from "react";
import anim from './gified.gif';
import hill from './jammuopener.png';
import sunsetv from  './gothambpadam.jpg'
import "./GifComponent.css";

const GifComponent = () => {
  return (
    
    <div className="gif-container">
      <img
        src={anim} 
        alt="Animated GIF"
        className="gif-image"
        loop="infinite"
      />
      <div className="fsec-container">
      <img
        src={hill} 
        alt="Animated GIF"
        className="fl-image"/>
        <div className="editortext-cont">EDITOR</div>
        <img
          src={sunsetv} 
          alt="Animated GIF"
          className="fl-image"/>
      </div>
    </div>
      
    
  );
};

export default GifComponent;
