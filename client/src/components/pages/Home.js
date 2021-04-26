import React from "react";
import About from "../About";
import Contact from "../Contact";
import FAQ from "../FAQ";
import Hero from "../Hero";
import NavBar from "../NavBar";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}

export default Home;
