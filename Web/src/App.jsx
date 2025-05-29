import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES, API } from "./constants";
import { useState } from "react";
import TagGames from "./pages/tagGames";
import SearchGames from "./pages/searchGames";
import Library from "./pages/library";
import Login from "./pages/login";
import Home from "./pages/home/home";
import Tags from "./pages/tags/tags";
import NavBar from "./components/navBar/navBar";
import Cart from "./pages/cart";
import User from "./pages/user";
import Purchase from "./pages/purchasePage/purchase";
import Game from "./pages/game";
import Register from "./pages/register";
import { getToken } from "./utilities/localstorageUtils";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  const logOut = () => setIsLoggedIn(false);
  const logIn = () => setIsLoggedIn(true);

  return (
    <>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login logIn={logIn} />} />
          <Route path={ROUTES.GAMES_BY_TAG} element={<TagGames />} />
          <Route path={ROUTES.SEARCH} element={<SearchGames />} />
          <Route path={ROUTES.LIBRARY} element={<Library logOut={logOut} />} />
          <Route path={ROUTES.TAGS} element={<Tags />} />
          <Route path={ROUTES.USER_BY_ID} element={<User />} />
          <Route
            path={ROUTES.GAME_DETAIL}
            element={<Game isLoggedIn={isLoggedIn} />}
          />
          <Route path={ROUTES.REGISTER} element={<Register />} />
          <Route path={ROUTES.CART} element={<Cart />} />
          <Route path={ROUTES.USER} element={<User />} />
          <Route
            path={ROUTES.PURCHASE}
            element={<Purchase isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
