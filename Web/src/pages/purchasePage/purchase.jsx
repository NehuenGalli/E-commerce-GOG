import "./purchaseStyle.css";
import { toast, ToastContainer } from "react-toastify";
import FormPurchase from "./FormPurchase";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";
import { getCart } from "../../services/userService";
import { API } from "../../constants";

const Purchase = ({ isLoggedIn }) => {

  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.LOGIN);
    }

    const fetchCart = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem(API.TOKEN_KEY);
        const cartData = await getCart(token);
        setCart(cartData);

        if (!cartData.games || cartData.games.length === 0) {
          toast.info("Your cart is empty");
          navigate(ROUTES.CART);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [isLoggedIn, navigate]);

  console.log("Cart data:", cart);
  if (loading) {
    return <div className="loading-spinner">Loading cart...</div>;
  }

  return (
    <>
      <div className="container d-lg-flex mt-4 justify-content-center justify-content-sm-center flex-column flex-lg-row">
        {cart && cart.games && cart.games.length > 0 && <FormPurchase items={cart.games} />}
      </div>

      <ToastContainer />
    </>
  );
};

export default Purchase;
