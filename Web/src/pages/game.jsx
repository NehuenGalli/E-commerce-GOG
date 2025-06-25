import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getGameById } from "../services/gameServices";
import { toast, ToastContainer } from "react-toastify";

import GamePortInfo from "../components/gamePortInfo/gamePortInformation";
import GameImagesCarrucel from "../components/GameImagesCarrucel/gameImagesCarrucel";
import GameAbout from "../components/gameAbout/gameabout";
import Reviews from "../components/reviews/reviews";
import RelatedGameSection from "./game/RelatedGameSection";
import Spinner from "../components/spinner/Spinner";
const Game = ({ isLoggedIn }) => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        setIsLoading(true);
        const gameData = await getGameById(gameId);
        setGame(gameData);
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameData();
  }, [gameId]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container ">
      <GamePortInfo game={game} isLoggedIn={isLoggedIn} />
      <GameImagesCarrucel game={game} />
      <GameAbout game={game} />
      console.log(game.relatedGames);
      {game.relatedGames.length > 0 && (
        <RelatedGameSection relatedGames={game.relatedGames} />
      )}
      <Reviews game={game} isLoggedIn={isLoggedIn} />
      <ToastContainer />
    </div>
  );
};

export default Game;
