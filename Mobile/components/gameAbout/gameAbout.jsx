import React from "react";
import { View, Text } from "react-native";

import styles from "./gameAbout.styles";
import { GameT } from "../../types/game";
type GameAboutProps = {
    game: GameT;
  };
  
  const GameAbout: React.FC<GameAboutProps> = ({ game }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        ABOUT THIS GAME
      </Text>

      <View style={styles.section}>
        <Text style={styles.text}>{game.description}</Text><Text style={styles.text}></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>
          REQUIREMENTS
        </Text>
        <Text style={styles.subtitle}>
          OS:</Text><Text style={styles.text}> {game.requirement.os.join(", ")}</Text>
        <Text style={styles.subtitle}>
          Processor: </Text><Text style={styles.text}> {game.requirement.processor}</Text>
        <Text style={styles.subtitle}>
          Memory: </Text><Text style={styles.text}> {game.requirement.memory} GB</Text>

        <Text style={styles.subtitle}>
          Graphics: </Text><Text style={styles.text}> {game.requirement.graphics.join(", ")} GB</Text>
      </View>
    </View>
  );
};

export default GameAbout;
