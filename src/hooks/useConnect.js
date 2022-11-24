import { useEffect } from "react";

import { useStateContext } from "../context/StateContext";

export const useConnect = () => {
  const { handleAuth, addUser, user, client } = useStateContext();

  useEffect(() => {
    handleAuth();
  }, [handleAuth, user]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      client
        .connectUser(
          {
            id: sessionStorage.getItem("userId"),
            name: sessionStorage.getItem("username"),
          },
          sessionStorage.getItem("token")
        )
        .then((user) => {
          console.log(user);
          addUser(user);
        });
    }
    // eslint-disable-next-line
  }, [user]);
};
