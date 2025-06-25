import { useEffect, useState } from "react";
import { searchGames } from "../../services/searchServices";
import GameCard from "../../components/gameCard/gameCard";
import { View, FlatList, Text, TextInput } from "react-native";
import { styles } from "../../app.style";
import { stylesSearch } from "../../styles/search.style";
import Paginacion from "../../components/pagination/paginacion";

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
      <FlatList
        data={games.list}
        keyExtractor={(game) => game.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.noResults}>No games found</Text>
        }
        ListHeaderComponent={
          <>
            <Text style={styles.pageTitle}>SEARCH </Text>

            <TextInput
              style={stylesSearch.inputText}
              autoCapitalize="none"
              placeholder="Buscar..."
              onSubmitEditing={(e) => {
                setQuery(e.nativeEvent.text);
              }}
            />
          </>
        }
        ListFooterComponent={
          <Paginacion
            currentPage={currentPage}
            totalPages={games.amountOfPages}
            onPageChange={setCurrentPage}
          />
        }
        renderItem={({ item }) => <GameCard item={item}></GameCard>}
      />
    </View>
  );
};

export default SearchPage;
