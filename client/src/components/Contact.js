import React from "react";
import "./Contact.css";
import Footer from "./Footer";
import dotenv from "dotenv";

function Contact() {
  dotenv.config();
  return (
    <div className="contact-container">
      <div className="contact-header-container">
        <h2>We'd love to hear from you !</h2>
      </div>

      <div className="contact-disclaimer-container">
        <p>
          Have a question? Send us an email or connect with us via social media.
        </p>
      </div>

      <div className="contact-content-container">
        <div className="contact-info-container">
          <div className="contact-info-item">
            <i className="fas fa-map-marker-alt"></i>

            <div className="contact-info-address">
              <p>700 Royal Avenue</p>
              <p>New Westminster, V3M 5Z5</p>
            </div>
          </div>

          <div className="contact-info-item">
            <i className="fas fa-phone"></i>

            <p>(604)-724-0792</p>
          </div>

          <div className="contact-info-item">
            <i className="fas fa-envelope"></i>

            <p>vhdttdhv@gmail.com</p>
          </div>
        </div>
        <div className="contact-map-container">
          <iframe
            title="map"
            loading="lazy"
            allowFullScreen
            src={process.env.REACT_APP_MAP_SRC}
          ></iframe>
        </div>
        <div className="contact-social-container">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
