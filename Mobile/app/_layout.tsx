import { UserProvider } from "../context/userContext";
import { Stack } from "expo-router";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{ contentStyle: { backgroundColor: "#D9D9D9" } }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
      <Toast />
    </UserProvider>
  );
}
