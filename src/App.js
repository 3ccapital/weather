import React, { useState } from 'react';

function App() {
  const [round, setRound] = useState(0);
  const [tablePot, setTablePot] = useState(0);
  const [balance, setBalance] = useState(0);
  const [minBet, setMinBet] = useState(1);
  const [firstThrow, setFirstThrow] = useState(0);
  const [secondThrow, setSecondThrow] = useState(0);
  const [betAmount, setBetAmount] = useState(0);

  // Function to handle deposit
  const handleDeposit = () => {
    setBalance(balance + minBet);
  };

  // Function to start a new round
  const startNewRound = () => {
    if (round === 0) {
      setRound(1);
      setTablePot(minBet);
      setFirstThrow(0);
      setSecondThrow(0);
      setBetAmount(0);
    }
  };

  // Function to handle player's turn
  const handlePlayerTurn = () => {
    if (round === 0) {
      alert("You need to start a new round first.");
    } else {
      // Simulate dice throws (1 to 6)
      const firstThrowResult = Math.floor(Math.random() * 6) + 1;
      const secondThrowResult = Math.floor(Math.random() * 6) + 1;
      setFirstThrow(firstThrowResult);
      setSecondThrow(secondThrowResult);

      // Check outcomes based on the dice throws
      if (firstThrowResult === 1) {
        alert("You rolled a 1. You lose 1x minimum bet.");
        setBalance(balance - minBet);
        setRound(0);
      } else if (firstThrowResult === 6) {
        alert("You rolled a 6. You win 1x minimum bet.");
        setBalance(balance + minBet);
        setRound(0);
      } else {
        // Player has the option to pass or bet
        alert(`First throw: ${firstThrowResult}\nSecond throw: ${secondThrowResult}`);
        if (secondThrowResult > firstThrowResult) {
          alert(`You won the bet of ${betAmount}`);
          setBalance(balance + betAmount);
          setRound(0);
        } else if (secondThrowResult <= firstThrowResult) {
          alert(`You lost the bet of ${betAmount}`);
          setBalance(balance - betAmount);
          setRound(0);
        }
      }
    }
  };

  return (
    <div className="app">
      <div className="search">
        <div>
          <h4>Guavita</h4>
        </div>
      </div>
      <div className="container">
        <div className="top">
          <div>
            <p>Balance: {balance}</p>
          </div>
          <div>
            <p>Minimum Bet: {minBet}</p>
          </div>
          <div>
            <p>Table Pot: {tablePot}</p>
          </div>
        </div>

        {/* Button to deposit */}
        <button onClick={handleDeposit}>Deposit</button>

        {/* Button to start a new round */}
        <button onClick={startNewRound}>Start New Round</button>

        {/* Button for player's turn */}
        <button onClick={handlePlayerTurn}>Player's Turn</button>

        {/* Display dice throws */}
        {round > 0 && (
          <div>
            <p>First Throw: {firstThrow}</p>
            <p>Second Throw: {secondThrow}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
