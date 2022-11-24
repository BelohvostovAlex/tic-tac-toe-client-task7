import React from "react";

import { LinearProgress } from "@mui/material";
import { makeStyles } from "./styles";

export const LineProgress = () => {
  const style = makeStyles();
  return <LinearProgress sx={style.lineProgress} />;
};
