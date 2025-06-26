import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import styles from "./gameImagesCarrucel.styles";

const GameImagesCarrucel = ({ game }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.grid}>
        {game.multimedia.map((image, i) => (
          <TouchableOpacity
            key={i}
            style={styles.imageWrapper}
            activeOpacity={0.7}
          >
            <Image source={{ uri: image.url }} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default GameImagesCarrucel;
