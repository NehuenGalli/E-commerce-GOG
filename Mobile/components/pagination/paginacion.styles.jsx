import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    marginVertical: 16,
  },

  pageText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },

  iconFlipped: {
    transform: [{ scaleX: -1 }],
  },

  doubleBack: {
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconFirst: {
      marginRight: -15,
    },
  },
  doubleForward: {
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    iconSecond: {
      marginLeft: -15,
    },
  },
});
