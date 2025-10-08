import React from 'react';
import './Home.css';
import travelImage from '../assets/destinations/travel.gif';

const Home = () => {
  return (
    <div className="page-container">
      <img src={travelImage} alt="Beautiful Travel Destination" className="home-image" />
      <h1 className="welcome-text">Welcome to <span className="brand-name">Travelon</span></h1>
      <p className="welcome-description">Embark on unforgettable journeys with Travelon. Discover breathtaking destinations, exclusive travel deals, and personalized experiences curated just for you. Your adventure starts here!</p>
    </div>
  );
};

export default Home;
