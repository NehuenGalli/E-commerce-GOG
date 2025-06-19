import { View, Text, Pressable, Image } from "react-native";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { styles } from "./gameCard.styles";

const GameCard = ({item}) => {
      const { navigateToGame } = useNavigateTo();

  return (
    
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
  )
}

export default GameCard;