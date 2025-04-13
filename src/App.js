import React, { useState } from 'react';
import TreatCounter from '../components/TreatCounter';
import BreedPicker from '../components/BreedPicker';
import DogFact from '../components/DogFact';

function App() {
  const [treats, setTreats] = useState(0);
  const [breedPickerUnlocked, setBreedPickerUnlocked] = useState(false);

  // Increment the treat count and unlock the breed picker once a treat is given
  const incrementTreats = () => {
    const newCount = treats + 1;
    setTreats(newCount);
    if (newCount >= 1) {
      setBreedPickerUnlocked(true); // Unlock the breed picker after 1 treat
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      {/* Treat Counter */}
      <TreatCounter treats={treats} incrementTreats={incrementTreats} />

      {/* Breed Picker */}
      {breedPickerUnlocked && <BreedPicker />}

      {/* Dog Fact Button */}
      <DogFact />
    </div>
  );
}

export default App;
