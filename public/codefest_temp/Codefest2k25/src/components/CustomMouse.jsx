import React, { useEffect, useState } from "react";
import { BsFillCursorFill } from "react-icons/bs";
import useSound from "use-sound";
import clickSound from "../sounds/Pop.wav";

const CustomMouse = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [playClick] = useSound(clickSound, { volume: 0.5 });

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };

    // Check on mount and add resize listener
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Add global CSS to hide system cursor
    const style = document.createElement('style');
    style.innerHTML = `
      body, * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const updatePos = (e) => {
      // Handle both mouse and touch events
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);

      if (clientX !== undefined && clientY !== undefined) {
        setPos({ x: clientX, y: clientY });
      }
    };

    const handleTouchStart = (e) => {
      setIsActive(true);
      playClick(); // Play sound on touch
      updatePos(e);
    };

    const handleTouchEnd = () => {
      setIsActive(false);
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener("mousemove", updatePos);
    document.addEventListener("touchmove", updatePos);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    // Mouse down/up for desktop
    document.addEventListener("mousedown", () => {
      setIsActive(true);
      playClick();
    });
    document.addEventListener("mouseup", () => setIsActive(false));

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener('resize', checkMobile);
      document.head.removeChild(style);

      document.removeEventListener("mousemove", updatePos);
      document.removeEventListener("touchmove", updatePos);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("mousedown", () => {
        setIsActive(true);
        playClick();
      });
      document.removeEventListener("mouseup", () => setIsActive(false));
    };
  }, [playClick]);

  // Don't render on mobile if isMobile is true
  if (isMobile) {
    return null;
  }

  return (
    <BsFillCursorFill
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      size={25}
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        pointerEvents: "none",
        color: "Pink",
        zIndex: 9999,
        transform: "scaleX(1) rotate(286deg)",
      }}
    />
  );
};

export default CustomMouse;