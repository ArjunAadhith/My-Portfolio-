import React, { useState, useEffect } from "react";
import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
  animationSpeed = 8,
  showBorder = false,
  decryptEffect = false,
}) {
  const [displayText, setDisplayText] = useState("");
  const originalText = children.toString();

  useEffect(() => {
    if (decryptEffect) {
      let iteration = 0;
      const decrypt = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        setDisplayText(
          originalText
            .split("")
            .map((char, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration < originalText.length) {
          iteration += 1 / 3;
          setTimeout(decrypt, 30);
        }
      };
      decrypt();
    } else {
      setDisplayText(originalText);
    }
  }, [originalText, decryptEffect]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div
        className={`text-content ${decryptEffect ? "decrypt-effect" : ""}`}
        style={gradientStyle}
      >
        {displayText}
      </div>
    </div>
  );
}
