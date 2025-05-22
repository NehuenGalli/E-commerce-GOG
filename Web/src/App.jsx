import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES, API } from "./constants";
import TagGames from "./pages/tagGames";
import Login from "./pages/login";
import Home from "./pages/home/home";
import Tags from "./pages/tags/tags";
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
          <Route path={ROUTES.Tags} element={<Tag />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
