import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Jyotirmay Travels Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
