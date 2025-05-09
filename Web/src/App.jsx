import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ROUTES } from "./constants";
import Home from "./pages/home";
import TagGames from "./pages/tagGames";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GAMES_BY_TAG} element={<TagGames />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
