import {
  AntDesign,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TabLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right", "top"]}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#6E1D72",
          tabBarShowLabel: false,
          headerShown: false,
          sceneStyle: {
            backgroundColor: "#D9D9D9",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="search" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            tabBarIcon: ({ size, focused, color }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabLayout;
