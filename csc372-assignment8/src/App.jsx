// src/App.jsx
import { useState } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

export default function App() {
  const [playerThrow, setPlayerThrow] = useState(null);
  const [computerThrow, setComputerThrow] = useState(null);
  const [result, setResult] = useState(""); // "Player", "Computer", "Tie", or ""
  const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(false);

  const determineWinner = (player, computer) => {
    if (!player || !computer) return "";
    if (player === computer) return "Tie";

    const winMap = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    return winMap[player] === computer ? "Player" : "Computer";
  };

  const handlePlayerSelect = (choice) => {
    if (isRunning) return;
    setPlayerThrow(choice);
    setComputerThrow(null);
    setResult("");
    setError(false);
  };

  const handleShoot = () => {
    if (!playerThrow) {
      setError(true);
      return;
    }
    if (isRunning) return;

    setIsRunning(true);
    setResult("");
    setComputerThrow(null);
  };

  const handleRoundComplete = (finalComputerThrow) => {
    const winner = determineWinner(playerThrow, finalComputerThrow);
    setComputerThrow(finalComputerThrow);
    setResult(winner);
    setIsRunning(false);

    setScore((prev) => ({
      wins: prev.wins + (winner === "Player" ? 1 : 0),
      losses: prev.losses + (winner === "Computer" ? 1 : 0),
      ties: prev.ties + (winner === "Tie" ? 1 : 0),
    }));
  };

  const resetGame = () => {
    setPlayerThrow(null);
    setComputerThrow(null);
    setResult("");
    setScore({ wins: 0, losses: 0, ties: 0 });
    setIsRunning(false);
    setError(false);
  };

  // background colors like your old script
  let userBg = "";
  let compBg = "";

  if (error) {
    userBg = "red";
  } else if (result === "Player") {
    userBg = "green";
    compBg = "red";
  } else if (result === "Computer") {
    userBg = "red";
    compBg = "green";
  } else if (result === "Tie") {
    userBg = "blue";
    compBg = "blue";
  }

  const currentScore = score.wins - score.losses;

  return (
    <>
      <nav>
        <div className="title">Rock, Paper, Scissors!</div>
      </nav>

      <div className="pageItems">
        {/* SCORE BAR */}
        <div className="scoreBar">
          <div className="winLossFrame">
            <ScoreBoard score={score} />
          </div>

          <div className="scoreFrame">
            <div className="score">
              Current score: <span id="score">{currentScore}</span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="mainContent">
          {/* PLAYER + COMPUTER side-by-side */}
          <div className="resultsRow">
            <div className="usersChoice">
              <h3>Your Choice</h3>
              <img
                className="selectionImage"
                id="userSelection"
                src={
                  playerThrow
                    ? `/images/${playerThrow}.png`
                    : "/images/question-mark.png"
                }
                alt="User Selection"
                style={{ backgroundColor: userBg }}
              />
            </div>

            <div className="computersChoice">
              <ComputerThrow
                isRunning={isRunning}
                onRoundComplete={handleRoundComplete}
                computerThrow={computerThrow}
                backgroundColor={compBg}
              />
            </div>
          </div>

          {/* WINNER centered underneath */}
          <div className="winnerTable">
            <ResultDisplay result={result} />
          </div>

          <hr />

          {/* SHOOT BUTTON + CHOICES */}
          <button className="startButton" onClick={handleShoot}>
            Shoot!
          </button>

          <div className="gameChoiceMenu">
            <PlayerThrow selected={playerThrow} onSelect={handlePlayerSelect} />
          </div>

          {/* RESET BUTTON BELOW */}
          <ResetButton onReset={resetGame} />
        </div>
      </div>
    </>
  );
}
