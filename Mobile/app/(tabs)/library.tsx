import ListAllGames from "@/components/listAllGames/listAllGames";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { userCurrent } from "../../services/userServices";
import UserHeader from "@/components/userHeader/userHeader";


const LibraryPage = () => {

  //NECESITO EL TOKEN

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
    userCurrent()
      .then((userInfo: any) => setUserLogged(userInfo))
      .catch((error: any) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <ActivityIndicator size="large" color="#007AFF" />}
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
