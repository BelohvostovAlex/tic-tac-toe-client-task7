import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { makeStyles } from "./styles";
import { InfoBanner } from "../InfoBanner/InfoBanner";
import { Board } from "../Board/Board";
import { MyButton } from "../Button/MyButton";
import MyBackDrop from "../MyBackDrop/MyBackDrop";

export const initalResultState = {
  winner: "",
  state: "",
};

export const Game = ({ channel, setChannel, handleLogout, btnExtraStyles }) => {
  const [isJoined, setIsJoined] = useState(channel.state.watcher_count === 2);
  const [result, setResult] = useState(initalResultState);
  const [openBackDrop, setOpenBackDrop] = useState(false);

  const winner = result.winner === "X" ? "BURGER" : "NO BURGERS";
  const style = makeStyles();

  const handleClose = () => {
    setOpenBackDrop(false);
  };
  const handleToggle = () => {
    setOpenBackDrop(!openBackDrop);
  };

  channel.on("user.watching.start", (e) => {
    setIsJoined(e.watcher_count === 2);
  });

  channel.on("user.watching.stop", (e) => {
    setIsJoined(e.watcher_count === 2);
  });

  const handleLeave = async () => {
    await channel.stopWatching();
    setChannel(null);
  };

  useEffect(() => {
    setOpenBackDrop(true);
  }, [result.state]);

  if (!isJoined) {
    return (
      <>
        <MyButton
          btnText="Logout"
          onClick={handleLogout}
          styles={btnExtraStyles}
        />
        <MyButton
          btnText="Leave"
          onClick={handleLeave}
          styles={style.gameBtnLeave}
        />
        <InfoBanner title="Waiting for a player.." />
      </>
    );
  }

  return (
    <Box sx={style.gameWrapper}>
      <Board result={result} setResult={setResult} isJoined={isJoined} />
      <MyButton btnText="Leave" onClick={handleLeave} styles={btnExtraStyles} />

      {result.state && (
        <MyBackDrop
          handleClose={handleClose}
          handleToggle={handleToggle}
          open={openBackDrop}
          setResult={setResult}
          text={
            result.state === "Draw"
              ? "It's a DRAW"
              : `Player: ${winner} won the game`
          }
        />
      )}
    </Box>
  );
};
