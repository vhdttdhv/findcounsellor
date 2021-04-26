import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src="/images/about1.jpg" alt="About" className="about-img" />
      </div>
      <div className="about-content-container">
        <h2> Our Mission </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nisi
          ex amet fuga distinctio provident vel fugit! Asperiores corrupti
          animi, atque ut quibusdam mollitia architecto, repudiandae veritatis
          molestiae non vero?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe esse
          odio, cumque error ab nemo corporis perferendis nostrum nulla
          consequatur commodi fuga soluta? Rem maxime magni aspernatur
          dignissimos, reiciendis reprehenderit!
        </p>
      </div>
    </div>
  );
}

export default About;
