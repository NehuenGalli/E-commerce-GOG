import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    alignSelf: "center",
  },

  card: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
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
  },

  inputText: {
    marginBottom: 6,
    minWidth: "100%",
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    color: "#212529",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 6,
  },

  textReview: {
    fontSize: 24,
    color: "#333",
  },

  recommendedContainer: {
    position: "absolute",
    bottom: 15,
    right: 15,
  },
  recommendedImage: {
    width: 50,
    height: 50,
  },
});
