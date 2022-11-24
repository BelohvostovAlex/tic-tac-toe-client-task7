import React from "react";

import { Button } from "@mui/material";

import { makeStyles } from "./styles";

export const MyButton = ({
  type = "button",
  variant = "contained",
  btnText,
  onClick,
  styles,
}) => {
  const style = makeStyles(styles);
  return (
    <Button
      variant={variant}
      type={type}
      onClick={onClick}
      sx={style.btnWrapper}
    >
      {btnText}
    </Button>
  );
};
