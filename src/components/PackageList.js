import React from 'react';
import TravelPackage from './TravelPackage';

const PackageList = ({ packages }) => {
  return (
    <div className="package-list">
      {packages.map((pkg) => (
        <TravelPackage key={pkg.id} pkg={pkg} />
      ))}
    </div>
  );
};

export default PackageList;