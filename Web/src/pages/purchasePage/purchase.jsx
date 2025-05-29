import "./purchaseStyle.css";
import { ToastContainer } from "react-toastify";
import FormPurchase from "./FormPurchase";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";
import CheckOut from "../../../checkOut/checkOut";
import "./purchaseStyle.css";

const Purchase = ({ isLoggedIn }) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || { games: [] };
  const hasGames = storedCart.games && storedCart.games.length > 0;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.LOGIN);
    }

    if (!hasGames) {
      navigate(ROUTES.CART);
    }
  }, [isLoggedIn, hasGames, navigate]);

  return (
    <>
      <div className="container mt-4 ">
        <div className="justify-content-center row g-4">
          <div className="col-12 col-lg-7">
            {hasGames && <FormPurchase items={storedCart.games} />}
          </div>
          <div className="col-8 col-lg-4">
            <CheckOut items={storedCart.games} />
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Purchase;
