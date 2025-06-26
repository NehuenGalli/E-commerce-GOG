import Spinner from "@/components/spinner";
import { userContext } from "@/context/userContext";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { styles } from "../../app.style";
import GameCard from "../../components/gameCard/gameCard";
import UserHeader from "../../components/userHeader/userHeader";
import { userCurrent } from "../../services/userServices";

import { ROUTES_MOBILE } from "@/constants";

const LibraryPage = () => {
  const { isLoggedIn, getToken } = useContext(userContext);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(ROUTES_MOBILE.LOGIN);
    }
  }, [isLoggedIn, router]);

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
        .catch((error) =>
          Toast.show({
            type: "error",
            text1: "Error loading user current info",
            text2: error.message,
          })
        )
        .finally(() => setIsLoading(false))
    );
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <View style={styles.container}>
          <UserHeader user={userLogged} displayLogoutButton={true} />
          <FlatList
            data={userLogged.games}
            keyExtractor={(game) => game.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 90 }}
            ListEmptyComponent={
              <Text style={styles.noResults}>No games found</Text>
            }
            ListHeaderComponent={
              <>
                <Text style={styles.pageTitle}>YOUR GAMES </Text>
              </>
            }
            renderItem={({ item }) => <GameCard item={item}></GameCard>}
          />
        </View>
      )}
    </>
  );
};

export default LibraryPage;
