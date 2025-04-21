import React, { useState } from 'react';

const facts = [
  "Dogs curl up in a ball when sleeping to protect their organs.",
  "A dog's sense of smell is at least 40 times better than ours.",
  "A dog’s nose print is unique, much like a person’s fingerprint",
  "Dog's noses can sense heat and thermal radiation, which explains why blind or deaf dogs can still hunt.",
  "Dogs have about 1,700 taste buds.",
  "Dogs sweat through their paws.",
  "Dogs can smell cancer cells."
];


/**
 * This is the component that displays a button for generating random dog facts. 
 * When the button is clicked, a random fact about dogs is displayed.
 *
 * @component
 * @returns {JSX.Element} is the rendered component which is a button that user's click to trigger
 * the dog fact in a paragraph format.
 */

function DogFact() {
  const [fact, setFact] = useState('');

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={generateRandomFact}>Get a Random Dog Fact!</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default DogFact;