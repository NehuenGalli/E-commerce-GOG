export const errorMessage = (error) =>
  error.response?.data?.error || "Failed to receive a response from the server";
