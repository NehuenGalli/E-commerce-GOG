import './gamePort-info.css';
import AddToCart  from '../portAddToCart/addToCart';
import { userCurrent } from '../../services/userService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const GamePortInfo = ({ game, isLoggedIn }) => {
  const [userGames, setUserGames] = useState([]);

  useEffect(() => {
    const fetchUserGames = async () => {
      if (!isLoggedIn) {
        setUserGames([]);
        return;
      }

      try {
        const user = await userCurrent();
        setUserGames(user?.games || []);
      } catch (error) {
        toast.error(error.message);
        setUserGames([]);
      }
    };

    fetchUserGames();
  }, [isLoggedIn]);

  const userHasGame = isLoggedIn && userGames.some(userGame => userGame.id === game.id);

  return (
    <div className="border-0">
      <div className="position-relative">
        <img
          src={game.mainImage}
          alt={game.name}
          className="w-100 object-fit-cover imagen"
          style={{
            height: "600px",
            objectPosition: "center top" 
          }}
        />
      </div>

      <div className="mt-4" style={{ fontSize: '1.5rem' }}> 
        <p>
          <strong>Developer: {game.developer.name}</strong> 
        </p>
        <p>
          <strong>Website: {game.website}</strong> 
        </p>
        <p>
          <strong>Release date: {game.releaseDate}</strong> 
        </p>
        <p>
          <strong>Tags: 
          {game.tags.map((tag) => (
            <span key={tag.id} style={{ fontSize: '1.5rem' }}>  </span>
          ))}</strong> 
        </p>
      </div>

      {!userHasGame && <AddToCart game={game} />}

    </div>
    
  );
};

export default GamePortInfo;