import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080",
    padding: 16,
    borderRadius: 8,
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E0E0E0",
  },

  recommendationSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "#E0E0E0",
    fontWeight: "500",
  },
  recommendationButtons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    gap: 16,
  },
  thumbButton: {},
  thumbIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
  },
  thumbActive: {
    opacity: 1,
  },
  thumbInactive: {
    opacity: 0.4,
  },
  textarea: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    minHeight: 80,
    borderRadius: 8,
    padding: 12,
    textAlignVertical: "top",
    fontSize: 14,
    color: "#000",
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: "#8E44AD",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#999999",
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
