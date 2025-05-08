import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { HOME_URL, GAMES_BY_TAG_URL } from "./constants";
import Home from "./pages/home";
import TagGames from "./pages/tagGames";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={GAMES_BY_TAG_URL} element={<TagGames />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
