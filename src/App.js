import React, { useState } from 'react';
import './App.css';
import TreatCounter from './components/TreatCounter';
import BreedPicker from './components/BreedPicker';
import DogFact from './components/DogFact';

const breedData = {
  big: [
    { name: 'Labrador', size: 'Large', temperament: 'Friendly, Active' },
    { name: 'German Shepherd', size: 'Large', temperament: 'Intelligent, Brave' },
    { name: 'Golden Retriever', size: 'Large', temperament: 'Friendly, Reliable' }
  ],
  small: [
    { name: 'Pomeranian', size: 'Small', temperament: 'Playful, Bold' },
    { name: 'Chihuahua', size: 'Small', temperament: 'Loyal, Alert' },
    { name: 'Yorkie', size: 'Small', temperament: 'Affectionate, Spirited' }
  ]
};

function App() {
  const [treats, setTreats] = useState(0);
  const [breedPickerUnlocked, setBreedPickerUnlocked] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState('');

  const incrementTreats = () => {
    const newCount = treats + 1;
    setTreats(newCount);

   
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
          breedData={breedData}  
          selectedBreed={selectedBreed}
        />
      )}

      
      {selectedBreed && <DogFact />}
    </div>
  );
}

export default App;
