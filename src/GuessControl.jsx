import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState(''); 

  // Function to handle input changes and update currentGuess state
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);  
  };

  // Function to handle the submission of a guess
  const onSubmitGuess = () => {
    if (onGuess && currentGuess.trim() !== '') {
      onGuess(Number(currentGuess)); 
      setCurrentGuess(''); 
    }
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
