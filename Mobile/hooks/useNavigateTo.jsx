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

  const navigateToUser = (userId) => {
    router.push({
      pathname: ROUTES_MOBILE.USER,
      params: { userId },
    });
  };

  const navigateToLogin = () => {
    router.replace({
      pathname: ROUTES_MOBILE.LOGIN,
    });
  };

  return {
    navigateToGame,
    navigateToUser,
    navigateToLogin,
  };
};
