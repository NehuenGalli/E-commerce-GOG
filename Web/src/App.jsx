import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES, API } from "./constants";
import Home from "./pages/home";
import TagGames from "./pages/tagGames";
import SearchGames from "./pages/searchGames";
import Library from "./pages/library";
import Login from "./pages/login";
import { useState, useEffect } from "react";
import NavBar from "./components/navBar/navBar";
import { useNavigate } from "react-router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem(API.TOKEN_KEY)
  );

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
