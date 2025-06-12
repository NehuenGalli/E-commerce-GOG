import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const GamePage = () => {
  const { gameId, name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: name as string }} />
      <Text>Game ID: {gameId}</Text>
    </>
  );
};

export default GamePage;
