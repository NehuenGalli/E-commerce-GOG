import {
    StyleSheet,
  } from "react-native";
  const styles = StyleSheet.create({
    cartContainer: {
      backgroundColor: "#808080",
      padding: 16,
      borderRadius: 8,
      marginVertical: 16,
      marginHorizontal: 16,
      gap: 16, // espacio entre el bloque superior y el botón
    },
    topRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    cartTitle: {
      fontSize: 32,
      color: "white",
      fontWeight: "bold",
      fontFamily: "sans-serif",
    },
    gamePrice: {
      fontSize: 32,
      color: "white",
      fontWeight: "bold",
      fontFamily: "sans-serif",
    },
    cartButton: {
      backgroundColor: "#9acd32",
      paddingVertical: 15,
      borderRadius: 2,
      width: "100%",
    },
    cartButtonText: {
      fontSize: 24,
      fontFamily: "sans-serif",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
    },
  });
  
export default styles;
