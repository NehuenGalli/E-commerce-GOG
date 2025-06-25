import { View, Text, Pressable, ImageBackground } from "react-native";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { styles } from "./gameCard.styles";

import IsRecommendedGame from "./isRecommendedGame";

const GameCard = ({ item }) => {
  const { navigateToGame } = useNavigateTo();

  return (
    <View style={styles.card}>
      <Pressable onPress={() => navigateToGame(item.id, item.name)}>
        <ImageBackground source={{ uri: item.mainImage }} style={styles.image}>
          {item.text && (
            <IsRecommendedGame isRecommended={item.isRecommended} />
          )}
        </ImageBackground>
      </Pressable>

      <View style={styles.textContainer}>
        <Text
          onPress={() => navigateToGame(item.id, item.name)}
          style={styles.title}
        >
          {item.name}
        </Text>
        <View style={styles.tag}>
          {item.tags ? (
            <>
              {item.tags.slice(0, 2).map((tag) => (
                <Text key={tag.id} style={styles.link}>
                  {tag.name}
                </Text>
              ))}
            </>
          ) : (
            <Text style={styles.textReview}> {item.text}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default GameCard;
