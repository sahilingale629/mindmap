import React from "react";

const PhaseDetails = ({ phase }) => {
  return (
    <div className="phase-details">
      <h3>{phase.name}</h3>
      <p>{phase.description}</p>
    </div>
  );
};

export default PhaseDetails;
