import { useState } from "react";
import { useNavigate } from "react-router";

const SearchForm = ({ routeSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    //&& query.trim() !== ""
    e.preventDefault();
    navigate(`${routeSearch}?q=${query}`);

    // navigate(`${routeSearch}?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      className="d-flex align-items-center border-bottom border-white w-50 "
      onSubmit={handleSearch}
    >
      <i className="bi bi-search text-white "></i>
      <input
        className="form-control border-0 bg-transparent shadow-none py-0 ps-2 buscador"
        type="search"
        placeholder="SEARCH"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="d-none" />
    </form>
  );
};

export default SearchForm;
