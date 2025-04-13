import React, { useState } from 'react';
import TreatCounter from './components/TreatCounter';
import BreedPicker from './components/BreedPicker';
import DogFact from './components/DogFact';

function App() {
  const [treats, setTreats] = useState(0);
  const [breedPickerUnlocked, setBreedPickerUnlocked] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');

  const incrementTreats = () => {
    const newCount = treats + 1;
    setTreats(newCount);

    // Unlock the breed picker after 3 treats
    if (newCount >= 3 && !breedPickerUnlocked) {
      setBreedPickerUnlocked(true);
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <TreatCounter treats={treats} incrementTreats={incrementTreats} />

      {breedPickerUnlocked && (
        <BreedPicker setSelectedBreed={setSelectedBreed} />
      )}

      {/* ✅ DogFact only shows if a breed was selected */}
      {selectedBreed && <DogFact />}
    </div>
  );
}

export default App;
