import "./purchaseStyle.css";
import { toast, ToastContainer } from "react-toastify";
import FormPurchase from "../../components/FormPurchase/FormPurchase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../constants";
import CheckOut from "../../components/checkOut/checkOut";
import "./purchaseStyle.css";
import { getCart } from "../../services/userService";
import { getToken } from "../../utilities/localstorageUtils";

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
        const token = getToken();
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

  if (loading) {
    return <div className="loading-spinner">Loading cart...</div>;
  }

  return (
    <>
      {cart && cart.games && cart.games.length > 0 && (
        <div className="container mt-4 ">
          <div className="justify-content-center row g-4">
            <div className="col-12 col-lg-7">
              <FormPurchase items={cart.games} />
            </div>
            <div className="col-8 col-lg-4">
              <CheckOut items={cart.games} />
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default Purchase;
