import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import { Education } from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import CustomMouse from "./components/CustomMouse.jsx";
import SplashCursor from "./components/SplashCursor.jsx";
import LogoTicker from "./components/LogoTicker.jsx";
import TextAnimation from "./components/TextAnimation.jsx"; // Import the new component

function App() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    // Add a slight delay before showing content
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  // Add scroll behavior without changing existing styles
  useEffect(() => {
    // Handle navigation clicks
    const handleNavClick = (e) => {
      // Only process links inside the navigation
      if (
        e.target.tagName === "A" &&
        e.target.parentElement.parentElement.classList.contains("nav")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleNavClick);

    return () => {
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return (
    <>
      {/* Add text animation that shows first */}
      {!animationComplete && (
        <TextAnimation onAnimationComplete={handleAnimationComplete} />
      )}
      
      {/* Wrap all existing content in a div with visibility control */}
      <div className={`content ${showContent ? 'visible' : ''}`}>
        <div id="home">
          <Home />
          <LogoTicker />
          {/* <InfinitySlider /> */}
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="footer">
          <Footer />
        </div>
        <CustomMouse />
        <SplashCursor />
        {/* <Aurora
          colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]}
          blend={1.0}
          amplitude={1.0}
          speed={0.5}
        /> */}
      </div>
    </>
  );
}

export default App;