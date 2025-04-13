import React from 'react';

function TreatCounter({ treats, incrementTreats }) {
  return (
    <div>
      <h1>Treat Counter: {treats}</h1>
      <button onClick={incrementTreats} style={{ fontSize: '2em' }}>🐶</button>
    </div>
  );
}

export default TreatCounter;