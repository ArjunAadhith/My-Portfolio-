import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import "../styles/RulesPage.css";
import Header from "./Header.jsx";
import RulesFooter from "./RulesFooter.jsx";

const RulesPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [event, setEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [animatedItems, setAnimatedItems] = useState([]);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // Function to parse event data from different sources
    const parseEventData = () => {
      // 1. Check location state (preferred method for same-session navigation)
      if (location.state?.eventData) {
        setEvent(location.state.eventData);
        localStorage.setItem('currentEvent', JSON.stringify(location.state.eventData));
        setLoading(false);
        return true;
      }

      // 2. Check URL parameters
      try {
        const eventParam = searchParams.get("event");
        if (eventParam) {
          const decodedEvent = JSON.parse(decodeURIComponent(eventParam));
          setEvent(decodedEvent);
          localStorage.setItem('currentEvent', JSON.stringify(decodedEvent));
          setLoading(false);
          return true;
        }
      } catch (error) {
        console.error("Error parsing event data from URL:", error);
      }

      // 3. Check localStorage (for page refreshes)
      const storedEvent = localStorage.getItem('currentEvent');
      if (storedEvent) {
        try {
          const parsedEvent = JSON.parse(storedEvent);
          setEvent(parsedEvent);
          setLoading(false);
          return true;
        } catch (error) {
          console.error("Error parsing stored event data:", error);
        }
      }

      setLoading(false);
      return false;
    };

    parseEventData();
  }, [searchParams, location.state]);

  useEffect(() => {
    if (!event) return;

    const items = document.querySelectorAll(".animate-item");
    const animationTimeout = setTimeout(() => {
      let delay = 0;
      items.forEach((item, index) => {
        setTimeout(() => {
          setAnimatedItems((prev) => [...prev, index]);
        }, delay);
        delay += 150;
      });
      setIsDescriptionVisible(true);
    }, 300);

    return () => clearTimeout(animationTimeout);
  }, [activeTab, event]);

  const handlePoster = () => {
    if (event && event.poster) {
      window.open(event.poster, "_blank");
    }
  };

  const handleRegister = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdKku886Omny2C4owkq1xBub4ss1fD-CHH8mQYCPwUNjwNT3A/viewform?usp=dialog",
      "_blank"
    );
  };

  if (loading) {
    return <div className="loading-screen">Loading event details...</div>;
  }

  if (!event) {
    return (
      <div className="error-screen">
        Event data not available. Please go back and select an event.
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="project-contest-page">
        <div className="hero-section">
          <h1 className="title">{event.title}</h1>
          <p className="subtitle">{event.subtitle}</p>
        </div>

        <div className="content-container">
          <div className="tabs">
            <button
              className={`tab-button ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`tab-button ${activeTab === "rules" ? "active" : ""}`}
              onClick={() => setActiveTab("rules")}
            >
              Rules & Regulations
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div className="description-section">
                <div className="description-content">
                  <p
                    className={`animate-item description-text ${
                      isDescriptionVisible ? "show" : ""
                    }`}
                  >
                    {event.description}
                  </p>
                </div>

                <div className="important-details">
                  <h2 className="section-title">Event Details</h2>
                  <ul className="details-list">
                    {[
                      { label: "Event Date:", value: "4th March 2025" },
                      { label: "Time:", value: "10:00 AM – 1:00 PM" },
                      { label: "Venue:", value: event.venue },
                      { label: "Team Size:", value: event.teamSize },
                    ].map((detail, index) => (
                      <li
                        key={index}
                        className={`animate-item ${
                          animatedItems.includes(index) ? "show" : ""
                        }`}
                      >
                        <span className="detail-icon">📌</span>
                        <span className="detail-label">
                          {detail.label}
                        </span>{" "}
                        {detail.value}
                      </li>
                    ))}
                  </ul>
                  <h2 className="section-title">Event Coordinators</h2>
                  <p>{event.firstcontact}</p>
                  <p>{event.secondcontact}</p>
                </div>
              </div>
            )}

            {activeTab === "rules" && (
              <div className="rules-section">
                <h2 className="section-title">Rules & Regulations</h2>
                <ul className="rules-list">
                  {event.rules?.length > 0 ? (
                    event.rules.map((rule, index) => (
                      <li
                        key={index}
                        className={`animate-item ${
                          animatedItems.includes(index) ? "show" : ""
                        }`}
                      >
                        <span className="rule-icon">✓</span>
                        <div className="rule-content">{rule}</div>
                      </li>
                    ))
                  ) : (
                    <p>No rules available for this event.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="action-buttons">
          <button
            className="action-button poster-button"
            onClick={handlePoster}
          >
            Poster
          </button>
          <button className="register-button" onClick={handleRegister}>
            Register Now
          </button>
        </div>
      </div>
      <RulesFooter />
    </>
  );
};

export default RulesPage;