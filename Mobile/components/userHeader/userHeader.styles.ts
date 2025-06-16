import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: "black",
    borderWidth: 1,
  },

  userInfo: {
    justifyContent: "space-between",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  actions: {
    marginTop: 10,
  },

  buttonLogout: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#EDEDED",
    backgroundColor: "#6E1D72",
    paddingVertical: 5,
    paddingHorizontal: 83,
  },
});
