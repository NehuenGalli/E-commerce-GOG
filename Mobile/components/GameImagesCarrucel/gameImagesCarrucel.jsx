import React, { useState } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";

import styles from "./gameImagesCarrucel.styles";

const GameImagesCarrucel = ({ game }) => {
  const [currentImage, setCurrentImage] = useState(game.multimedia[0]?.url);

  return (
    <View style={styles.container}>
     

      {/* Galeria de imágenes en forma vertical en dos filas */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.imageList}>
        <View style={styles.grid}>
          {game.multimedia.map((image, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setCurrentImage(image.url)}
              style={styles.imageWrapper}
              activeOpacity={0.7}
            >
              <Image
                source={{ uri: image.url }}
                style={styles.thumbnail}
                resizeMode='cover'
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default GameImagesCarrucel;
