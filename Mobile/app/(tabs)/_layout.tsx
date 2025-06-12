import { Tabs } from "expo-router";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { perfilIconStyle } from "../../app.style";
const TabLayout = () => {
  return (
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
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/1.jpg",
              }}
              style={perfilIconStyle(size, focused, color)}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
