export const errorMessage = (error) =>
  error.response?.data?.error || "No se recibio respuesta del servidor";

export const notFoundGames_message = "Not found games";
