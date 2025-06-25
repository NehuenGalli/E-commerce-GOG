import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  userHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,


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
    marginRight: 20,
    marginLeft: 25,
    
    
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
    paddingVertical: 6,
    width: 250,
    borderRadius: 3,
    textAlign: "center",
  },

  buttonRemoveFriend: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#EDEDED",
    backgroundColor: "#A50A1A",
    paddingVertical: 6,
    width: 250,
    borderRadius: 3,
    textAlign: "center",
  },
  
});
