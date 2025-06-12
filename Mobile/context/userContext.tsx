import { createContext, useState } from "react";

export const userContext = createContext({
  name: "",
  imageUrl: "",
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
  getToken: () => {},
});

export const UserProvider = ({ children }: any) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getToken = () => {};

  const logIn = () => {
    setIsLoggedIn(true);
    setName("");
    setImageUrl("");
    // setToken("token");
  };
  const logOut = () => {
    setIsLoggedIn(false);
    setName("");
    setImageUrl("");
    // removeToken("token");
  };

  return (
    <userContext.Provider
      value={{ name, imageUrl, isLoggedIn, logIn, logOut, getToken }}
    >
      {children}
    </userContext.Provider>
  );
};
