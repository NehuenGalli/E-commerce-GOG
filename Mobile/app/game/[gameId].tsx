import { Stack, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { useNavigateTo } from "../../hooks/useNavigateTo";

const GamePage = () => {
  const { gameId, name } = useLocalSearchParams();

   const { navigateToUser } = useNavigateTo();


   const idUser = "u_28";
  return (
    <>
      <Stack.Screen options={{ title: name as string }} />
      <Text>Game ID: {gameId}</Text>


      <Text onPress={() => navigateToUser(idUser)}>Usuario </Text>
    </>
  );
};

export default GamePage;
