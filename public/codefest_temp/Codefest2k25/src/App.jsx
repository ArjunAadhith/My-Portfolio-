import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Mcode from "./components/Mcode.jsx"; // Home page
import About from "./components/About.jsx";
import Contact from "./components/Footer.jsx";
import RulesPage from "./components/RulesPage.jsx";
import Background from './components/Background.jsx'
import './App.css'
import EventToggle from "./components/EventToggle.jsx";
import CustomMouse from "./components/CustomMouse.jsx";

function App() {
  return (
    <>
    <CustomMouse/>
    <Background/>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Mcode />} />
        <Route path="/events" element={<EventToggle />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="*" element={<Mcode />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
