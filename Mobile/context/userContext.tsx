import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API, ROUTES_MOBILE } from "../constants";
import { userCurrent } from "@/services/userServices";
import Spinner from "@/components/spinner";
import { router } from "expo-router";

export const userContext = createContext({
  idUser: "",
  name: "",
  imageUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
  isLoggedIn: false,
  logIn: (token?: string) => {},
  logOut: async () => {},
  getToken: async () => Promise.resolve<string | null>(null),
});

export const UserProvider = ({ children }: any) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://randomuser.me/api/portraits/lego/1.jpg");
  const [idUser, setIdUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const[isLoading, setIsLoading] = useState(true);

  const getToken = async () => {
    return await AsyncStorage.getItem(API.TOKEN_KEY);
  };

  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        userCurrent(token).then((user: any) => {
          setIdUser(user.id);
          setName(user.name);
          setImageUrl(user.image);
          setIsLoggedIn(true);

     
        })
      }
    }).finally(()=>setIsLoading(false));
  }, []);


  if(isLoading){
    return <Spinner></Spinner>
  }

  const logIn = async (token?: string) => {
    if (token) {
      await AsyncStorage.setItem(API.TOKEN_KEY, token);
      setIsLoggedIn(true);
      userCurrent(token).then((user: any) => {
        setName(user.name);
        setImageUrl(user.imageUrl);
      });
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
      value={{ name, imageUrl, isLoggedIn, idUser, logIn, logOut, getToken }}
    >
      {children}
    </userContext.Provider>
  );
};
