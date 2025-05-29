import "./checkOut.css";
import { calculatePrice } from "../../utilities/calculatePrice";

const CheckOut = ({ items, children }) => {
  const { subtotal, fees, total } = calculatePrice(items);

  return (
    <div className="checkout-box">
      <h4>Checkout</h4>
      <div className="checkout-line">
        <span>Products ({items.length})</span>
        <span>$ {subtotal}</span>
      </div>
      <div className="checkout-line">
        <span>Fees 1%</span>
        <span>$ {fees}</span>
      </div>
      <div className="checkout-line total">
        <span><strong>Total</strong></span>
        <span><strong>$ {total}</strong></span>
      </div>
      {children && <div className="checkout-actions">{children}</div>}
    </div>
  );
};

export default CheckOut;