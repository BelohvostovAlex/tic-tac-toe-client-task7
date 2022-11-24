import React from "react";
import { Chat } from "stream-chat-react";

import { Box } from "@mui/material";
import { JoinForm } from "../../components/JoinForm/JoinForm";

import { useStateContext } from "../../context/StateContext";

import { makeStyles } from "./styles";

export const Main = () => {
  const { client } = useStateContext();
  const style = makeStyles();

  return (
    <Box sx={style.mainWrapper}>
      <Chat client={client}>
        <JoinForm />
      </Chat>
    </Box>
  );
};
