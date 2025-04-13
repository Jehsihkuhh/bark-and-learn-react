import React from 'react';

function TreatCounter({ treats, incrementTreats }) {
  return (
    <div>
      <h1>Feed Me 3 Treats to See My Friends!</h1>
      <p style={{ fontSize: '1.5em' }}>Treats Given: {treats}</p>
      <button onClick={incrementTreats} style={{ fontSize: '10em' }}>🐶</button>
    </div>
  );
}

export default TreatCounter;