import Spinner from "@/components/spinner";
import { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { styles } from "../../app.style";
import GameCard from "../../components/gameCard/gameCard";
import Paginacion from "../../components/pagination/paginacion";
import { searchGames } from "../../services/searchServices";
import { stylesSearch } from "../../styles/search.style";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState({
    list: [],
    currentPage: 1,
    amountOfElements: 0,
    amountOfPages: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    searchGames(query, currentPage)
      .then((games) => setGames(games))
      .catch((error) =>
        Toast.show({
          type: "error",
          text1: "Error loading games",
          text2: error.message,
        })
      )
      .finally(() => setIsLoading(false));
  }, [query, currentPage]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
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
              games.list.length > 0 && (
                <Paginacion
                  currentPage={currentPage}
                  totalPages={games.amountOfPages}
                  onPageChange={setCurrentPage}
                />
              )
            }
            renderItem={({ item }) => <GameCard item={item}></GameCard>}
          />
        </View>
      )}
    </>
  );
};

export default SearchPage;
