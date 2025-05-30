import "./cartWithItems.css";
import { useNavigate } from "react-router";
import { FaTrash } from "react-icons/fa";
import { ROUTES } from "../../constants";
import CheckOut from "../checkOut/checkOut";

const CartWithItems = ({ items, onRemove }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row g-3 mt-2">
          <div className="cart-with-items rounded p-4 col-12 col-lg-8">
            {items.map((game) => (
              <div key={game.id} className="card my-3 border-0">
                <div className="row align-items-center">
                  <img
                    className="col-12 col-md-6 "
                    src={game.mainImage}
                    alt={game.name}
                  />

                  <h3 className="col-12 col-md-3 text-center d-flex justify-content-center ">
                    {game.name}
                  </h3>
                  <div className="col-8 col-md-2 cart-price d-flex justify-content-center">
                    USD {game.price.amount.toFixed(2)}
                  </div>

                  <div className="col-2 col-md-1 d-flex justify-content-center">
                    <button
                      className="remove-item-btn"
                      onClick={() => onRemove(game.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-12 col-lg-4 d-flex justify-content-center align-self-start">
            <CheckOut items={items}>
              <button
                className="buy-cart-btn"
                onClick={() => {
                  navigate(ROUTES.PURCHASE);
                }}
              >
                Buy
              </button>
            </CheckOut>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartWithItems;
