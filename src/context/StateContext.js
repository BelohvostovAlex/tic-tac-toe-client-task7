import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { StreamChat } from "stream-chat";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const client = useMemo(() => StreamChat.getInstance("yx88q8bn6ffy"), []);

  const addUser = (value) => {
    setUser(value);
  };

  const handleAuth = useCallback(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");

    setIsAuth(false);
    setUser({});

    client.disconnectUser();
  }, [client]);

  return (
    <Context.Provider
      value={{
        isAuth,
        handleAuth,
        addUser,
        user,
        handleLogout,
        client,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
