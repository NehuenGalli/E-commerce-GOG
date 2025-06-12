import { useRouter } from "expo-router";
import { ROUTES_MOBILE } from "../constants";

export const useNavigateTo = () => {
  const router = useRouter();
  const navigateToGame = (gameId, gameName) => {
    router.push({
      pathname: ROUTES_MOBILE.GAME,
      params: { gameId, name: gameName },
    });
  };
  return {
    navigateToGame,
  };
};
