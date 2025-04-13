import React, { useState } from 'react';

const breedData = {
  big: ['Labrador', 'German Shepherd', 'Golden Retriever'],
  small: ['Pomeranian', 'Chihuahua', 'Dachshund']
};

function BreedPicker() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedBreed('');
  };

  const handleBreedSelect = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Breed Category</option>
        <option value="big">Big Breed</option>
        <option value="small">Little Breed</option>
      </select>

      {selectedCategory &&
        <div>
          {breedData[selectedCategory].map(breed => (
            <button key={breed} onClick={() => handleBreedSelect(breed)}>
              {breed}
            </button>
          ))}
        </div>
      }

      {selectedBreed &&
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>{selectedBreed}</h2>
          <img src={`images/${selectedBreed.toLowerCase()}.jpg`} alt={selectedBreed} style={{ width: '300px' }} />
        </div>
      }
    </div>
  );
}

export default BreedPicker;
