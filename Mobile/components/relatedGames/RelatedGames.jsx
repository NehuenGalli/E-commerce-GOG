import { FlatList, ImageBackground, Pressable, Text, View } from "react-native";
import { styles } from "./relatedGames.style";
import { useNavigateTo } from "../../hooks/useNavigateTo";

const RelatedGames = ({ relatedGames }) => {
  const { navigateToGame } = useNavigateTo();
  return (
    <>
      <Text style={styles.title}>Related Games</Text>
      <FlatList
        data={relatedGames}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigateToGame(item.id, item.name)}>
            <ImageBackground
              source={{ uri: item.mainImage }}
              style={styles.imageTextContainer}
            >
              <View style={styles.overlay} />
              <Text style={styles.name}>{item.name}</Text>
            </ImageBackground>
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default RelatedGames;
