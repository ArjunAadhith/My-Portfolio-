import React from "react";
import EventCard from "./EventCard";
import eventinfo from "../assets/eventinfo";
import "../styles/NonTechnicalEvents.css";

function NonTechnicalEvents() {
  const nonTechnicalEvents = eventinfo.filter(event => event.type === "Non-Technical");

  return (
    <div className="events-container">
      <div className="events-grid">
        {nonTechnicalEvents.map(event => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
}

export default NonTechnicalEvents;
