import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../constants";
import { userCurrent } from "@/services/userServices";
import Spinner from "@/components/spinner";

export const userContext = createContext({
  name: "",
  isLoggedIn: false,
  logIn: (token?: string) => {},
  logOut: async () => {},
  getToken: async () => Promise.resolve<string | null>(null),
});

export const UserProvider = ({ children }: any) => {
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const getToken = async () => {
    return await AsyncStorage.getItem(API.TOKEN_KEY);
  };

  useEffect(() => {
    getToken()
      .then((token) => {
        if (token) {
          userCurrent(token).then((user: any) => {
            setName(user.name);
            setIsLoggedIn(true);
          });
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const logIn = async (token?: string) => {
    if (token) {
      await AsyncStorage.setItem(API.TOKEN_KEY, token);
      setIsLoggedIn(true);
      userCurrent(token).then((user: any) => {
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
    <userContext.Provider value={{ name, isLoggedIn, logIn, logOut, getToken }}>
      {children}
    </userContext.Provider>
  );
};
