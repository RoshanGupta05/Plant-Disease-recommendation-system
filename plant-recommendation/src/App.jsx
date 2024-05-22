// FruitLeavesRecommendation.js
import React, { useState } from 'react';
import Header from '../Components/Header';
import FileUploader from '../Components/FileUploader';
import RecommendationButton from '../Components/RecommendationButton';
import RecommendationDisplay from '../Components/RecommendationDisplay';

const FruitLeavesRecommendation = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [recommendation, setRecommendation] = useState('');

  const handleImageUpload = (imageFile) => {
    setSelectedImage(imageFile);
  };

  const handleRecommendation = () => {
    setRecommendation('Apple'); 
  };

  return (
    <>
    <div className="container mx-auto">
      <Header />
      <FileUploader onImageUpload={handleImageUpload} />
      <RecommendationButton onClick={handleRecommendation} />
      {recommendation && (
        <RecommendationDisplay recommendation={recommendation} />
      )}
    </div>
    </>
  );
};



export default App
