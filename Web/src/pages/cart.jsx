import EmptyCart from "../components/cart/emptyCart";
import CartWithItems from "../components/cart/CartWithItems";   
import NavBar from "../components/navBar/navBar";
import { getCart } from "../services/userService";
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import { removeGame } from "../services/gameServices";
import { showRemovedFromCartToast } from "../services/toastService";



const Cart = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    const [cart, setCart] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        const isAuth = !!token;
        setIsAuthenticated(isAuth);

        if (!isAuth) {
            navigate("/login");
        }

        getCart(token)
        .then((data) => {
            setCart(data);
        })
        .catch((error) => {
            setError(error.message);
        });
    }, []);

    const handleRemove = async (gameId) => {
        const token = localStorage.getItem("jwt");
        try {
            await removeGame(gameId, token);
            showRemovedFromCartToast();
        } catch (error) {
            setError(error.message);
        }
        const updatedCart = await getCart(token);
        setCart(updatedCart);
    }

    return (
        <>
            <NavBar isLoggedIn={isAuthenticated}/>
            {cart === null ? (
            <p>Loading...</p>
            ) : cart.games.length === 0 ? (
            <EmptyCart />
            ) : (
            <CartWithItems items={cart.games}  onRemove={handleRemove} />
            )}
        </>
    );
} 

export default Cart;