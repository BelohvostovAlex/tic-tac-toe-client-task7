import React from "react";

import { Box, Typography } from "@mui/material";
import { LineProgress } from "../LineProgress/LineProgress";

import { makeStyles } from "./styles";

export const InfoBanner = ({ title }) => {
  const style = makeStyles();
  return (
    <Box sx={style.infoBannerWrapper}>
      <Typography sx={style.infoBannerTitle}>{title}</Typography>
      <LineProgress />
    </Box>
  );
};
