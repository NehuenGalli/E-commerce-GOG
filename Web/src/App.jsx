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
import User from "./pages/user";

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
          <Route path={ROUTES.TAGS} element={<Tags />} />
          <Route path={ROUTES.USER} element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
