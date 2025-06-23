import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addGameToCart } from "../../services/gameServices";
import { getCart } from "../../services/userService";
import { getToken } from "../../utilities/localstorageUtils";
import { ROUTES } from "../../constants";
import {
  success_gameAddedSuccessfully_message,
} from "../../utilities/success_message";
import {
  mustBeLoggedIn_message,
} from "../../utilities/error_message";
import styles from "./portAddToCart.styles";
const AddToCart = ({ game }) => {
  const navigation = useNavigation();
  const token = getToken();
  const [cart, setCart] = useState({ games: [], user: null });
  const [cartUpdated, setCartUpdated] = useState(false);
  const isInCart = cart.games.some((g) => g.id === game.id);

  const handleAddToCart = async () => {
    try {
      if (!token) {
        Alert.alert("Error", mustBeLoggedIn_message, [
          { text: "OK", onPress: () => navigation.navigate(ROUTES.LOGIN) },
        ]);
        return;
      }

      await addGameToCart(game.id, token);
      Alert.alert("Success", success_gameAddedSuccessfully_message);
      setCartUpdated((prev) => !prev);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getCart(token)
        .then((userCart) => {
          setCart(userCart);
        })
        .catch((error) => {
          Alert.alert("Error", error.message);
        });
    }
  }, [cartUpdated, token]);

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.cartTitle}>Buy {game.name}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.gamePrice}>
          USD {Number(game.price.amount).toFixed(2)}
        </Text>

        {!isInCart && (
          <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AddToCart;

