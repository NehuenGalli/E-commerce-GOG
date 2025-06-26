import { Image, Pressable, Text, View } from "react-native";
import recommendedIcon from "../../assets/images/recommendedIcon.png";
import unrecommendedIcon from "../../assets/images/unrecommendedIcon.png";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import styles from "./reviewCard.style";

const ReviewCard = ({ review, isCurrentUser }) => {
  const { navigateToUser } = useNavigateTo();

  return (
    <View style={[styles.card, isCurrentUser && styles.currentUser]}>
      <View style={styles.header}>
        <Pressable
          style={styles.userInfo}
          onPress={() => navigateToUser(review.user.id)}
        >
          <Image source={{ uri: review.user.image }} style={styles.avatar} />
          <Text style={styles.userName}>{review.user.name}</Text>
        </Pressable>
        <Image
          source={review.isRecommended ? recommendedIcon : unrecommendedIcon}
          style={[styles.icon, { width: 24, height: 24 }]}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewCard;
