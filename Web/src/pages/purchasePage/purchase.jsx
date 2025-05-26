import { useEffect, useState } from "react";
import "./purchaseStyle.css";
import { getCart } from "../../services/purchaseService";
import { toast, ToastContainer } from "react-toastify";
import FormPurchase from "./FormPurchase";

const Purchase = () => {
  const [cart, setCart] = useState({
    games: [],
    user: { id: "", name: "", image: "" },
  });

  useEffect(() => {
    getCart()
      .then((res) => {
        setCart(res);
        console.log(res);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  return (
    <>
      <div className="container d-lg-flex mt-4 justify-content-center justify-content-sm-center flex-column flex-lg-row">
        <FormPurchase />
      </div>
      <ToastContainer />
    </>
  );
};

export default Purchase;
