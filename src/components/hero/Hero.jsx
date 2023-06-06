import React from "react";
import './Hero.css';
import videoSource from "../../assets/herovid.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <video
          src={videoSource}
          muted
          loop
          autoPlay
          playsInline
          className="hero-video"
        />
        <div className="hero-text">
          <h1>let's get schwifty</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
