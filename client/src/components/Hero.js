import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import CalendarHero from "./CalendarHero";
function Hero() {
  return (
    <div className="hero-container">
      <img src="/images/hero.jpg" alt="Hero" className="hero-img" />

      <div className="hero-calendar-container">
        <CalendarHero />
      </div>

      <div className="hero-content-container">
        <h1>Get the help you need.</h1>
        <p>Meet your counsellor today.</p>
        <Link to="/authpage" className="hero-button-container">
          <Button color="primary" variant="contained" size="large">
            Book Appointment <i className="fas fa-sign-in-alt"></i>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
