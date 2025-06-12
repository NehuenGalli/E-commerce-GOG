import { useEffect, useState } from "react";
import { getGames } from "../../services/gameServices";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getGames(currentPage)
      .then((games: any) => setGames(games))
      .catch((error: any) =>
        Toast.show({
          type: "error",
          text1: "Error loading games",
          text2: error,
        })
      )
      .finally(() => setIsLoading(false));
  }, [currentPage]);

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
