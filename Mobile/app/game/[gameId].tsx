import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { Stack, useLocalSearchParams } from "expo-router";

import { getGameById } from "../../services/gameServices";

import GamePortInfo from "../../components/GamePortInfo/GamePortInfoStyle";

import GameImagesCarrucel from "../../components/GameImagesCarrucel/gameImagesCarrucel";
import GameAbout from "../../components/gameAbout/gameAbout";
//import Reviews from "../components/reviews/Reviews";
//import RelatedGameSection from "./game/RelatedGameSection";

import { GameT } from "../../types/game";

type RootStackParamList = {
  Game: { gameId: string };
};

type GameScreenRouteProp = RouteProp<RootStackParamList, "Game">;

type Props = {
  isLoggedIn: boolean;
};

const Game = ({ isLoggedIn }: Props) => {
  const route = useRoute<GameScreenRouteProp>();
  const { gameId2, name } = useLocalSearchParams();
  const { gameId } = route.params;

  const [game, setGame] = useState<GameT | null>(null);
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
          text1: (error as Error).message 
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
      <Stack.Screen options={{ title: name as string }} />
      <Text>Game ID: {gameId2}</Text>
      <ScrollView style={{ padding: 16 }}>
  
        <GamePortInfo game={game} isLoggedIn={isLoggedIn} />
         
        <GameImagesCarrucel game={game} />
       
        <GameAbout game={game} />
           {/*
        {game.relatedGames.length > 0 && (
          <RelatedGameSection relatedGames={game.relatedGames} />
        )}
  
        <Reviews game={game} isLoggedIn={isLoggedIn} /> 
        */}
      </ScrollView>
    </>
  );
};

export default Game;
