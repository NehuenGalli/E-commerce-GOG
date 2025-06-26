import Spinner from "@/components/spinner";
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { Text } from "react-native";
import Toast from "react-native-toast-message";
import CartWithItems from "../../components/cart/cartWithItems";
import EmptyCart from "../../components/cart/emptyCart";
import { ROUTES_MOBILE } from "../../constants";
import { CartContext } from "../../context/cartContext";
import { userContext } from "../../context/userContext";
import { success_gameRemovedFromCart_message } from "../../utilities/success_menssage";

const CartPage = () => {
  const { isLoggedIn } = useContext(userContext);
  const router = useRouter();

  const { cart, loading, error, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(ROUTES_MOBILE.LOGIN);
    }
  }, [isLoggedIn, router]);

  const handleRemove = async (gameId) => {
    try {
      await removeFromCart(gameId);
      Toast.show({
        type: "success",
        text1: success_gameRemovedFromCart_message,
        topOffset: 100,
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: err.message,
        topOffset: 100,
      });
    }
  };

  if (loading) return <Spinner />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <>
      {cart === null ? (
        <Spinner />
      ) : cart?.games.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartWithItems items={cart?.games} onRemove={handleRemove} />
      )}
    </>
  );
};

export default CartPage;
