import { styles } from "./listAllGames.styles";
import { FlatList, Image, Keyboard, Pressable, Text, TextInput, View } from "react-native";
import { useNavigateTo } from "../../hooks/useNavigateTo";

import { useState } from "react";


const ListAllGames = ({ games, title, setSearch,currentPage,setPage }) => {

  const [inputText, setInputText] = useState(''); 
  const onSubmitSearch = () => {
  
    Keyboard.dismiss();
    setSearch(inputText);
    
  };
  const { navigateToGame } = useNavigateTo();
  return (
   
      <View style={styles.list}>
        
        <FlatList
          
          data={games}
          keyExtractor={(game) => game.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.noResults}>No se encontraron juegos</Text>
          }
          ListHeaderComponent={
         <>
          <Text style={styles.pageTitle}>{title} </Text>
          {
          
            setSearch && (


            <TextInput onSubmitEditing={onSubmitSearch} value={inputText} onChangeText={setInputText}placeholder="Buscar..." />
            
            )
        
          }
     </>
        }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Pressable onPress={() => navigateToGame(item.id, item.name)}>
                <Image source={{ uri: item.mainImage }} style={styles.image} />
              </Pressable>
              <View style={styles.textContainer}>
                <Text
                  onPress={() => navigateToGame(item.id, item.name)}
                  style={styles.title}
                >
                  {item.name}
                </Text>
                <View style={styles.tag}>
                  {item.tags.slice(0, 2).map((tag) => (
                    <Text key={tag.id} style={styles.link}>
                      {tag.name}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          )}
        />
      </View>

  );
};

export default ListAllGames;
