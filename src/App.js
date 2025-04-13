import React, { useState } from 'react';
import TreatCounter from './components/TreatCounter';
import BreedPicker from './components/BreedPicker';
import DogFact from './components/DogFact';

function App() {
  const [treats, setTreats] = useState(0);
  const [breedPickerUnlocked, setBreedPickerUnlocked] = useState(false);

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
      {/* Treat Counter */}
      <TreatCounter treats={treats} incrementTreats={incrementTreats} />

      {/* Breed Picker appears only after 3 treats */}
      {breedPickerUnlocked && <BreedPicker />}

      {/* Dog Fact Button - Always available */}
      <DogFact />
    </div>
  );
}

export default App;
