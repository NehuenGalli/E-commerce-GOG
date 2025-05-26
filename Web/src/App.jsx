import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES, API } from "./constants";
import Home from "./pages/home";
import TagGames from "./pages/tagGames";
import Login from "./pages/login";
import Cart from "./pages/cart";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("jwt")
  );
  const logIn = () => setIsLoggedIn(true);
  // const logOut = () => setIsLoggedIn(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<Home isLoggedIn={isLoggedIn} />}
          />
          <Route
            path={ROUTES.LOGIN}
            element={<Login logIn={logIn} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path={ROUTES.GAMES_BY_TAG}
            element={<TagGames isLoggedIn={isLoggedIn} />}
          />
          <Route
            path={ROUTES.CART}
            element={<Cart isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
