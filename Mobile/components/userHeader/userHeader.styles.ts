import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  actions: {
    marginLeft: 20,
  },

  buttonLogout: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
});
