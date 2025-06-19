import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#808080",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#000",
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
  },
  form: {
    flexDirection: "column",
  },
  textarea: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    marginBottom: 15,
    minHeight: 100,
    textAlignVertical: "top",
    backgroundColor: "#cccccc",
  },
  recommendationText: {
    fontWeight: "500",
    color: "white",
    marginBottom: 5,
  },
  recommendationButtons: {
    flexDirection: "row",
    gap: 8, // si tu versión de RN no lo soporta, reemplazar por marginRight en los hijos
    marginBottom: 15,
  },
  thumbButton: {
    padding: 5,
    borderRadius: 4,
  },
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0.5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  submitButton: {
    backgroundColor: "#6B217F",
    paddingVertical: 10,
    borderRadius: 4,
    width: "30%",
    alignSelf: "center",
    marginTop: 15,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
  },
});
