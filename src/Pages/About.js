import React from "react";
import '../Styles/About.css'; // Ensure to add styling for the new layout
import aboutImage from '../assets/about.jpg'; // Import an image

export default function About() {
  return (


<section id="hero" className="about-bg">
<div className="container" id="hero-content">
    <article>
        <h1 className="display-title">Little Lemon</h1>
        <span className="sub-title">Chicago</span>
        <p className="about-text">
            Welcome to <strong>Little Lemon</strong>, where culinary passion meets warm hospitality. 
            Nestled in the heart of <strong>Chicago</strong>, our restaurant is dedicated to offering an 
            unforgettable dining experience that blends the vibrant flavors of traditional Mediterranean cuisine 
            with a modern twist.
          </p>
         
    </article>
    <img src={aboutImage} alt="little lemon" />
</div>
</section>
  );
}
