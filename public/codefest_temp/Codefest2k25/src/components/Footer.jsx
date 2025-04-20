import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-logo">CODEFEST 2K25</h2>
            <p className="footer-description">
              Dive into the world of technology and innovation. Join us on this thrilling journey!
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-header">Quick Links</h3>
            <ul className="footer-links">
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("about")}>About Us</li>
              <li onClick={() => scrollToSection("events")}>Events</li>
              <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-header">Contact Us</h3>
            <p className="footer-contact">
              <FaMapMarkerAlt className="contact-icon" />
              G.S.T Road, Chinna Kolambakkam,
            </p>
            <p className="footer-contact">
              Madhuranthagam (T.k), Chengalpattu (D.t)-603308
            </p>
            <a className="emaila" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMqjJpkDbcwqbLDpSDkLzsHXHrRGjCxMlRgxGwtxGXlksXNpftGwRDJzmdMFVNxmtLzHbwB"><p className="footer-contact">
              <IoMail className="contact-icon" />kvcodfest23@gmail.com
            </p></a>
          </div>
          <div className="footer-section">
            <h3 className="footer-header">Our Team</h3>
            <div className="team-info">
              <p className="team-label">Developed By</p>
              <span className="team-name" onClick={() => window.open("https://www.linkedin.com/in/jeeva-p-a541242a3", "_blank")}>Jeeva P</span>
              <span className="team-name" onClick={() => window.open("https://www.linkedin.com/in/jeeva-v-b2a44b274", "_blank")}>Jeeva V</span>
              
              <p className="team-label">Designed By</p>
              <span className="team-name" onClick={() => window.open("https://www.linkedin.com/in/arjunaadhith5", "_blank")} >Arjun Aadhith BS</span>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-header">Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/codefest_2k25" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/KarpagaVinayagaCollegeOfEngineeringAndTechnology" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/school/karpaga-vinayaga-college-of-engineering-and-technology/" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a>
              <a href="https://maps.app.goo.gl/5EV59h55KDJEaFqF7" aria-label="Location">
                  <FaMapMarkerAlt/>
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© CODEFEST 2K25. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;