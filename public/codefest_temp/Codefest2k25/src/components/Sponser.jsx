import React, { useState, useEffect, useRef } from 'react';
import "../styles/Sponser.css";

const LOGO_IMPORTS = {
  Besant: 'https://pbs.twimg.com/profile_images/954643984110022656/AGaxDpCy_400x400.jpg',
  buff: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThG68rh-r81WiG5GbsUmOI1zS5j3q3H3zaBg&s',
  Poorvika: 'https://seeklogo.com/images/P/poorvika-mobile-logo-3A146EA209-seeklogo.com.png',
  Saravana: 'saravana scans.jpg',
  The_Heavenly_Plates: 'Heavenly Plates.png',
  zuvi: 'zuvi.jpg'
};

export const Sponser = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  const logos = Object.entries(LOGO_IMPORTS).map(([name, src]) => ({
    name: name.replace(/([A-Z])/g, ' $1').trim(),
    src
  }));

  useEffect(() => {
    const container = containerRef.current;
    
    const scrollLogos = () => {
      if (container) {
        setIsAnimating(true);
        
        // Slight delay to allow fade-out animation
        setTimeout(() => {
          setActiveIndex((prevIndex) => 
            (prevIndex + 1) % logos.length
          );
          setIsAnimating(false);
        }, 500);
      }
    };

    const intervalId = setInterval(scrollLogos, 3500);

    return () => clearInterval(intervalId);
  }, [logos.length]);

  return (
    <div className="sponsors-container">
      <h2 className="sponsors-Title">Our Sponsors</h2>
      <span className="title-glow"></span>
      <div className="sponsors-carousel-wrapper">
        <div 
          ref={containerRef}
          className="sponsors-carousel"
        >
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className={`sponsor-logo 
                ${index === activeIndex ? 'active-logo' : ''}
                ${isAnimating ? 'logo-fade' : ''}
              `}
            >
              <img 
                src={logo.src} 
                alt={logo.name}
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponser;