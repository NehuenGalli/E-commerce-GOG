import ListAllGames from "@/components/listAllGames/listAllGames";
import { useContext, useEffect, useState } from "react";
import { userCurrent } from "../../services/userServices";
import UserHeader from "../../components/userHeader/userHeader";
import { userContext } from "@/context/userContext";
import { View } from "react-native";
import { styles } from "../../app.style";

const LibraryPage = () => {
  const { logIn, isLoggedIn, getToken } = useContext(userContext);

  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });
  useEffect(() => {
    getToken().then((token) =>
      userCurrent(token)
        .then((userInfo) => setUserLogged(userInfo))
        .catch((error) => console.log(error))
    );
  }, []);

  return (
    <View style={styles.container}>
      <UserHeader user={userLogged} />
      <ListAllGames games={userLogged.games} title="YOUR GAMES" />
    </View>
  );
};

export default LibraryPage;
