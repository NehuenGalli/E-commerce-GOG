// import Paginacion from "../components/pagination/paginacion";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { API_URL } from "../constants";
// import axios from "axios";

// const TagGames = () => {
//   const { tagId } = useParams();
//   const [games, setgames] = useState({
//     list: [],
//     currentPage: 1,
//     amountOfElements: 0,
//     amountOfPages: 0,
//   });
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     axios
//       .get(`${API_URL}/tags/${tagId}?page=${currentPage}`)
//       .then((response) => setgames(response.data));
//   }, [tagId, currentPage]);
//   const primerPagina = () => setCurrentPage(1);
//   const anteriorPagina = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
//   const siguientePagina = () =>
//     setCurrentPage((prev) => Math.min(prev + 1, games.amountOfPages));
//   const ultimaPagina = () => setCurrentPage(games.amountOfPages);
//   return (
//     <>
//       <Paginacion />
//       <listGames games={games.list} />
//     </>
//   );
// };

// export default TagGames;
