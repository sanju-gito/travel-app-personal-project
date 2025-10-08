import React from 'react';

const TravelPackage = ({ pkg }) => {
  return (
    <div className="package-card">
      <img 
        src={pkg.image} 
        alt={pkg.destination} 
        className="package-image"
      />
      <div className="package-content">
        <h2>{pkg.title}</h2>
        <h3>{pkg.destination}</h3>
        <p>{pkg.description}</p>
        <div className="package-details">
          <p>Price: ${pkg.price}</p>
          <p>Duration: {pkg.duration}</p>
        </div>
        <div className="amenities">
          <h4>Includes:</h4>
          <ul>
            {pkg.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

};

export default TravelPackage;