import { useEffect, useState } from "react";
import { getRecommendedGames } from "../../services/gameServices";
import Toast from "react-native-toast-message";
import Spinner from "@/components/spinner";
import { View, FlatList, Text } from "react-native";
import { styles } from "../../app.style";
import GameCard from "../../components/gameCard/gameCard";

const Home = () => {
  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 1,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getRecommendedGames()
      .then((games) => setGames(games))
      .catch((error) =>
        Toast.show({
          type: "error",
          text1: "Error loading games",
          text2: error,
        })
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <View style={styles.container}>
          <FlatList
            data={games}
            keyExtractor={(game) => game.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={
              <Text style={styles.noResults}>No games found</Text>
            }
            ListHeaderComponent={
              <>
                <Text style={styles.pageTitle}>FEATURED & RECOMMENDED </Text>
              </>
            }
            renderItem={({ item }) => <GameCard item={item}></GameCard>}
          />
        </View>
      )}
    </>
  );
};

export default Home;
