import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES } from "./constants";
import Home from "./pages/home";
import TagGames from "./pages/tagGames";
import SearchGames from "./pages/searchGames";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GAMES_BY_TAG} element={<TagGames />} />

        <Route path={ROUTES.SEARCH} element={<SearchGames />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
