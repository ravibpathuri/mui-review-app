import React, { ChangeEvent } from "react";
import { GameHistory } from "./GameHistory";
import { Button, Input, Stack } from "@mui/material";
import { GameHistoryItemType } from "./Game.types";

const Game = () => {
  const [target, setTarget] = React.useState<number>();
  const [aim, setAim] = React.useState<number>();
  const [atttempts, setAttempts] = React.useState<GameHistoryItemType[]>([]);

  const handleNewGame = () => {
    const newTarget = Math.floor(Math.random() * 100) + 1;
    setTarget(newTarget);
    setAim(undefined);
    setAttempts([]);
  };

  const handleAimChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAim(parseInt(e.target.value));
  };

  const handleAim = () => {
    if (!aim || !target) {
      return;
    }

    if (aim < target) {
      console.log("aim high");
      setAttempts([...atttempts, { currentGuess: aim, message: "Aim High" }]);
    } else if (aim > target) {
      console.log("Aim Low");
      setAttempts([...atttempts, { currentGuess: aim, message: "Aim Low" }]);
    } else if (aim === target) {
      console.log("you got it");
      setAttempts([
        ...atttempts,
        { currentGuess: aim, message: "You Got it!" },
      ]);
    }
  };

  return (
    <>
      {/* <div>Target : {target}</div> */}
      <Stack>
        <Button className="test" onClick={handleNewGame}>
          New Game
        </Button>

        <Stack gap={5}>
          <Input type="number" onChange={handleAimChange} />

          <Button variant="outlined" onClick={handleAim}>
            Aim
          </Button>
        </Stack>
        <GameHistory atttempts={atttempts} />
      </Stack>
    </>
  );
};

export default Game;
