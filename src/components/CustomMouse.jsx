import { useEffect, useState } from "react";
import "../App.css";
import { BsFillCursorFill } from "react-icons/bs";

const CustomMouse = () => {
  const [pos, setpos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePos = (e) => {
      setpos({ x: e.clientX, y: e.clientY });
    };

    // Check if the screen size is mobile or tablet
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth > 768); // Hide on screens smaller than 768px
    };

    // Initial check
    checkScreenSize();

    // Add event listeners
    document.addEventListener("mousemove", updatePos);
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousemove", updatePos);
      window.addEventListener("resize", checkScreenSize);
    };
  }, []);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <BsFillCursorFill
      className="custom-cursor"
      size={20}
      style={{
        position: "fixed", // Changed from "pos" to "position"
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        pointerEvents: "none",
        color: "yellow",
      }}
    />
  );
};

export default CustomMouse;