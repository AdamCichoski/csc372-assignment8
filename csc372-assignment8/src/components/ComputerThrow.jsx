// src/components/ComputerThrow.jsx
import { useEffect, useState } from "react";

const options = ["rock", "paper", "scissors"];

export default function ComputerThrow({
  isRunning,
  onRoundComplete,
  computerThrow,
  backgroundColor,
}) {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!isRunning) {
      setCurrent(computerThrow || null);
      return;
    }

    let index = 0;
    setCurrent(options[0]);

    const interval = setInterval(() => {
      setCurrent(options[index % options.length]);
      index++;
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      const finalChoice = options[Math.floor(Math.random() * 3)];
      setCurrent(finalChoice);
      onRoundComplete(finalChoice);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRunning, onRoundComplete, computerThrow]);

  const src = current ? `/images/${current}.png` : "/images/question-mark.png";

  return (
    <div>
      <h3>Computer&apos;s Choice</h3>
      <img
        className="selectionImage"
        id="computerSelection"
        src={src}
        alt="Computer Selection"
        style={{ backgroundColor }}
      />
    </div>
  );
}
