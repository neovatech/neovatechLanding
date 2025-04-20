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
        <h2 className="brand">NeovaTech</h2>
      </nav>

      <header className="hero-section">
        <h1>Welcome to NeovaTech</h1>
        <h2>heyhihihi</h2>
        <p>Your reliable partner in full-stack & cloud solutions.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Our Services</button>
        </div>
      </header>

      <section className="form-section">
        <h2 className="qq">Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="Company Name" />
          <select>
            <option value="">Select Service</option>
            <option value="web">Website Development</option>
            <option value="app">Mobile DEVELOPMENT App Development</option>
            <option value="cloud">Cloud Deployment</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Your Message..." rows="4"></textarea>
          <button type="submit" className="primary-btn">
            Submit
          </button>
        </form>
      </section>

      <footer className="footer">
        <p>Crafted with RIMON ❤️💙 Ishan by Team NeovaTech</p>
      </footer>
    </div>
  );
}

export default App;
