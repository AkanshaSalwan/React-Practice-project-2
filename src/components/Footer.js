// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe">
        <button className="subscribe-button">Subscribe to the Blog</button>
      </div>
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://facebook.com" className="social-icon">F</a>
          <a href="https://instagram.com" className="social-icon">I</a>
          <a href="https://linkedin.com" className="social-icon">L</a>
          <a href="https://whatsapp.com" className="social-icon">W</a>
        </div>
        <div className="footer-info">
          <div className="footer-logo">
            <h2>Media Clock</h2>
            <p>Thinking + designing are equal to an amazing application.</p>
          </div>
          <ul className="footer-links">
            <li><a href="#">Term & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-address">
          <div className="address">
            <p>392 A St Kilda Road St Kilda VIC 3182</p>
            <p>T0/3 Reid Avenue Westmead NSW 2145</p>
            <p>8 Archer St, Upper Mount Gravatt, Queensland 4133</p>
          </div>
          <div className="contact">
            <p>Email Address: <a href="mailto:info@mediaclock.com.au">info@mediaclock.com.au</a></p>
            <p>Contact Number: <a href="tel:info@mediaclock.com.au">info@mediaclock.com.au</a></p>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Lets Get In Touch</h3>
          <p>We're open for any suggestions or just to have a chat</p>
          <form className="contact-form">
            <label>First Name</label> <br></br>
            <input type="text" placeholder="Enter Your First Name" />
            <label>Phone Number</label> <br></br>
            <input type="text" placeholder="Enter Your Phone Number" />
          </form>
          <form className="contact-form">
            <textarea placeholder="Enter Your Message Here"></textarea>
            <input type="email" placeholder="Enter Your Email Address" />
          </form>
          <form className="contact-form">
            <button type="submit">Submit</button>
          </form>
          
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023. Media Clock. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
