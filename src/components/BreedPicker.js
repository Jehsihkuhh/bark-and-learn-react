import React, { useState } from 'react';


/**
 * This component allows the user to select a category of dog breeds sizes, big or little, and then pick a specific breed
 * from that category. It displays specific breed information once a breed is selected.
 *
 * @component
 * @param {Object} props is for the component props
 * @param {Function} props.setSelectedBreed is a function used to set the currently selected breed
 * @param {string} props.selectedBreed is the currently selected breed
 * @param {Object} props.breedData is an object that contains breed information categorized by type and each category should
 * contain an array of breed objects with properties such as `name`, `size`, and `temperament` created in App.js.
 * @returns {JSX.Element} is the rendered component
 */

function BreedPicker({ setSelectedBreed, selectedBreed, breedData }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBreedData, setSelectedBreedData] = useState(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedBreed(''); 
    setSelectedBreedData(null);
  };

  const handleBreedSelect = (breedName) => {
    setSelectedBreed(breedName); 
    const breedInfo = breedData[selectedCategory]?.find(
      (breed) => breed.name === breedName
    );
    setSelectedBreedData(breedInfo); 
  };


  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Breed Category</option>
        <option value="big">Big Breed</option>
        <option value="small">Little Breed</option>
      </select>
  
      {selectedCategory && (
        <div>
          {breedData[selectedCategory]?.map((breed) => (
            <button key={breed.name} onClick={() => handleBreedSelect(breed.name)}>
              {breed.name}
            </button>
          ))}
        </div>
      )}

      {selectedBreed && selectedBreedData && (
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>{selectedBreed}</h2>
        <img
          src={`${process.env.PUBLIC_URL}/images/${selectedBreed.toLowerCase().replace(/\s+/g, '')}.jpeg`}
          alt={selectedBreed}
          style={{ width: '300px' }}
        />
        <div style={{ marginTop: '10px', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
          <p><strong>Size:</strong> {selectedBreedData.size}</p>
          <p><strong>Temperament:</strong> {selectedBreedData.temperament}</p>
        </div>
      </div>
    )}
  </div>
);
}

export default BreedPicker;
