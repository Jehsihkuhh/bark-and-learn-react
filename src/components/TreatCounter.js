import React from 'react';


/**
 * This is a component that shows the number of treats given when a large dog emoji button is clicked with an incremented count system.
 *
 * @param {Object} props - component props
 * @param {number} props.treats - the current number of treats given
 * @param {Function} props.incrementTreats - callback function to increment the treat count
 * @returns {JSX.Element} the rendered TreatCounter component
 */

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