import React from "react";
import type { GameHistoryItemType } from "./Game.types";

type GameHistoryProps = {
  atttempts: GameHistoryItemType[];
};

const GameHistory: React.FC<GameHistoryProps> = ({ atttempts }) => {
  return (
    <>
      Attempts History <br />
      {atttempts.map((attempt, index) => (
        <>
          Attempt # {index + 1} : Your Guess {attempt.currentGuess} :{" "}
          {attempt.message} <br />
        </>
      ))}
      {atttempts.length === 0 && <>No Data found</>}
    </>
  );
};

export { GameHistory };
