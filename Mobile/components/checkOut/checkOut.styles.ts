import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkoutBox: {
    width: "100%",
  },
  checkoutLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  checkoutText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 300,
  },
  totalText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 400,
  },
  checkoutContainer: {
    marginVertical: 20,
    backgroundColor: "#7f7f7f",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});
