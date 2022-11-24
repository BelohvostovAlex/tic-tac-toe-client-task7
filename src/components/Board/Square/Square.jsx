import React from "react";

import { Box } from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

import { makeStyles } from "./styles";

export const Square = ({ onChoose, value }) => {
  const style = makeStyles();
  const icon =
    value === "X" ? (
      <LunchDiningIcon sx={style.icon1} />
    ) : value === "O" ? (
      <DoDisturbIcon sx={style.icon2} />
    ) : (
      ""
    );

  return (
    <Box sx={style.squareWrapper} onClick={onChoose}>
      {icon}
    </Box>
  );
};
