import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/time.css";

const Time = ({ aboutSectionRef, footerRef }) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const mainTimerRef = useRef(null);
  const [particles, setParticles] = useState([]);

  const handleRegister = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdKku886Omny2C4owkq1xBub4ss1fD-CHH8mQYCPwUNjwNT3A/viewform?usp=dialog", "_blank");
  };

  // Update countdown timer
  useEffect(() => {
    const targetDate = new Date("2025-04-04T09:00:00");
    
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate - now;
      
      setTime({
        days: Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((timeDifference % (1000 * 60)) / 1000)),
      });
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating code particles
  useEffect(() => {
    const generateParticles = () => {
      const codeSymbols = [
        "{}", "[]", "<>", "//", "&&", "||", "==", "+=", "=>", 
        "if", "for", "let", "var", "int", "def", "class", "=>",
        "0101", "1010", "function", "return", "import", "export"
      ];
      
      const newParticles = [];
      const particleCount = window.innerWidth < 768 ? 15 : 30;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * (1.5 - 0.8) + 0.8,
          opacity: Math.random() * (0.7 - 0.2) + 0.2,
          speed: Math.random() * (1.5 - 0.5) + 0.5,
          text: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
          delay: Math.random() * 5
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    window.addEventListener('resize', generateParticles);
    
    return () => {
      window.removeEventListener('resize', generateParticles);
    };
  }, []);

  // Format number to always have two digits
  const formatNumber = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div
      ref={mainTimerRef}
      className="time-container d-flex justify-content-center align-items-center"
    >
      <div className="floating-code-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="code-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size}rem`,
              opacity: particle.opacity,
              animationDuration: `${30 / particle.speed}s`,
              animationDelay: `${particle.delay}s`
            }}
          >
            {particle.text}
          </div>
        ))}
      </div>
      
      <div className="blur-layer"></div>
      
      <section className="time d-flex justify-content-center align-items-center">
        <div className="matrix-rain"></div>
        
        <div 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          className="container text-center countdown-container"
        >
          <div className="glitch-wrapper">
            <h1 className="countdown-title" data-text="CODEFEST 2K25">
              CODEFEST <span className="year-highlight">2K25</span>
            </h1>
          </div>
          
          <div className="binary-subtitle">
            <p className="countdown-subtitle">
              <span className="binary-bit">{'<'}</span> EVENT STARTS IN <span className="binary-bit">{'>'}</span>
            </p>
          </div>
          
          <div className="countdown-wrapper">
            {[
              { unit: "Days", value: time.days },
              { unit: "Hours", value: time.hours },
              { unit: "Minutes", value: time.minutes },
              { unit: "Seconds", value: time.seconds }
            ].map((item, index) => (
              <div key={index} className="countdown-item">
                <div className="countdown-value">
                  <div className="digit-flip-card">
                    <span className="countdown-digit">{formatNumber(item.value)}</span>
                    <div className="digit-reflection"></div>
                  </div>
                  <div className="circuit-lines"></div>
                </div>
                <span className="countdown-label">{item.unit}</span>
                {index < 3 && <span className="countdown-separator">:</span>}
              </div>
            ))}
          </div>
          
          <div className="register-button-container">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKku886Omny2C4owkq1xBub4ss1fD-CHH8mQYCPwUNjwNT3A/viewform?usp=dialog" className="register-button" target="_blank">
              <span className="button-text">{'<'} REGISTER NOW {'>'}</span>
              <span className="button-flash"></span>
              <div className="button-circuit-lines"></div>
            </a>
          </div>
          
          <div className="tech-decorations">
            <div className="cpu-decoration left"></div>
            <div className="cpu-decoration right"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Time;