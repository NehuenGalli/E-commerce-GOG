import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import GamePortInfo from "../components/gamePortInfo/gamePortInformation";
import GameImagesCarrucel from "../components/GameImagesCarrucel/gameImagesCarrucel";
import GameAbout from "../components/gameAbout/gameabout";
import Reviews from "../components/reviews/review"

const Game = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState(null);
  const[user,setUser]= useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        setIsLoading(true);
        setError(null);
      

        const response = await axios.get("http://localhost:3000/games/g_3498");
        setGame(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del juego:", error);
        setError(error.response?.data?.message || error.message || 'Error al cargar el juego');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGameData();
  }, [gameId]);

  /*useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        setError(null);
      

        const response = await axios.get("http://localhost:3000/users/current");
        setGame(response.data);
      } catch (error) {
        console.error("Error al obtener los datos del juego:", error);
        setError(error.response?.data?.message || error.message || 'Error al pedir usuario el juego');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);
*/
  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '24px',
          height: '120px'
        }}>
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #6e8efb, #a777e3)',
                boxShadow: `
                  0 0 15px rgba(167, 119, 227, 0.8),
                  0 0 30px rgba(167, 119, 227, 0.4)
                `,
                animation: `bounce 0.9s infinite ease-in-out`,
                animationDelay: `${i * 0.15}s`,
                transformOrigin: 'bottom center'
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
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#ff6b6b'
      }}>
        <h2>Error al cargar el juego</h2>
        <p>{error}</p>
        <p>Game ID: {gameId || 'No proporcionado'}</p>
      </div>
    );
  }

  if (!game) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center'
      }}>
        <p>No se encontraron datos para este juego</p>
      </div>
    );
  }

  return (
    <div style={{paddingLeft: '100px',paddingRight: '100px',marginTop:'30px'}}>
      <GamePortInfo game={game} />
      <GameImagesCarrucel game={game} />
      <GameAbout game={game} />
      <Reviews game={game} />
    </div>
  );
};

export default Game;