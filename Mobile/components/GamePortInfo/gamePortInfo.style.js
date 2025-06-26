import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: "100%",
    aspectRatio: 21 / 9,
    marginBottom: 16,
  },
  detailsContainer: {
    paddingBottom: 24,
    marginHorizontal: 16,
  },
  detailText: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
  },
  linkText: {
    color: "black",
    fontSize: 16,
    marginBottom: 8,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  tagsSection: {
    marginTop: 8,
  },
  tagsLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  tag: {
    marginRight: 4,
    marginBottom: 4,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  tagText: {
    color: "#333",
    fontSize: 14,
  },
  moreLink: {
    color: "#333",
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
