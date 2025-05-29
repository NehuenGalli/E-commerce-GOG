import { API, ROUTES } from "../../constants";
import "./addToCart.css";
import { useNavigate } from "react-router";
import { addGameToCart } from "../../services/gameServices";
import { toast } from "react-toastify";
import { getToken } from "../../utilities/localstorageUtils";

const AddToCart = ({ game }) => {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const token = getToken();
      if (!token) {
        navigate(ROUTES.LOGIN);
        toast.error("You must be logged in to add a game to the cart");
      }
      await addGameToCart(game.id, token);
      toast.success("Game added to cart successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
        <button
          className="cart-button rounded py-2 px-4"
          onClick={handleAddToCart}
        >
          <strong>Add to Cart</strong>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
