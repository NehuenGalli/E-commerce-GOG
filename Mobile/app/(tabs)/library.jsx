import ListAllGames from "@/components/listAllGames/listAllGames";
import {  useContext, useEffect, useState } from "react";
import { userCurrent } from "../../services/userServices";
import UserHeader from "@/components/userHeader/userHeader";
import { userContext } from "@/context/userContext";
import Spinner from "@/components/spinner";



const LibraryPage = () => {

  const { logIn, isLoggedIn, getToken } = useContext(userContext);

  const [isLoading, setIsLoading] = useState(true);


  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });
useEffect(() => {
    setIsLoading(true);
    getToken().then(token =>(userCurrent(token)
      .then((userInfo) => setUserLogged(userInfo))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false))
    
    ));
  
}, []);

 

  return (
    <>
      {isLoading && <Spinner   />}
      {!isLoading && (
        <>
          <UserHeader user={userLogged} />
          <ListAllGames games={userLogged.games} title="YOUR GAMES" />
        </>
      )}
    </>
  );
};

export default LibraryPage;
