import { ROUTES } from "../../constants";
import "./addToCart.css";
import { useNavigate } from "react-router";
import { addGameToCart } from "../../services/gameServices";
import { toast } from "react-toastify";
import { getToken } from "../../utilities/localstorageUtils";
import { success_gameAddedSuccessfully_message } from "../../utilities/success_message";
import { mustBeLoggedIn_message } from "../../utilities/error_message";
import { useEffect, useState } from "react";
import { getCart } from "../../services/userService";

const AddToCart = ({ game }) => {
  const navigate = useNavigate();
  const token = getToken();
  const [cart, setCart] = useState({
    games: [],
    user: null,
  });
  const [cartUpdated, setCartUpdated] = useState(false);
  const isInCart = cart.games.some((g) => g.id === game.id);

  const handleAddToCart = async () => {
    try {
      if (!token) {
        navigate(ROUTES.LOGIN);
        toast.error(mustBeLoggedIn_message);
        return;
      }
      await addGameToCart(game.id, token);
      toast.success(success_gameAddedSuccessfully_message);
      setCartUpdated((prev) => !prev);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getCart(token)
        .then((userCart) => {
          setCart(userCart);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [cartUpdated, token]);

  return (
    <div className="cart-container d-flex flex-column flex-xl-row border rounded align-items-center my-4 p-4 gap-3">
      <div className="cart-title text-center">
        <strong>Buy {game.name}</strong>
      </div>

      <div className=" d-flex flex-column flex-xl-row align-items-center ms-xl-auto gap-3 gap-xl-5">
        <div className="game-price ">
          <strong>
            USD
            {Number(game.price.amount).toFixed(2)}
          </strong>
        </div>
        {!isInCart && (
          <button
            className="cart-button rounded py-2 px-4"
            onClick={handleAddToCart}
          >
            <strong>Add to Cart</strong>
          </button>
        )}
      </div>
    </div>
  );
};

export default AddToCart;
