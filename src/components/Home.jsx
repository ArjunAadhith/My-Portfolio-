import { useState, useEffect } from "react";
import { CircleArrowOutUpRight, Download, X } from "lucide-react";
import AnimatedSvgLogo from "./AnimatedSvgLogo";

export const Home = () => {
  const [showNav, setShowNav] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [displayName, setDisplayName] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [showResume, setShowResume] = useState(false);
  const roles = ["UI/UX Designer", "Developer", "Animator", "Programmer"];
  const fullName = "Arjun Aadhith";

  // Decrypt animation effect for name
  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let interval;
    let iterations = 0;
    const maxIterations = 15;

    const decryptName = () => {
      interval = setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayName(fullName);
          return;
        }

        let result = "";
        for (let i = 0; i < fullName.length; i++) {
          if (i < iterations) {
            result += fullName[i];
          } else {
            result += characters[Math.floor(Math.random() * characters.length)];
          }
        }

        setDisplayName(result);
        iterations += 1/3;
      }, 50);
    };

    decryptName();

    return () => clearInterval(interval);
  }, []);

  // Role rotation effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Show nav when scrolling up, hide when scrolling down
      if (currentPosition > scrollPosition && currentPosition > 100) {
        // Scrolling down and not at top
        setShowNav(false);
      } else {
        // Scrolling up or at top
        setShowNav(true);
      }

      // Update scroll position
      setScrollPosition(currentPosition);

      // Determine which section is in view
      const sections = ["home", "projects", "education", "footer"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        // Map footer to Contact for activeSection state
        setActiveSection(current === "footer" ? "contact" : current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Function to get href based on navigation item
  const getNavHref = (item) => {
    if (item === "About") return "#home";
    if (item === "Contact") return "#footer"; // Point Contact to footer
    return `#${item.toLowerCase()}`;
  };

  // Function to toggle resume modal
  const toggleResume = () => {
    setShowResume(!showResume);
  };

  // Function to handle resume download
  const downloadResume = () => {
    // Replace with your actual resume path
    const resumeUrl = "Arjun Aadhith. BS Resume.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Arjun Aadhith. BS Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      <nav className={`nav ${showNav ? "show" : "hide"}`}>
        <div className="logo-container">
          <h1 className="logo">
            <AnimatedSvgLogo />
          </h1>
          <div className="logo-glow"></div>
        </div>

        <ul className="nav-links">
          {["About", "Projects", "Education", "Contact"].map((item, index) => (
            <li
              key={index}
              className={activeSection === (item === "About" ? "home" : item.toLowerCase()) ? "active" : ""}
            >
              <a href={getNavHref(item)}>
                {item}
                <div className="link-highlight"></div>
              </a>
            </li>
          ))}
        </ul>

        <button type="button" onClick={toggleResume}>
          <CircleArrowOutUpRight />
        </button>
      </nav>

      {/* Resume Modal */}
      {showResume && (
        <div className="resume-modal-overlay">
          <div className="resume-modal">
            <div className="resume-modal-header">
              <h2>My Resume</h2>
              <button onClick={toggleResume} className="close-button">
                <X size={24} />
              </button>
            </div>
            <div className="resume-content">
              <img
                src="Arjun Aadhith. BS Resume.jpg" 
                alt="Resume" 
                className="resume-image" 
              />
            </div>
            <div className="resume-actions">
              <button onClick={downloadResume} className="download-button">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="home1" id="home">
        <div className="home-img">
          <img src="new one.jpg" alt="Profile" />
        </div>

        <div className="home-content">
          <h1>
            About Me <div className="lineStyle"></div>
          </h1>
          <h2 className="name decrypt-animation">
            Hi, This is <span>{displayName}</span>
          </h2>
          <p className="role-text">
            I’m a <span className="rotating-text">{roles[currentRole]}</span>{" "}
            with expertise in full-stack development, UI/UX design, and 3D
            modeling. Passionate about creating innovative software solutions, I
            specialize in technologies like Python, Java, ReactJS, and Blender,
            aiming to deliver user-centric, high-quality projects.
          </p>
        </div>
      </section>
    </div>
  );
};