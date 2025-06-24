import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    card: {
      padding: 50,
      width:"100%",
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 16,
      elevation: 3,
    },
    currentUser: {
      borderColor: "#007AFF",
      borderWidth: 2,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    userInfo: {
      flexDirection: "row",
     
    },
    avatar: {
      width: 45,
      height: 45,
      borderRadius: 20,
      marginRight: 8,
    },
    userName: {
      fontWeight: "bold",
      fontSize: 16,
    },
    icon: {
      width: 24,
      height: 24,
    },
    content: {
      marginTop: 8,
    },
    reviewText: {
      fontSize: 14,
      color: "#333",
    },
  });
  export default styles;