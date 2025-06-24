import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { addGameToCart } from "../../services/gameServices";
import { getCart } from "../../services/userServices";
import { userContext } from "../../context/userContext";
import { useRouter } from "expo-router";
import styles from "./portAddToCart.style";

const AddToCart = ({ game }) => {
  const router = useRouter();
  const [cart, setCart] = useState({ games: [], user: null });
  const [cartUpdated, setCartUpdated] = useState(false);
  const { getToken } = useContext(userContext);
  
  // Comparación segura de IDs
  const isInCart = cart.games.some((g) => String(g.id) === String(game.id));

  const handleAddToCart = async () => {
    try {
      const token = await getToken();
      if (!token) {
        router.push("/login");
        return;
      }

      await addGameToCart(String(game.id), token); // Asegurar ID como string
      setCartUpdated(prev => !prev);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = await getToken();
        if (token) {
          const userCart = await getCart(token);
          setCart(userCart || { games: [], user: null });
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
  
    fetchCart();
  }, [cartUpdated, getToken]); // Added getToken as dependency

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.cartTitle}>Buy </Text>

      <View style={styles.bottomRow}>
        <Text style={styles.gamePrice}>
          USD {Number(game.price?.amount || 0).toFixed(2)}
        </Text>

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
    </View>
  );
};

export default AddToCart;