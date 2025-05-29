import "./emptyCart.css";
import { useNavigate } from 'react-router';

const EmptyCart = () => {
    
    const navigate = useNavigate();
    
    return (
        <div className="empty-cart-container">
            <div className="empty-cart-box">
                <div className="empty-cart-icon">
                    <img src="emptyCart.svg" alt="empty cart" className="empty-cart-image" />
                </div>
                <div className="empty-cart-text">
                    Start by adding a game!
                </div>
                <button className="empty-cart-btn" onClick={() => navigate("/")}>
                    Add games
                </button>
            </div>
            <div className="empty-cart-total">
                Here you will see your cart total amount
            </div>
        </div>
    );
};

export default EmptyCart;