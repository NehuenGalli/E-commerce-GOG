import { View } from "react-native";
import CheckOut from "../components/checkOut/checkOut";
import { getCart } from "../services/userServices";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";
import { useRouter } from "expo-router";
import PurchaseForm from "../components/PurchaseForm/PurchaseForm";
import Spinner from "@/components/spinner";
import { styles } from "../app.style";

export default function Purchase() {
  const { getToken, isLoggedIn } = useContext(userContext);
  const [token, setToken] = useState(null);
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/home");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getToken().then((token) => setToken(token));
    getCart(token).then((data) => {
      setGames(data.games || []);
    });
  }, [token]);

  if (games === null) {
    return <Spinner />;
  }

  return (
    <View style={styles.container}>
      <CheckOut items={games} />
      <PurchaseForm items={games} token={token} />
    </View>
  );
}
