import {  useEffect, useState } from "react";
import { searchGames } from "../../services/searchServices";
import { View, Text, StyleSheet } from "react-native";
import ListAllGames from "@/components/listAllGames/listAllGames";
import Spinner from "@/components/spinner";


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
  }, [query,currentPage]);


  return (
    <>
      {isLoading && <Spinner/>}
      {!isLoading && (
        <>

         <ListAllGames games={games.list} title="SEARCH GAME" setSearch={setQuery} currentPage={currentPage} setPage={setCurrentPage}  />
         
        </>
      )}
    </>
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

 
});

export default SearchPage;