import "./purchaseStyle.css";
import { toast, ToastContainer } from "react-toastify";
import FormPurchase from "./FormPurchase";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";

const Purchase = ({isLoggedIn}) => {
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
  }, [isLoggedIn, hasGames ,navigate]);

  return (
    <>
      <div className="container d-lg-flex mt-4 justify-content-center justify-content-sm-center flex-column flex-lg-row">
        {hasGames && <FormPurchase items={storedCart.games} />}
      </div>

      <ToastContainer />
    </>
  );
};

export default Purchase;
