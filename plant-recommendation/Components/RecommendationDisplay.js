// RecommendationDisplay.js
import React from 'react';

const RecommendationDisplay = ({ recommendation }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold">Recommended Fruit:</h2>
      <p>{recommendation}</p>
    </div>
  );
};

export default RecommendationDisplay;
