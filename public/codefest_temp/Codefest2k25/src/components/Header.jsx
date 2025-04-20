import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegister = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdKku886Omny2C4owkq1xBub4ss1fD-CHH8mQYCPwUNjwNT3A/viewform?usp=dialog", "_blank");
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        return;
      }
    }

    navigate("/", { state: { scrollTo: sectionId } });
    setIsMenuOpen(false);
  };


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
    <header className="header-container">
      <div className="header-content container d-flex justify-content-between align-items-center">
        <h3 className="logo">CODEFEST 2K25</h3>

       
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation("home"); }}>
            Home
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation("about"); }}>
            About
          </a>
          <a href="#events" onClick={(e) => { e.preventDefault(); handleNavigation("events"); }}>
            Events
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation("contact"); }}>
            Contact
          </a>
        </nav>

      
        <button className="register-btn" onClick={handleRegister}>Register Now</button>

        
        <div className="menu-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;