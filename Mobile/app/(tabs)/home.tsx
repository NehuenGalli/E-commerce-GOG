import { useEffect, useState } from "react";
import { getRecommendedGames } from "../../services/gameServices";
import { ActivityIndicator } from "react-native";
import ListAllGames from "@/components/listAllGames/listAllGames";
import Toast from "react-native-toast-message";

const Home = () => {
  const [games, setGames] = useState<any>({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 1,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getRecommendedGames()
      .then((games: any) => setGames(games))
      .catch((error: any) =>
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
      {isLoading && <ActivityIndicator size="large" color="#007AFF" />}
      {!isLoading && (
        <>
          <ListAllGames games={games} title="FEATURED & RECOMMENDED" />
        </>
      )}
    </>
  );
};

export default Home;
