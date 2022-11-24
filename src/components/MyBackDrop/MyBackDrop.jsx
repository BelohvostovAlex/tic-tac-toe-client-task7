import * as React from "react";

import { MyButton } from "../Button/MyButton";
import { Box, Typography, Backdrop, useTheme } from "@mui/material";
import { initalResultState } from "../Game/Game";

import { makeStyles } from "./styles";

export default function MyBackDrop({ open, handleClose, text, setResult }) {
  const theme = useTheme();
  const style = makeStyles({ backDropIndex: theme.zIndex.drawer });

  const handleRestart = () => {
    handleClose();
    setResult(initalResultState);
  };
  return (
    <Backdrop sx={style.backDropWrapper} open={open}>
      <Box sx={style.backDropInfoWrapper}>
        <Typography sx={style.backDropTitle}>{text}</Typography>
        <MyButton btnText="Restart" onClick={handleRestart} />
      </Box>
    </Backdrop>
  );
}
