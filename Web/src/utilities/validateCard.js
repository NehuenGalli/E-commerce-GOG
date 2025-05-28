export const validateCardData = ({ nameCard, numCard, cvv }) => {
  const cleanedNum = numCard.replace(/\s/g, "");

  if (!/^\d{16}$/.test(cleanedNum)) {
    return "Card number must contain exactly 16 digits (numbers only).";
  }

  if (!/^[a-zA-Z\s]+$/.test(nameCard)) {
    return "Cardholder name must contain only letters.";
  }

  if (!/^\d{3,4}$/.test(cvv)) {
    return "CVV must be 3 or 4 digits.";
  }

  // Si todo está bien
  return null;
};
