import { API, ROUTES } from '../../constants';
import './addToCart.css';
import { useNavigate } from "react-router";
import { useState } from "react";
import { addGameToCart } from '../../services/gameServices';
import { toast } from 'react-toastify';

const AddToCart = ({ game }) => {
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    setError(null);

    try {
      const token = localStorage.getItem(API.TOKEN_KEY);
      if (!token) {
        navigate(ROUTES.LOGIN);
        toast.console.error('You must be logged in to add a game to the cart');
      }
      await addGameToCart(game.id, token);
      toast.success('Game added to cart successfully');
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };
  
  return (
    <div className="cart-container d-flex align-items-center px-5 border rounded my-5">
      <p className="mb-0 cart-title">
        <strong>Buy {game.name}</strong>
      </p>

      <div className="button-price-container d-flex align-items-center ms-auto">
        <p className="game-price mb-0 ">
          <strong> USD
            {Number(game.price.amount).toFixed(2)}</strong>
        </p>
        <button className="cart-button  rounded ml-5" onClick={handleAddToCart}>
          <strong>Add to Cart</strong>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;