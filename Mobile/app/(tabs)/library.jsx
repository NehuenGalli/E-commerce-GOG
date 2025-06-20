
import { useContext, useEffect, useState } from "react";
import { userCurrent } from "../../services/userServices";
import UserHeader from "../../components/userHeader/userHeader";
import { userContext } from "@/context/userContext";
import { View, FlatList, Text } from "react-native";
import { styles } from "../../app.style";
import GameCard from "../../components/gameCard/gameCard";

const LibraryPage = () => {
  const { getToken } = useContext(userContext);

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
      <UserHeader user={userLogged} displayLogoutButton={true}/>
      <FlatList
            data={userLogged.games}
            keyExtractor={(game) => game.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={<Text style={styles.noResults}>No games found</Text>}
            ListHeaderComponent={
              <>
              
                <Text style={styles.pageTitle}>YOUR GAMES </Text>

              </>
            }
            renderItem={({ item }) => (
              
              <GameCard item={item}></GameCard>
             
            )}
        /> 
    </View>
  );
};

export default LibraryPage;
