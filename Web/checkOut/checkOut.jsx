import "./checkOut.css";

const CheckOut = ({ items, children }) => {
  const subtotal = items.reduce((acc, game) => acc + game.price.amount, 0);
  const fees = subtotal * 0.01;
  const total = subtotal + fees;

  return (
    <div className="checkout-box">
      <h4>Checkout</h4>
      <div className="checkout-line">
        <span>Products ({items.length})</span>
        <span>$ {subtotal.toFixed(2)}</span>
      </div>
      <div className="checkout-line">
        <span>Fees 1%</span>
        <span>$ {fees.toFixed(2)}</span>
      </div>
      <div className="checkout-line total">
        <span><strong>Total</strong></span>
        <span><strong>$ {total.toFixed(2)}</strong></span>
      </div>
      {children && <div className="checkout-actions">{children}</div>}
    </div>
  );
};

export default CheckOut;