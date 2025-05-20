import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES, API } from "./constants";
import Home from "./pages/home";
import TagGames from "./pages/tagGames";
import SearchGames from "./pages/searchGames";
import Library from "./pages/library";
import Login from "./pages/login";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem(API.TOKEN_KEY)
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
        </Routes>
        <Route path={ROUTES.SEARCH} element={<SearchGames />} />
        <Route path={ROUTES.LIBRARY} element={<Library />} />
      </BrowserRouter>
    </>
  );
}

export default App;
