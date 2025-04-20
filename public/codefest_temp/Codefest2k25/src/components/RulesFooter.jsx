import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/RulesFooter.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RulesFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const handleNavigation = (sectionId) => {
      // If we're already on home page
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setIsMenuOpen(false);
          return;
        }
      }
      // If on another page, navigate to home first
      navigate("/", { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
    };
  
    // Scroll to section after home page loads
    useEffect(() => {
      if (location.state?.scrollTo) {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    }, [location]);

  return (
    <footer className="code-footer">
      <div className="code-footer-container">
        <div className="code-footer-left">
          <div className="code-footer-logo">CODEFEST 2K25</div>
          <div className="code-footer-social">
            <a href="mailto:kvcodfest23@gmail.com" className="code-social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+917708252595" className="code-social-icon">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="https://maps.app.goo.gl/5EV59h55KDJEaFqF7" target="_blank" className="code-social-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
            <a href="https://www.instagram.com/codefest_2k25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="code-social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="code-footer-right">
          <div className="code-footer-nav">
            <a href="#events" className="code-nav-link" onClick={(e) => { e.preventDefault(); handleNavigation("events"); }}>
            Events
          </a>
          <a href="#contact" className="code-nav-link" onClick={(e) => { e.preventDefault(); handleNavigation("contact"); }}>
            Contact
          </a>
          </div>
        </div>
      </div>
      <div className="code-footer-bottom">
        <p className="code-copyright">© CODEFEST 2K25 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default RulesFooter;