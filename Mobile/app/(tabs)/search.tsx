import { useEffect, useState } from "react";
import { searchGames } from "../../services/searchServices";
import { ActivityIndicator, FlatList, TextInput, View } from "react-native";
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
    searchGames(query,currentPage)
      .then((games: any) => setGames(games))
      .catch((error: any) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [query,currentPage]);


return (
  
    <>
     <View >
      <TextInput
        placeholder="Buscar..."
        value={query}
        onChangeText={setQuery}
        
      />

    </View>

      {isLoading && <ActivityIndicator size="large" color="#007AFF" />}
      {!isLoading && (
        <>
        
          <ListAllGames games={games} title="SEARCH GAME" />
        </>
      )}
    </>
  );
};

export default SearchPage;
