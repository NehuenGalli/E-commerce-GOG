import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="home"
          options={{ headerShown: false, title: "Home" }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
