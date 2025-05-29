export const errorMessage = (error) =>
  error.response?.data?.error || "No se recibio respuesta del servidor";

export const notFoundGames_message = "Not found games";
export const fieldsCannotBeEmpty_message = "Fields cannot be empty";
export const mustBeLoggedIn_message = "You must be logged in to add a game to the cart";
