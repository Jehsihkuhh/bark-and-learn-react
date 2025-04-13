import React from "react";

const BreedDisplay = ({ selectedBreed, breedImageUrl }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">{selectedBreed}</h2>
      <img
        src={breedImageUrl}
        alt={selectedBreed}
        className="rounded-xl mx-auto max-h-64 object-contain"
      />
    </div>
  );
};

export default BreedDisplay;
