import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    maxHeight: "80%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    fontSize: 18,
    color: "#999",
  },
  modalBody: {
    paddingBottom: 16,
  },
  modalTag: {
    marginBottom: 10,
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 6,
  },
  modalTagText: {
    fontSize: 16,
    color: "#333",
  },
});
