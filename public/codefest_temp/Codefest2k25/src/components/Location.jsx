import React, { useState, useEffect, useRef } from "react";
import "../styles/Location.css";

const Location = () => {
  const [showMap, setShowMap] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`location-container scroll-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      <h1 className={`About-Title ${isVisible ? 'title-animate' : ''}`}>
        Location
      </h1>
      <span className="title-glow"></span>
      
      <div className={`location-wrapper ${isVisible ? 'wrapper-animate' : ''}`}>
        <div className="map-section">
          <div
            className={`map-preview hover-3d-effect ${isVisible ? 'map-animate' : ''}`}
            onClick={() => setShowMap(true)}
            style={{
              backgroundImage: `url('map.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="hover-overlay"></div>
          </div>
        </div>

        <div className="text-section">
          <div 
            className={`college-name ${isVisible ? 'text-animate-1' : ''}`}
          >
            Karpaga Vinayaga College of Engineering & Technology
          </div>
          <div 
            className={`location-details ${isVisible ? 'text-animate-2' : ''}`}
          >
            <p>GST Road,</p>
            <p>Chinna Kolambakkam,</p>
            <p>Madhuranthagam(TK),</p>
            <p>Chengalpattu(DT),</p>
            <p>Tamil Nadu 603308</p>
          </div>
        </div>
      </div>

      {showMap && (
        <div
          className="map-modal animate-fade-in"
          onClick={() => setShowMap(false)}
        >
          <div
            className="map-modal-content animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.871986071898!2d79.9136875!3d12.590687499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a531d49e3a4dc6f%3A0x2485bea2ae7907a2!2sKarpaga%20Vinayaga%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1742834364290!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;