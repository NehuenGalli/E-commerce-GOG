import "./gamePort-info.css";
import Spinner from "../spinner/Spinner";
import AddToCart from "../portAddToCart/addToCart";
import { userCurrent } from "../../services/userService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { ROUTES } from "../../constants";
import ModalTags from "./modalTags";

const GamePortInfo = ({ game, isLoggedIn }) => {
  const [userGames, setUserGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserGames = async () => {
      if (!isLoggedIn) {
        setUserGames([]);
        setLoading(false);
        return;
      }

      try {
        const user = await userCurrent();
        setUserGames(user?.games || []);
      } catch (error) {
        toast.error(error.message);
        setUserGames([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserGames();
  }, [isLoggedIn]);

  const userHasGame = isLoggedIn && userGames.some((userGame) => userGame.id === game.id);

  if (loading) return <Spinner />;

  return (
    <>
      <div className="ratio ratio-21x9 mt-4 text-bg-dark">
        <img
          src={game.mainImage}
          alt={game.name}
          className="object-fit-cover opacity-75 "
        />
        <h2 className="d-flex align-items-end justify-content-center text-white fs-1 pb-3">
          {game.name}
        </h2>
      </div>
      <div className="my-4" style={{ fontFamily: "sans-serif" }}>
        <div>
          <strong>Developer: {game.developer.name}</strong>
        </div>
        <div>
          <strong>Website: </strong>
          <Link to={game.website} className="link-offset-1  ">
            {game.website}
          </Link>
        </div>
        <div>
          <strong>Release date: </strong>
          <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
        </div>
        <div>
          <strong>Tags: </strong>
          {game.tags.slice(0, 5).map((tag) => (
            <Link
              key={tag.id}
              to={`${ROUTES.TAGS}/${tag.id}`}
              className="link-offset-1 me-2"
            >
              {tag.name}
            </Link>
          ))}
          <ModalTags tags={game.tags} />
        </div>
      </div>

      {!userHasGame && <AddToCart game={game} />}
    </>
  );
};

export default GamePortInfo;
