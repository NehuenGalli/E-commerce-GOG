import CartWithItems from "../components/cart/cartWithItems";
import EmptyCart from "../components/cart/emptyCart";
import { getCart } from "../services/userService";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { removeGame } from "../services/gameServices";
import { success_gameRemovedFromCart_message } from "../utilities/success_message";
import { ROUTES } from "../constants";
import { getToken } from "../utilities/localstorageUtils";
import { toast, ToastContainer } from "react-toastify";

const Cart = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getToken();
    const isAuth = !!token;
    setIsAuthenticated(isAuth);

    if (!isAuth) {
      navigate(ROUTES.LOGIN);
    }

    getCart(token)
      .then((data) => {
        setCart(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const handleRemove = async (gameId) => {
    const token = getToken();
    try {
      await removeGame(gameId, token);
      toast.success(success_gameRemovedFromCart_message);
    } catch (error) {
      setError(error.message);
    }
    const updatedCart = await getCart(token);
    setCart(updatedCart);
  };

  return (
    <>
      {cart === null ? (
        <p>Loading...</p>
      ) : cart.games.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartWithItems items={cart.games} onRemove={handleRemove} />
      )}
      <ToastContainer />
    </>
  );
};

export default Cart;
