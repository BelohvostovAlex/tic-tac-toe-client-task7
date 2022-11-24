import React, { useState } from "react";
import { Channel, useChatContext } from "stream-chat-react";

import { Box } from "@mui/material";
import { Game } from "../Game/Game";
import { SnackBar } from "../SnackBar/SnackBar";
import { Form } from "../Form/Form";
import { MyButton } from "../Button/MyButton";

import { useStateContext } from "../../context/StateContext";
import { useInput } from "../../hooks/useInput";

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { makeStyles } from "./styles";

export const JoinForm = () => {
  const [opponent, handleOpponent] = useInput();
  const { handleLogout } = useStateContext();
  const { client } = useChatContext();
  const [channel, setChannel] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);

  const style = makeStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const createChannel = async (e) => {
    e.preventDefault();
    const response = await client.queryUsers({ name: { $eq: opponent } });

    if (response.users.length === 0) {
      setOpenSnack(true);
      return;
    }

    const newChannel = await client.channel("messaging", {
      members: [client.userID, response.users[0].id],
    });

    await newChannel.watch();
    setChannel(newChannel);
  };

  return (
    <Box sx={style.joinWrapper}>
      {channel ? (
        <Channel channel={channel}>
          <Game
            channel={channel}
            setChannel={setChannel}
            handleLogout={handleLogout}
            btnExtraStyles={style.btnExtraStyles}
          />
        </Channel>
      ) : (
        <>
          <Form
            title="Create Game"
            label="username"
            onSubmit={createChannel}
            value={opponent}
            handleValue={handleOpponent}
            btnText="Join/Start"
            variant="outlined"
            icon={<SupervisedUserCircleIcon />}
            styles={{ formTextField: style.formTextField }}
          />
          <MyButton
            btnText="Logout"
            onClick={handleLogout}
            styles={style.btnExtraStyles}
          />
          <SnackBar
            handleClose={handleClose}
            open={openSnack}
            text="User not found"
            severity="warning"
          />
        </>
      )}
    </Box>
  );
};
