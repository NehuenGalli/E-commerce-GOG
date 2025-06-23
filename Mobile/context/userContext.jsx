import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../constants";
import { userCurrent } from "@/services/userServices";
import Spinner from "@/components/spinner";

export const userContext = createContext({
  idUser: "",
  name: "",
  isLoggedIn: false,
  logIn: (token) => {},
  logOut: async () => {},
  getToken: async () => null,
});

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [idUser, setIdUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getToken = async () => {
    return await AsyncStorage.getItem(API.TOKEN_KEY);
  };

  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        userCurrent(token).then((user) => {
          setIdUser(user.id);
          setName(user.name);
          setIsLoggedIn(true);
        });
      }
    }).finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const logIn = async (token) => {
    if (token) {
      await AsyncStorage.setItem(API.TOKEN_KEY, token);
      setIsLoggedIn(true);
      userCurrent(token).then((user) => {
        setName(user.name);
      });
    }
  };

  const logOut = async () => {
    setIsLoggedIn(false);
    setName("");
    await AsyncStorage.removeItem(API.TOKEN_KEY);
  };

  return (
    <userContext.Provider
      value={{ name, isLoggedIn, idUser, logIn, logOut, getToken }}
    >
      {children}
    </userContext.Provider>
  );
};
