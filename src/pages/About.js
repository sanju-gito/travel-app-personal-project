import React from 'react';
import './About.css';
import travelImage from '../assets/destinations/travel.jpg'; // Updated relative path

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <img src={travelImage} alt="Scenic travel destination" className="about-image" />
      <p className="about-text">
        We are a travel agency specializing in unique experiences, helping you explore the world's most beautiful destinations.
      </p>
      <blockquote className="about-quote">
        “Travel is the only thing you buy that makes you richer.”
      </blockquote>
    </div>
  );
};

export default About;
