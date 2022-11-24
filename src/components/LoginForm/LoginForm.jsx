import React from "react";

import { useStateContext } from "../../context/StateContext";
import { useInput } from "../../hooks/useInput";
import { loginWebService } from "../../services/webService";

import { Form } from "../Form/Form";

import AccountCircle from "@mui/icons-material/AccountCircle";
import { makeStyles } from "./styles";

export const LoginForm = () => {
  const [username, handleUsername] = useInput();
  const { handleAuth, addUser } = useStateContext();

  const style = makeStyles();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await loginWebService("/api/login", { username });
    addUser(data);

    sessionStorage.setItem("username", data._doc.username);
    sessionStorage.setItem("userId", data._doc.userId);
    sessionStorage.setItem("token", data.token);

    handleAuth();
  };

  return (
    <Form
      title="Login"
      label="username"
      onSubmit={onSubmit}
      value={username}
      handleValue={handleUsername}
      btnText="Let's go"
      icon={<AccountCircle />}
      styles={style}
    />
  );
};
