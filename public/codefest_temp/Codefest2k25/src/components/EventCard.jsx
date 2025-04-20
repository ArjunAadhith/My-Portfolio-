import React, { useState, useEffect, useRef } from "react";
import "../styles/EventCard.css";

const Card3D = ({ event }) => {
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: `${x}%`, y: `${y}%` });

    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    const encodedEvent = encodeURIComponent(JSON.stringify(event));
    // Save to session storage as fallback
    sessionStorage.setItem("currentEvent", JSON.stringify(event));
    // Change URL without full page reload
    window.history.pushState({}, "", `/rules?event=${encodedEvent}`);
    // Trigger navigation for single-page apps
    window.dispatchEvent(new Event("popstate"));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card-3d scroll-reveal ${isVisible ? "is-visible" : ""}`}
      style={{
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
        animationDelay: `${Math.random() * 0.5}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-3d-inner"
        style={{
          transform: `rotateY(${rotation.rotateY}deg) rotateX(${rotation.rotateX}deg)`,
          transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="card-3d-front">
          <div className="card-3d-image">
            <img
              src={event.background}
              alt="Card Image"
              className="transform transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="card-3d-content">
            <h3 className="card-3d-title">{event.title}</h3>
            <p className="card-3d-text">{event.points[0]}</p>
            <a
              href={`/rules?event=${encodeURIComponent(JSON.stringify(event))}`}
              className="card-3d-button group"
              onClick={handleExploreClick}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "inline-block",
                position: "relative",
              }}
            >
              Explore More
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
          </div>
          <div className="corner-glow corner-glow-top-left"></div>
          <div className="corner-glow corner-glow-top-right"></div>
          <div className="corner-glow corner-glow-bottom-left"></div>
          <div className="corner-glow corner-glow-bottom-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;
