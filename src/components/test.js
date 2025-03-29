import React from "react";
import anim from './gified.gif';
import hill from './jammuopener.png';
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
      <div>
      <img
        src={hill} 
        alt="Animated GIF"
        className="fl-image"
        loop="infinite"/>
        <div className="editortext-cont">EDITOR</div>
        <img
          src={hill} 
          alt="Animated GIF"
          className="fl-image"
          loop="infinite"/>
      </div>
    </div>
      
    
  );
};

export default GifComponent;
