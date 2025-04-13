import React from 'react';

function TreatCounter({ treats, incrementTreats }) {
  return (
    <div>
      <h1>Feed Me 3 Treats to See My Friends!: {treats}</h1>
      <button onClick={incrementTreats} style={{ fontSize: '2em' }}>🐶</button>
    </div>
  );
}

export default TreatCounter;