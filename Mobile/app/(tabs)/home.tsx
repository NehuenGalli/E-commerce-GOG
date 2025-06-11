import { View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        className="bg-red-600"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Home" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
