// src/components/ScoreBoard.jsx
export default function ScoreBoard({ score }) {
  return (
    <>
      <div className="winLossItem">
        Wins: <span id="wins">{score.wins}</span>
      </div>
      <div className="winLossItem">
        Losses: <span id="losses">{score.losses}</span>
      </div>
    </>
  );
}
