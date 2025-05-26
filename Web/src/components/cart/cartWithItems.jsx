import "./cartWithItems.css";
import { useNavigate } from 'react-router';
import { FaTrash } from "react-icons/fa";
import { ROUTES } from "../../constants";
import CheckOut from "../../../checkOut/checkOut";

const CartWithItems = ({ items, onRemove }) => {

    const navigate = useNavigate();

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
            <CheckOut items={items}>
                <button className="buy-cart-btn" onClick={() => navigate(ROUTES.PURCHASE)}>
                    Buy
                </button>
            </CheckOut>
        </div>
    );
}

export default CartWithItems; 