import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <img src={viteLogo} alt="Vite Logo" className="logo" />
        <img src={reactLogo} alt="React Logo" className="logo react" />
        <h2 className="brand ">NeovaTech</h2>
      </nav>

      <header className="hero-section">
        <h1>Welcome to NeovaTech</h1>
        <p>Your reliable partner in full-stack & cloud solutions.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Our Services</button>
        </div>
      </header>

      <footer className="footer">
        <p>Crafted with ❤️ by Team NeovaTech</p>
      </footer>
    </div>
  );
}

export default App;
