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

/**
 * This is the main/root of the application. It manages the states for the treat count, whether the breed picker should be 
 * unlocked after 3 treats and the current selected dog.
 *
 * The components used are:
 * - TreatCounter: Increments the treat count
 * - BreedPicker: Allows breed selection once unlocked after 3 treats
 * - DogFact: Shows a random dog fact only after breed is selected/unlocked
 *
 * @component
 * @returns {JSX.Element} is for the rendered app with interactive dog features
 */
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
