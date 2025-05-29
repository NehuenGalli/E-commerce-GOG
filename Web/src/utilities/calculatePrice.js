export const calculatePrice = (items) => {
  const subtotal = items.reduce((acc, game) => acc + game.price.amount, 0);
  const fees = subtotal * 0.01;
  const total = subtotal + fees;

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    fees: parseFloat(fees.toFixed(2)),
    total: parseFloat(total.toFixed(2)),
  };
};