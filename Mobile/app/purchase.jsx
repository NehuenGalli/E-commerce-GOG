import Spinner from "@/components/spinner";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "../app.style";
import CheckOut from "../components/checkOut/checkOut";
import PurchaseForm from "../components/PurchaseForm/PurchaseForm";
import { ROUTES_MOBILE } from "../constants";
import { userContext } from "../context/userContext";
import { getCart } from "../services/userServices";

export default function Purchase() {
  const { getToken, isLoggedIn } = useContext(userContext);
  const [token, setToken] = useState(null);
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace(ROUTES_MOBILE.HOME);
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
