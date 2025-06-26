import { Text, View } from "react-native";
import styles from "./gameAbout.styles";

const GameAbout = ({ game }) => {
  return (
    <View>
      <Text style={styles.title}>ABOUT THIS GAME</Text>
      <View style={styles.section}>
        <Text style={styles.text}>{game.description}</Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>REQUIREMENTS</Text>
        <Text style={styles.subtitle}>OS:</Text>
        <Text style={styles.text}>{game.requirement.os.join(", ")}</Text>
        <Text style={styles.subtitle}>Processor: </Text>
        <Text style={styles.text}>{game.requirement.processor}</Text>
        <Text style={styles.subtitle}>Memory: </Text>
        <Text style={styles.text}>{game.requirement.memory} GB</Text>
        <Text style={styles.subtitle}>Graphics: </Text>
        <Text style={styles.text}>
          {Array.isArray(game.requirement.graphics)
            ? game.requirement.graphics.join(", ")
            : game.requirement.graphics}
        </Text>
      </View>
    </View>
  );
};

export default GameAbout;
