import { useRouter } from "expo-router";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { ROUTES_MOBILE } from "../../constants";
import { CartContext } from "../../context/cartContext";
import styles from "./portAddToCart.style";

const AddToCart = ({ game }) => {
  const { cart, addToCart } = useContext(CartContext);
  const router = useRouter();

  const isInCart = cart.games.some((g) => String(g.id) === String(game.id));

  const handleAddToCart = async () => {
    try {
      await addToCart(game.id);
      Toast.show({
        type: "success",
        text1: "Game added to cart successfully!",
        topOffset: 100,
      });
    } catch (error) {
      if (error.message) {
        router.replace(ROUTES_MOBILE.LOGIN);
      } else {
        Toast.show({
          type: "error",
          text1: error.message,
          topOffset: 100,
        });
      }
    }
  };

  return (
    <View style={styles.cartContainer}>
      <View style={styles.topRow}>
        <Text style={styles.cartTitle}>Buy</Text>
        <Text style={styles.gamePrice}>
          USD {Number(game.price?.amount || 0).toFixed(2)}
        </Text>
      </View>

      {!isInCart && (
        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleAddToCart}
          activeOpacity={0.7}
        >
          <Text style={styles.cartButtonText}>Buy</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AddToCart;
