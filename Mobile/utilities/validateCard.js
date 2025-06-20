export const validateCardData = ({ nameCard, numCard, cvv, expDate }) => {
  const cleanedNum = numCard.replace(/\s/g, "");

  if (!/^\d{16}$/.test(cleanedNum)) {
    return "El número de tarjeta debe tener exactamente 16 dígitos.";
  }

  if (!/^[a-zA-Z\s]+$/.test(nameCard)) {
    return "El nombre del titular solo puede contener letras.";
  }

  if (!/^\d+$/.test(cvv)) {
    return "El CVV solo puede contener números.";
  }

  if (cvv.length < 3 || cvv.length > 4) {
    return "El CVV debe tener 3 o 4 dígitos.";
  }

  if (!/^\d{2}\/\d{2}$/.test(expDate)) {
    return "La fecha debe tener el formato MM/YY.";
  }

  const [month, year] = expDate.split("/").map(Number);
  if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
    return "La fecha de expiración no es válida.";
  }

  const currentDate = new Date();
  const inputDate = new Date(`20${year}`, month - 1, 1);
  const currentMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  if (inputDate < currentMonth) {
    return "La tarjeta está vencida.";
  }

  return null;
};
