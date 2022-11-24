import React from "react";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { MyButton } from "../Button/MyButton";

import { makeStyles } from "./styles";

export const Form = ({
  variant = "standard",
  label,
  onSubmit,
  title,
  icon,
  value,
  handleValue,
  btnText = "Submit",
  styles,
}) => {
  const style = makeStyles(styles);
  return (
    <Box sx={style.formWrapper} component="form" onSubmit={onSubmit}>
      <Typography sx={style.formTitle}>{title}</Typography>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        label={label}
        variant={variant}
        value={value}
        onChange={handleValue}
        sx={style.formTextField}
      />
      <MyButton btnText={btnText} type="submit" />
    </Box>
  );
};
