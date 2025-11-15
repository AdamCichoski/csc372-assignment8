// src/components/ResultDisplay.jsx
export default function ResultDisplay({ result }) {
  return (
    <div>
      <h3>Winner:</h3>
      <p id="winner">
        {result === "Player"
          ? "You win!"
          : result === "Computer"
          ? "Computer wins!"
          : result === "Tie"
          ? "Tie!"
          : ""}
      </p>
    </div>
  );
}
