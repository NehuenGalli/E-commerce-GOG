import {
    StyleSheet,
  } from "react-native";
const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: "#808080",
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
    gap: 16,
    marginHorizontal:16
  },
  cartTitle: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  bottomRow: {
    
    alignItems: "right",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
  },
  gamePrice: {
    fontSize: 32,
    color: "white",
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  cartButton: {
    backgroundColor: "#9acd32",
    paddingVertical: 15,
    paddingHorizontal: 153,
    borderRadius: 2,
  },
  cartButtonText: {
    fontSize: 24,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "black",
  },
});
export default styles;
