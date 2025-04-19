import React, { useState } from 'react';

function BreedPicker({ setSelectedBreed, selectedBreed, breedData }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedBreed(''); // reset selected breed if they change category
  };

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed); // sends breed up to a parent component
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
            <button key={breed} onClick={() => handleBreedSelect(breed)}>
              {breed}
            </button>
          ))}
        </div>
      )}

      {selectedBreed && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>{selectedBreed}</h2>
          <img
            src={`/images/${selectedBreed.replace(/\s+/g, '%20')}.jpeg`}
            alt={selectedBreed}
            style={{ width: '300px' }}
          />
        </div>
      )}
    </div>
  );
}

export default BreedPicker;
