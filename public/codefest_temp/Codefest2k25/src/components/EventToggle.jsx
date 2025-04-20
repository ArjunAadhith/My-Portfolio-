import React, { useState, useEffect } from "react";
import TechnicalEvents from "./TechnicalEvents";
import NonTechnicalEvents from "./NonTechnicalEvents";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/EventToggle.css";

const EventToggle = () => {
  const [isTechnical, setIsTechnical] = useState(true);

  const handleToggle = () => {
    setIsTechnical((prev) => !prev);
  };

  // Scroll reveal functionality
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (elementTop < windowHeight * 0.75) {
          el.classList.add('is-visible');
        } else {
          el.classList.remove('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <>
      <div className="About-Title scroll-reveal">
        Events
        <span className="title-glow"></span>
      </div>
      
      <div className="event-toggle-container scroll-reveal">
        <div
          className="toggle-switch scroll-reveal"
          onClick={handleToggle}
          role="switch"
          aria-checked={isTechnical}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleToggle();
            }
          }}
        >
          <div className={`toggle-slider ${isTechnical ? "technical" : "non-technical"}`}></div>
          <div>
            <span className="toggle-text technical-text">Technical</span>
            <span className="toggle-text non-technical-text">Non-Technical</span>
          </div>
        </div>
        <div className="events-container scroll-reveal">
          {isTechnical ? <TechnicalEvents /> : <NonTechnicalEvents />}
        </div>
      </div>
    </>
  );
};

export default EventToggle;