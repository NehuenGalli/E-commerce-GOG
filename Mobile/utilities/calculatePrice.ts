export const calculatePrice = (items: any[]) => {
  const subtotal = items.reduce((sum, item) => sum + item.price.amount, 0);
  const fees = subtotal * 0.01;
  const total = subtotal + fees;

  return {
    fees: fees.toFixed(2),
    total: total.toFixed(2),
  };
};
