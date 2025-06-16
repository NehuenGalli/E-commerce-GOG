import { userContext } from "../../context/userContext";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "expo-router";
import { getCart, removeGame } from "../../services/userService";
import { Text } from "react-native";
import Spinner from "@/components/spinner";
import EmptyCart from "../../components/cart/emptyCart";
import CartWithItems from "../../components/cart/cartWithItems";
import Toast from "react-native-toast-message";
import { success_gameRemovedFromCart_message } from "../../utilities/success_menssage";

type Cart = {
  id: string;
  name: string;
  image: string;
  games: any[];
};

const CartPage = () => {
  const { getToken } = useContext(userContext);
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<Cart | null>(null);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchCart = async () => {
    try {
      const token = await getToken();
      if (!token) {
        router.replace("/login");
        return;
      }

      const cartData = await getCart(token);
      setCart(cartData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  fetchCart();
}, []);
 
const handleRemove = async (gameId: string) => {
    try {
      const token = await getToken();
      await removeGame(gameId, token);
      Toast.show({
        type: "success",
        text1: success_gameRemovedFromCart_message,
        topOffset: 100,
      });

      const updatedCart = await getCart(token);
      setCart(updatedCart);
    } catch (err: any) {
      setError(err.message);
    }
  };

if (isLoading) return <Spinner />;
if (error) return <Text>Error: {error}</Text>;

return (
  <>
    {cart === null ? (
      <p>Loading...</p>
    ) : cart?.games.length === 0 ? (
      <EmptyCart />
    ) : (
      <CartWithItems items={cart?.games} onRemove={handleRemove} />
    )}
  </>
);
};

export default CartPage;
