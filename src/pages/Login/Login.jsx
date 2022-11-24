import React from "react";

import { Box } from "@mui/material";
import { LoginForm } from "../../components/LoginForm/LoginForm";

import { makeStyle } from "./styles";

export const Login = () => {
  const style = makeStyle();
  return (
    <Box sx={style.loginWrapper}>
      <LoginForm />
    </Box>
  );
};
