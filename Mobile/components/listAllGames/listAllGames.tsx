import { styles } from "./listAllGames.styles";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useNavigateTo } from "../../hooks/useNavigateTo";


const ListAllGames = ({ games, title }: any) => {
  const { navigateToGame } = useNavigateTo();
  return (
    <>
      <FlatList
        data={games.list}
        keyExtractor={(game) => game.id}
        ListHeaderComponent={<Text style={styles.pageTitle}>{title}</Text>}
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
                {item.tags.slice(0, 2).map((tag: any) => (
                  <Text key={tag.id} style={styles.link}>
                    {tag.name}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default ListAllGames;
