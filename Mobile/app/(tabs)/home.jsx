import { useEffect, useState } from "react";
import { getRecommendedGames } from "../../services/gameServices";
import ListAllGames from "../../components/listAllGames/listAllGames";
import Toast from "react-native-toast-message";
import Spinner from "@/components/spinner";
import { View } from "react-native";
import { styles } from "../../app.style";

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
          <ListAllGames games={games} title="FEATURED & RECOMMENDED" />
        </View>
      )}
    </>
  );
};

export default Home;
