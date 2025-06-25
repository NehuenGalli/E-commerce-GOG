import React, { createContext, useState, useEffect, useContext } from "react";
import { getCart, removeGame } from "../services/userServices";
import { addGameToCart as addGameToCartService } from "../services/gameServices";
import { userContext } from "../context/userContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ games: [], user: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getToken } = useContext(userContext);

  const loadCart = async () => {
    try {
      setLoading(true);
      const token = await getToken();
      if (!token) {
        setCart({ games: [], user: null });
        return;
      }
      const cartData = await getCart(token);
      setCart(cartData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (gameId) => {
    try {
      const token = await getToken();
      await addGameToCartService(gameId, token);
      await loadCart(); // refresca el estado global
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const removeFromCart = async (gameId) => {
    try {
      const token = await getToken();
      await removeGame(gameId, token);
      await loadCart();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addToCart,
        removeFromCart,
        refreshCart: loadCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};