import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pags/home";
import TagGames from "./pags/TagGames";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags/:tagId" element={<TagGames />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
