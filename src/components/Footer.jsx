import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect } from "react";

const Footer = () => {
  // Function to create glowing particles
  useEffect(() => {
    const footerContainer = document.querySelector('.footer-container');
    if (!footerContainer) return;

    // Create random particles
    const createParticles = () => {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positions and delay
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `${Math.random() * 30}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        footerContainer.appendChild(particle);
      }
    };

    createParticles();

    // Clean up particles when component unmounts
    return () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div className="footer-container">
      <h2>Let’s Work Together!</h2>
      
      <div className="footer-icons">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcQsZKnsHRxDrMWzXdzNvWFrqnMxCkGQgHbTtGhCmhtHKLGMJNXrrVMJrzQJZJkvXpGjq"
          target="_self"
        >
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/arjunaadhith5/" target="_self">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ArjunAadhith" target="_self">
          <FaGithub />
        </a>
      </div>
      
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
      
      {/* Bottom image with reduced opacity */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          zIndex: 1,
          opacity: 0.4, // Reduced opacity here
          animation: 'backgroundReveal 2s ease forwards'
        }}
      >
        <img
          src="Showtime_Gallery_1.png"
          alt="Showtime Gallery"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
};

export default Footer;