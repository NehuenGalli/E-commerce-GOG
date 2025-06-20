import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import CheckOut from "../checkOut/checkOut";
import { styles } from "./cartWithItems.style";
import { useRouter } from "expo-router";

type GameItem = {
  id: string;
  name: string;
  mainImage: string;
  price: {
    amount: number;
  };
};

type CartWithItemsProps = {
  items: GameItem[];
  onRemove: (id: string) => void;
};

const CartWithItems = ({ items, onRemove }: CartWithItemsProps) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.itemsContainer}>
          <Text style={styles.productsTitle}>Products</Text>
          <View style={styles.line} />

          {items.map((game) => (
            <View key={game.id} style={styles.cartItem}>
              <Image
                source={{ uri: game.mainImage } }
                style={styles.cartItemImage}
                resizeMode="cover"
              />
              <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemName}>{game.name}</Text>
                <View style={styles.cartItemActions}>
                  <Text style={styles.cartPrice}>
                    USD {game.price.amount.toFixed(2)}
                  </Text>
                  <TouchableOpacity
                    style={styles.removeItemBtn}
                    onPress={() => onRemove(game.id)}
                  >
                    <FontAwesome name="trash" size={20} color="#c00" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        <CheckOut items={items}>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => router.replace("/purchase")}
          >
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </CheckOut>
      </ScrollView>
    </View>
  );
};

export default CartWithItems;
