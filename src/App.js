import React, { useState } from 'react';
import TreatCounter from './components/TreatCounter';
import BreedPicker from './components/BreedPicker';
import DogFact from './components/DogFact';

const breedData = {
  big: ['Labrador', 'German_Shepherd', 'Golden_Retriever'],
  small: ['Pomeranian', 'Chihuahua', 'Yorkie']
};

function App() {
  const [treats, setTreats] = useState(0);
  const [breedPickerUnlocked, setBreedPickerUnlocked] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');

  const incrementTreats = () => {
    const newCount = treats + 1;
    setTreats(newCount);

    // unlock the breed picker after 3 treats
    if (newCount >= 3 && !breedPickerUnlocked) {
      setBreedPickerUnlocked(true);
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <TreatCounter treats={treats} incrementTreats={incrementTreats} />

      {breedPickerUnlocked && (
        <BreedPicker
          setSelectedBreed={setSelectedBreed}
          breedData={breedData}  // pass breedData 
          selectedBreed={selectedBreed}
        />
      )}

      {/* DogFact only shows if a breed is selected */}
      {selectedBreed && <DogFact />}
    </div>
  );
}

export default App;
