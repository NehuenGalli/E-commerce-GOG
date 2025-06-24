import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useState } from "react";
import { View, Text, TextInput, Alert, Pressable } from "react-native";
import { purchase } from "../../services/purchaseServices";
import { validateCardData } from "../../utilities/validateCard";
import { useRouter } from "expo-router";
import { styles } from "./purchaseForm.styles";
import Toast from "react-native-toast-message";

const PurchaseForm = ({ items, token }) => {
  const [nameCard, setNameCard] = useState("");
  const [numCard, setNumCard] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCVV] = useState("");

  const { refreshCart } = useContext(CartContext);
  const router = useRouter();

  const submitCard = () => {
    const errorMsg = validateCardData({ nameCard, numCard, expDate, cvv });

    if (errorMsg) {
      Toast.show({
        type: "error",
        text1: errorMsg,
        text2: "Invalid information",
      });
      return;
    }

    purchase(nameCard, numCard, expDate, cvv, token)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Successful purchase",
        });
        refreshCart();
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Error buying games",
          text2: error,
        });
      })
      .finally(
        setTimeout(() => {
          router.replace("/home");
        }),
        2000
      );
  };

  return (
    <View style={styles.form}>
      <View style={styles.formInputs}>
        <Text style={styles.label}>CARD HOLDER NAME</Text>
        <TextInput
          style={styles.input}
          value={nameCard}
          onChangeText={setNameCard}
          placeholder="Name on card"
          autoCapitalize="words"
        />
      </View>
      <View style={styles.formInputs}>
        <Text style={styles.label}>NUMBER</Text>
        <TextInput
          style={styles.input}
          value={numCard}
          onChangeText={setNumCard}
          keyboardType="numeric"
          maxLength={16}
          placeholder="1234567890123456"
        />
      </View>

      <View style={styles.formInputs}>
        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          value={cvv}
          onChangeText={setCVV}
          keyboardType="numeric"
          secureTextEntry
          maxLength={4}
          placeholder="123"
        />
      </View>

      <View style={styles.formInputs}>
        <Text style={styles.label}>EXPIRATION DATE</Text>
        <TextInput
          style={styles.input}
          value={expDate}
          onChangeText={setExpDate}
          placeholder="MM/YY"
        />
      </View>

      <Pressable style={styles.button} title="Buy" onPress={submitCard}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </Pressable>
    </View>
  );
};

export default PurchaseForm;
