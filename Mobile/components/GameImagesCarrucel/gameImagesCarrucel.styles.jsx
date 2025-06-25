import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  mainImageContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 10,
  },
  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imageList: {
    paddingVertical: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "48%",
    marginBottom: 10,
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
});

export default styles;
