import { UserProvider } from "../context/userContext";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <UserProvider>
        <SafeAreaView style={{ flex: 1 }} edges={["left", "right", "top"]}>
          {/* <Stack initialRouteName="login"> */}
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="login" options={{ headerShown: false }} /> */}
          </Stack>
        </SafeAreaView>
      </UserProvider>
    </>
  );
}
