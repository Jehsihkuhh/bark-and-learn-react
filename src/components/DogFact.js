import React, { useState } from 'react';

const facts = [
  "Dogs have been our companions for about 14,000 years.",
  "A dog's sense of smell is at least 40 times better than ours.",
  "Dogs pant to cool themselves."
];

function DogFact() {
  const [fact, setFact] = useState('');

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={generateRandomFact}>Get a Dog Fact!</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default DogFact;