import "./purchaseStyle.css";
import { ToastContainer } from "react-toastify";
import FormPurchase from "./FormPurchase";

const Purchase = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || { games: [] };
  console.log({ storedCart });
  return (
    <>
      <div className="container d-lg-flex mt-4 justify-content-center justify-content-sm-center flex-column flex-lg-row">
        <FormPurchase items={storedCart.games} />
      </div>

      <ToastContainer />
    </>
  );
};

export default Purchase;
