import React, { useState } from "react";
import GuessControl from "./GuessControl";
import GameOver from "./GameOver";
import GuessMessage from "./GuessMessage";

const MAX_ATTEMPTS = 10;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const NumberGuessingGame = () => {
  // State variables
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber());
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  // Function to handle a guess
  const handleGuess = (guess) => {
    setLatestGuess(Number(guess)); 
    setNumberOfGuesses((prevGuesses) => prevGuesses + 1); 
  };

  // Function to reset the game
  const handleReset = () => {
    setNumberToGuess(getRandomNumber());
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  const isCorrectGuess = latestGuess === numberToGuess;
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?</h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver ? (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      ) : (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
};

export default NumberGuessingGame;
