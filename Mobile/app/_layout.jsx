import { Stack } from "expo-router";
import Toast from "react-native-toast-message";
import { CartProvider } from "../context/cartContext";
import { UserProvider } from "../context/userContext";

export default function RootLayout() {
  return (
    <UserProvider>
      <CartProvider>
        <Stack
          initialRouteName="(tabs)"
          screenOptions={{ contentStyle: { backgroundColor: "#D9D9D9" } }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
        </Stack>
        <Toast />
      </CartProvider>
    </UserProvider>
  );
}
