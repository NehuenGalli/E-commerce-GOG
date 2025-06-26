import { useRoute } from "@react-navigation/native";
import { Stack, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import Toast from "react-native-toast-message";

import { getGameById } from "../../services/gameServices";

import GameImagesCarrucel from "../../components/GameImagesCarrucel/gameImagesCarrucel";
import GamePortInfo from "../../components/GamePortInfo/GamePortInfo";
import GameAbout from "../../components/gameAbout/gameAbout";
import RelatedGames from "../../components/relatedGames/RelatedGames";
import Reviews from "../../components/reviews/reviews";
import { userContext } from "../../context/userContext";

const Game = () => {
  const route = useRoute();
  const { name } = useLocalSearchParams();
  const { gameId } = route.params;
  const { isLoggedIn } = useContext(userContext);
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        setIsLoading(true);
        const gameData = await getGameById(gameId);
        setGame(gameData);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameData();
  }, [gameId]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!game) {
    return <Text>El juego no se encontró</Text>;
  }
  return (
    <>
      <Stack.Screen options={{ title: name }} />

      <ScrollView>
        <GamePortInfo game={game} isLoggedIn={isLoggedIn} />
        <View style={{ padding: 16 }}>
          <GameImagesCarrucel game={game} />
          <GameAbout game={game} />
          {game.relatedGames.length > 0 && (
            <RelatedGames relatedGames={game.relatedGames} />
          )}
          <Reviews game={game} isLoggedIn={isLoggedIn} />
        </View>
      </ScrollView>
    </>
  );
};

export default Game;
