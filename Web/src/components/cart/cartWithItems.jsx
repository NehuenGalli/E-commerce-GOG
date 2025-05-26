import "./cartWithItems.css"; 
import { useNavigate } from 'react-router';
import { FaTrash } from "react-icons/fa";

const CartWithItems = ({items, onRemove}) => {

    const navigate = useNavigate();
    const subtotal = items.reduce((acc, game) => acc + game.price.amount, 0);
    const fees = subtotal * 0.01;
    const total = subtotal + fees;

    return (
    <div className="cart-items-container">
            <div className="cart-with-items">
                <div className="items-list">
                    {items.map((game) => (
                    <div key={game.id} className="cart-item">
                        <img src={game.mainImage} alt={game.name} />
                        <div className="game-info">
                            <h3>{game.name}</h3>
                            <div className="cart-price">
                                USD {game.price.amount.toFixed(2)}
                            </div>
                        </div>
                        <button className="remove-item-btn" onClick={() => onRemove(game.id)}>
                            <FaTrash />
                        </button>
                    </div>
                    ))}
                </div>
            </div>
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
                <button className="buy-cart-btn" onClick={() => navigate("/purchase")}>
                    Buy
                </button>
            </div>
        </div>
    );
}

export default CartWithItems; 