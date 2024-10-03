import React from "react";
import { Button } from "./Button";
import './HeroSection.scss';

import Video2 from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className="hero-container">
      <video className="videohero" src={Video2} autoPlay loop muted />
      <div className="video-overlay">
        <h1></h1>
        <p></p>
        <div className="hero-btns">
                   
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
