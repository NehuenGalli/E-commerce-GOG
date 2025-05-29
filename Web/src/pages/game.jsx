import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getGameById } from "../services/gameServices";
import { toast, ToastContainer } from "react-toastify";

import GamePortInfo from "../components/gamePortInfo/gamePortInformation";
import GameImagesCarrucel from "../components/GameImagesCarrucel/gameImagesCarrucel";
import GameAbout from "../components/gameAbout/gameabout";
<<<<<<< HEAD
import Reviews from "../components/reviews/review";
import RelatedGameSection from "./game/RelatedGameSection";
=======
import Reviews from "../components/reviews/reviews"

>>>>>>> 5d456eda02c5759e28889427a0436ba37b7428ea
const Game = ({ isLoggedIn }) => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        setIsLoading(true);
        setError(null);

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
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "24px",
            height: "120px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(145deg, #6e8efb, #a777e3)",
                boxShadow: `
                  0 0 15px rgba(167, 119, 227, 0.8),
                  0 0 30px rgba(167, 119, 227, 0.4)
                `,
                animation: `bounce 0.9s infinite ease-in-out`,
                animationDelay: `${i * 0.15}s`,
                transformOrigin: "bottom center",
              }}
            />
          ))}
        </div>
        <style>{`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0) scale(1, 1);
            }
            30% {
              transform: translateY(-50px) scale(1.1, 0.9);
            }
            60% {
              transform: translateY(0) scale(1, 1);
            }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "#ff6b6b",
        }}
      >
        <h2>Error al cargar el juego</h2>
        <p>{error}</p>
        <p>Game ID: {gameId || "No proporcionado"}</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p>No se encontraron datos para este juego</p>
      </div>
    );
  }

  return (
    <div className="container ">
      <GamePortInfo game={game} isLoggedIn={isLoggedIn} />
      <GameImagesCarrucel game={game} />
      <GameAbout game={game} />
      {game.relatedGames.length > 0 && (
        <RelatedGameSection relatedGames={game.relatedGames} />
      )}
      <Reviews game={game} isLoggedIn={isLoggedIn} />
      <ToastContainer />
    </div>
  );
};

export default Game;
