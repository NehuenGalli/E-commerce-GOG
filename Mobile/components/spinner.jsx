import { View, ActivityIndicator } from "react-native";

const Spinner = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

export default Spinner;
