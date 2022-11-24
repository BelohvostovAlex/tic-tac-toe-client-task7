import React, { useEffect, useState } from "react";
import { useChannelStateContext, useChatContext } from "stream-chat-react";

import { Box } from "@mui/material";
import { Square } from "./Square/Square";

import { makeStyles } from "./styles";
import { handleValueBoard } from "../../helpers/handleValueBoard";
import { handleXOValue } from "../../helpers/handleXOValue";
import { winData } from "../../mock/winData";

const inialBoardState = new Array(9).fill("");

export const Board = ({ setResult }) => {
  const [board, setBoard] = useState(inialBoardState);
  const [player, setPlayer] = useState("X");
  const [nextTurn, setNextTurn] = useState("X");
  const { channel } = useChannelStateContext();
  const { client } = useChatContext();

  useEffect(() => {
    checkIsDraw();
    checkWin();
    // eslint-disable-next-line
  }, [board]);

  const chooseSquare = async (square) => {
    if (nextTurn === player && board[square] === "") {
      setNextTurn(handleXOValue(player));

      await channel.sendEvent({
        type: "move",
        data: { square, player },
      });

      setBoard(handleValueBoard(board, square, "", player));
    }
  };

  const checkWin = () => {
    winData.forEach((item) => {
      const firstPlayer = board[item[0]];
      if (firstPlayer === "") return;
      let foundWin = true;
      item.forEach((value) => {
        if (board[value] !== firstPlayer) {
          foundWin = false;
        }
      });

      if (foundWin) {
        setResult({ winner: board[item[0]], state: "Won" });
        setBoard(inialBoardState);
      }
    });
  };

  const checkIsDraw = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "none", state: "Draw" });
      setBoard(inialBoardState);
    }
  };

  channel.on((e) => {
    if (e.type === "move" && e.user.id !== client.userID) {
      const currPlayer = handleXOValue(e.data.player);

      setPlayer(currPlayer);
      setNextTurn(currPlayer);

      setBoard(handleValueBoard(board, e.data.square, "", e.data.player));
    }
  });

  const style = makeStyles();

  return (
    <>
      <Box sx={style.boardWrapper}>
        <Box sx={style.boardRow}>
          <Square value={board[0]} onChoose={() => chooseSquare(0)} />
          <Square value={board[1]} onChoose={() => chooseSquare(1)} />
          <Square value={board[2]} onChoose={() => chooseSquare(2)} />
        </Box>
        <Box sx={style.boardRow}>
          <Square value={board[3]} onChoose={() => chooseSquare(3)} />
          <Square value={board[4]} onChoose={() => chooseSquare(4)} />
          <Square value={board[5]} onChoose={() => chooseSquare(5)} />
        </Box>
        <Box sx={style.boardRow}>
          <Square value={board[6]} onChoose={() => chooseSquare(6)} />
          <Square value={board[7]} onChoose={() => chooseSquare(7)} />
          <Square value={board[8]} onChoose={() => chooseSquare(8)} />
        </Box>
      </Box>
    </>
  );
};
