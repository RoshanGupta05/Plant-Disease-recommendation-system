// FileUploader.js
import React from 'react';

const FileUploader = ({ onImageUpload }) => {
  const handleFileChange = (event) => {
    const imageFile = event.target.files[0];
    onImageUpload(imageFile);
  };

  return (
    <div className="mb-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
