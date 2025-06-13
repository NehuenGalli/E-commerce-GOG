import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    maxWidth: 550,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginBottom: 8,
  },

  image: {
    width: "100%",
    aspectRatio: 3 / 2,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },

  textContainer: {
    marginBottom: 8,
    marginHorizontal: 8,
  },

  tag: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  link: {
    textDecorationLine: "underline",
  },

  pageTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    marginHorizontal: 16,
  },
});
