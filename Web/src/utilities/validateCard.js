export const validateCardData = ({ nameCard, numCard, cvv, expDate }) => {
  const cleanedNum = numCard.replace(/\s/g, "");

  if (!/^\d{16}$/.test(cleanedNum)) {
    return "Card number must contain exactly 16 digits (numbers only).";
  }

  if (!/^[a-zA-Z\s]+$/.test(nameCard)) {
    return "Cardholder name must contain only letters.";
  }

  if (!/^\d+$/.test(cvv)) {
    return "El CVV solo puede contener números.";
  }

  if (cvv.length < 3 || cvv.length > 4) {
    return "El CVV debe tener 3 o 4 dígitos.";
  }

  const [month, year] = expDate.split("/").map(Number);
  if (month < 1 || month > 12) {
    return "El mes de expiración debe estar entre 01 y 12.";
  }

  const currentDate = new Date();
  const inputDate = new Date(`20${year}`, month - 1, 1);
  const currentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  if (inputDate < currentMonth) {
    return "La tarjeta está vencida.";
  }

  return null;
};
