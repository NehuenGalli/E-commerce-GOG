import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginBottom: 20,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  imageTextContainer: {
    width: 200,
    aspectRatio: 2 / 3,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 18,
  },

  name: {
    color: "white",
    fontSize: 20,
    fontbold: "bold",
    fontWeight: "bold",
    textAlign: "center",
    uppercase: true,
  },
});
