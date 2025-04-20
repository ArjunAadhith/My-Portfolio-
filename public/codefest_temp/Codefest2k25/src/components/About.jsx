import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/About.css";

const About = React.forwardRef((props, ref) => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    });

    // Create digital particles
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('digital-particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        
        aboutSection.appendChild(particle);
      }
    }

    // Add floating elements
    const createFloatingElements = () => {
      const container = document.querySelector('.about-section');
      if (container) {
        for (let i = 0; i < 15; i++) {
          const floater = document.createElement('div');
          floater.classList.add('floating-element');
          
          // Random properties
          floater.style.left = `${Math.random() * 100}%`;
          floater.style.top = `${Math.random() * 100}%`;
          floater.style.width = `${Math.random() * 15 + 5}px`;
          floater.style.height = floater.style.width;
          floater.style.animationDuration = `${Math.random() * 20 + 10}s`;
          floater.style.animationDelay = `${Math.random() * 5}s`;
          
          container.appendChild(floater);
        }
      }
    };
    
    createFloatingElements();
  }, []);
  
  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="animated-bg"></div>
      
      <h1 
        data-aos="fade-up"
        data-aos-duration="1200"
        className="About-Title">
        About
        <span className="title-glow"></span>
      </h1>
      
      <div className="about-container">
        <div className="image-container" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
          <div className="animated-gradient"></div>
          <img
            src="Group 21.jpg"
            alt="College"
            className="about-image"
          />
        </div>
        
        <div 
          className="about-text"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400">
          <h1>About Our College</h1>
          <p>
            Karpaga Vinayaga College of Engineering and Technology is committed to excellence in education, research, and innovation. 
            Our mission is to empower students with knowledge and skills to succeed in the tech industry.
          </p>
          <div onClick={() => window.open("https://kveg.in/", "_blank")} className="glow-button" data-aos="fade-up" data-aos-delay="600">
            Learn More
          </div>
        </div>
      </div>
      
      <div className="about-container reverse">
        <div 
          className="about-text"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400">
          <h1>CodeFest 2K25 Symposium</h1>
          <p>
          Codefest 2K25 blends innovation and excitement! Solve problems, push boundaries, and embrace strategy, teamwork, and celebration. Whether competing or discovering, each challenge fuels brilliance. Get ready to code, create, and conquer!</p>
          <div onClick={() => scrollToSection("events")} className="glow-button" data-aos="fade-up" data-aos-delay="600">
            Explore Events
          </div>
        </div>
        
        <div className="image-container" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300">
          <div className="animated-gradient gradient-alt"></div>
          <img
            src="c_logo.png"
            alt="Symposium"
            className="about-image"
          />
        </div>
      </div>
      
      <div className="tech-path" data-aos="fade-up" data-aos-duration="1500">
        <div className="path-node" data-aos="zoom-in" data-aos-delay="200">
          <div className="node-icon coding"></div>
          <h3>Coding</h3>
        </div>
        <div className="path-connector"></div>
        <div className="path-node" data-aos="zoom-in" data-aos-delay="400">
          <div className="node-icon ai"></div>
          <h3>AI</h3>
        </div>
        <div className="path-connector"></div>
        <div className="path-node" data-aos="zoom-in" data-aos-delay="600">
          <div className="node-icon innovation"></div>
          <h3>Innovation</h3>
        </div>
      </div>
    </section>
  );
});

export default About;