import React, { useState, useEffect } from 'react';
import './TextAnimation.css';

const TextAnimation = ({ onAnimationComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHome, setShowHome] = useState(false);

  const animationSteps = [
    { text: "Make", color: "#c44ed1" },      // Bright purple
    { text: "A", color: "#4b5fe2" },         // Blue
    { text: "Difference", color: "#c4c4c4" } // Light gray
  ];

  useEffect(() => {
    if (currentStep < animationSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 800); // Time each word stays on screen

      return () => clearTimeout(timer);
    } else {
      // Show line animation after words
      const linesTimer = setTimeout(() => {
        // After line animation completes, show home page
        setShowHome(true);
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 1000); // Reduced delay for faster transition to home page

      return () => clearTimeout(linesTimer);
    }
  }, [currentStep, animationSteps.length, onAnimationComplete]);

  return (
    <div className={`animation-container ${showHome ? 'fade-out' : ''}`}>
      {currentStep < animationSteps.length ? (
        <div className="text-animation">
          <h1
            className="animated-text"
            style={{ color: animationSteps[currentStep].color }}
          >
            {animationSteps[currentStep].text}
          </h1>
        </div>
      ) : (
        <div className="lines-animation">
          <div className="lines line-1"></div>
          <div className="lines line-2"></div>
          <div className="lines line-3"></div>
          <div className="lines line-4"></div>
          <div className="lines line-5"></div>
          <div className="lines line-6"></div>
          <div className="lines line-7"></div>
          <div className="lines line-8"></div>
          <div className="lines line-9"></div>
        </div>
      )}
    </div>
  );
};

export default TextAnimation;
