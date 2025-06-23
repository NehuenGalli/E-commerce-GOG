import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import recommendedIcon from "../../assets/images/recommendedIcon.png";
import unrecommendedIcon from "../../assets/images/unrecommendedIcon.png";
import styles from "./reviewCard.style";




const ReviewCard = ({ review, isCurrentUser }) => {
  const router = useRouter();


  return (
    <View style={[styles.card, isCurrentUser && styles.currentUser]}>
      <View style={styles.header}>
        <TouchableOpacity  style={styles.userInfo}>
          <Image source={{ uri: review.user.image }} style={styles.avatar} />
          <Text style={styles.userName}>{review.user.name}</Text>
        </TouchableOpacity>
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
