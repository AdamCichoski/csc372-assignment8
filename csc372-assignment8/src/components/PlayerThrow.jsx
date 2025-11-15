// src/components/PlayerThrow.jsx
const options = ["rock", "paper", "scissors"];

export default function PlayerThrow({ selected, onSelect }) {
  return (
    <>
      {options.map((opt) => (
        <img
          key={opt}
          className={`option${selected === opt ? " isSelected" : ""}`}
          id={opt}
          src={`/images/${opt}.png`}
          alt={opt}
          onClick={() => onSelect(opt)}
        />
      ))}
    </>
  );
}
