import { useState } from "react";
import { useNavigate } from "react-router";
import "./navBar.css";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      navigate(`/search/${encodeURIComponent(inputValue.trim())}`);
      //navigate(`/search?query=${encodeURIComponent(inputValue.trim())}`);
    }
  };

  return (
    <form className="d-flex align-items-center border-bottom border-white w-50 ">
      <i className="bi bi-search text-white "></i>
      <input
        className="form-control border-0 bg-transparent shadow-none py-0 ps-2 buscador"
        type="search"
        placeholder="SEARCH"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSearch}
      />
    </form>
  );
};

export default SearchForm;
