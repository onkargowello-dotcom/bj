import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-content">
          <h2 className="logo">Brandingkar</h2>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <h1>Build Brands That Stand Out</h1>
          <p>
            Brandingkar helps startups and businesses grow with branding,
            design, and digital solutions.
          </p>
          <a href="#contact" className="btn-primary">
            Get a Free Consultation
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="grid">
            <div className="card">
              <h3>Brand Identity</h3>
              <p>Logo design, brand guidelines, and visual identity.</p>
            </div>
            <div className="card">
              <h3>Web Development</h3>
              <p>High-performance, responsive websites and apps.</p>
            </div>
            <div className="card">
              <h3>UI / UX Design</h3>
              <p>Clean, user-focused designs that convert.</p>
            </div>
            <div className="card">
              <h3>Digital Marketing</h3>
              <p>SEO, social media, and growth strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section alt">
        <div className="container about">
          <h2 className="section-title left">Why Brandingkar?</h2>
          <p>
            We are a creative digital agency focused on building strong,
            memorable brands.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section dark">
        <div className="container contact">
          <h2 className="section-title">Contact Us</h2>

          {/* Backend connected via FormSubmit */}
          <form
            className="contact-form"
            action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea name="message" placeholder="Your Message" required />

            {/* Optional hidden fields */}
            <input
              type="hidden"
              name="_subject"
              value="New Brandingkar Lead!"
            />
            <input type="hidden" name="_captcha" value="false" />

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Brandingkar. All rights reserved.
      </footer>
    </>
  );
}

export default App;
