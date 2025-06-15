import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../constants";

export const userContext = createContext({
  name: "",
  imageUrl: "",
  isLoggedIn: false,
  logIn: (token?: string) => {},
  logOut: () => {},
  getToken: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getToken = async () => {
    return await AsyncStorage.getItem(API.TOKEN_KEY);
  };

  const logIn = async (token?: string) => {
    setIsLoggedIn(true);
    setName("");
    setImageUrl("");
    if (token) {
      await AsyncStorage.setItem(API.TOKEN_KEY, token);
    }
  };

  const logOut = async () => {
    setIsLoggedIn(false);
    setName("");
    setImageUrl("");
    await AsyncStorage.removeItem(API.TOKEN_KEY);
  };

  return (
    <userContext.Provider
      value={{ name, imageUrl, isLoggedIn, logIn, logOut, getToken }}
    >
      {children}
    </userContext.Provider>
  );
};
