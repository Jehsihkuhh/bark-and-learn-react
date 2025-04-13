import React from 'react';

function TreatCounter({ treats, incrementTreats }) {
  return (
    <div>
      <h1>Tap the Pup 3 Times to Continue 🐾</h1>
      <p style={{ fontSize: '1.5em' }}>Treats Given: {treats}</p>
      <button onClick={incrementTreats} style={{ fontSize: '10em' }}>🐶</button>
    </div>
  );
}

export default TreatCounter;