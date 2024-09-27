import React from "react";
import '../Styles/About.css'; // Ensure to add styling for the new layout
import aboutImage from '../assets/about.jpg'; // Import an image

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-content">
        {/* Left side - Image */}
        <div className="about-image-container">
          <img src={aboutImage} alt="About Little Lemon" className="about-image" />
        </div>

        {/* Right side - Text */}
        <div className="about-text-container">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            Welcome to <strong>Little Lemon</strong>, where culinary passion meets warm hospitality. 
            Nestled in the heart of <strong>Chicago</strong>, our restaurant is dedicated to offering an 
            unforgettable dining experience that blends the vibrant flavors of traditional Mediterranean cuisine 
            with a modern twist.
          </p>
          <p className="about-text">
            Our talented chefs use only the finest, freshest ingredients to bring authentic, bold flavors to your plate. 
            Whether you're indulging in one of our signature dishes or exploring our seasonal specials, every bite at 
            Little Lemon reflects our commitment to quality and creativity.
          </p>
          <p className="about-text">
            From casual lunches to special celebrations, our warm and inviting atmosphere is the perfect setting for any occasion. 
            We look forward to welcoming you and creating a dining experience you'll never forget.
          </p>
        </div>
      </div>
    </section>
  );
}
