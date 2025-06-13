import { useEffect, useState } from "react";
import { searchGames } from "../../services/searchServices";
import { ActivityIndicator, FlatList, TextInput, View, Text, StyleSheet } from "react-native";
import ListAllGames from "@/components/listAllGames/listAllGames";

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState<any>({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    searchGames(query, currentPage)
      .then((games: any) => setGames(games))
      .catch((error: any) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [query, currentPage]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEARCH GAME</Text>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar..."
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>
      {isLoading && <ActivityIndicator size="large" color="#007AFF" />}
      {!isLoading && (
        <>
          {query === "" ? (
            <Text style={styles.noResults}>No se encontraron resultados</Text>
          ) : games.list.length === 0 ? (
            <Text style={styles.noResults}>No se encontraron resultados</Text>
          ) : (
            <ListAllGames games={games} title="SEARCH GAME" />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 10,
    width: '95%',
    height: '5%',
  },
  searchInput: {
    height: 40,
    textAlign: 'left',
  },

   noResults: {
    fontSize: 18,
    textAlign: 'center',
    margin: 'auto',
  },
});

export default SearchPage;