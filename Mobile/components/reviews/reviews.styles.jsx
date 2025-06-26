import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const isSmallScreen = width <= 768;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#333",
    paddingBottom: 10,
    fontWeight: "bold",
  },
  userReviewContainer: {
    marginBottom: 12,
  },
  reviewsGrid: {
    flexDirection: isSmallScreen ? "column" : "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "space-between",
  },
  bloquedReviewContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#808080",
    borderRadius: 8,
  },
  bloquedReviewText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  btnBloquedReview: {
    backgroundColor: "#6B217F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "30%",
    borderRadius: 4,
    marginTop: 15,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
});

export default styles;
