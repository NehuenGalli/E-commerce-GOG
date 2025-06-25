import { StyleSheet } from "react-native";

export const perfilIconStyle = (size, focused, color) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  borderWidth: focused ? 2 : 0,
  borderColor: focused ? color : "transparent",
});

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    maxWidth: 550,
    marginHorizontal: "auto",
    width: "100%",
  },

  noResults: {
    marginVertical: "50%",
    alignSelf: "center",
    fontSize: 18,
  },

  pageTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
});
