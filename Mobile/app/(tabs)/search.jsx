import { useEffect, useState } from "react";
import { searchGames } from "../../services/searchServices";
import ListAllGames from "../../components/listAllGames/listAllGames";
import { View } from "react-native";
import { styles } from "../../app.style";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    searchGames(query, currentPage)
      .then((games) => setGames(games))
      .catch((error) => console.log(error));
  }, [query, currentPage]);

  return (
    <View style={styles.container}>
      <ListAllGames
        games={games.list}
        title="SEARCH GAME"
        setSearch={setQuery}
        input={query}
        currentPage={currentPage}
        setPage={setCurrentPage}
        amountOfPages={games.amountOfPages}
      />
    </View>
  );
};

export default SearchPage;
