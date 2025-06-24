import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080", // Gris de fondo
    padding: 16,
    borderRadius: 8,
 
  },
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  // Contenedor para crear el efecto de borde blanco en el avatar
  avatarContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFFFFF", // Borde exterior blanco
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24, // La mitad del tamaño para que sea un círculo perfecto
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E0E0E0", // Un blanco menos intenso, como en la imagen
  },
  // Contenedor para alinear la etiqueta 'Recommended' con los botones
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
    marginLeft: 16, // Espacio entre la etiqueta "Recommended" y los botones
    gap: 16, // Espacio entre los dos botones de pulgares
  },
  thumbButton: {
    // Puedes agregar padding aquí si quieres que el área táctil sea más grande
  },
  thumbIcon: {
    width: 32, // Tamaño ajustado para los íconos de pulgares
    height: 32,
    resizeMode: "contain",
  },
  thumbActive: {
    opacity: 1, // El ícono seleccionado es totalmente visible
  },
  thumbInactive: {
    opacity: 0.4, // El ícono no seleccionado está semitransparente
  },
  textarea: {
    backgroundColor: "#FFFFFF", // Fondo blanco para el input
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
    backgroundColor: "#8E44AD", // Color púrpura que coincide con la imagen
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#999999", // Color para el botón deshabilitado
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;