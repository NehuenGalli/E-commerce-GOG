import { Image, View } from "react-native";
import unrecommendedIcon from "../../assets/images/thumb-down.png";
import recommendedIcon from "../../assets/images/thumb-up.png";
import { styles } from "./gameCard.styles";

const IsRecommendedGame = ({ isRecommended }) => {
  return (
    <View style={styles.recommendedContainer}>
      {isRecommended ? (
        <Image source={recommendedIcon} style={styles.recommendedImage} />
      ) : (
        <Image source={unrecommendedIcon} style={styles.recommendedImage} />
      )}
    </View>
  );
};

export default IsRecommendedGame;
