import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import styles from "./currentReview.style";

//import recommendedIcon from "../../../assets/images/assets/recommendedIcon.png";
//import unrecommendedIcon from "../../../assets/images/assets/unrecommendedIcon.png";

type CurrentReviewProps = {
  onSubmit: (review: { text: string; isRecommended: boolean }) => Promise<boolean>;
  currentUser: {
    name: string;
    image: string;
  };
};

const CurrentReview: React.FC<CurrentReviewProps> = ({ onSubmit, currentUser }) => {
  const [review, setReview] = useState({
    text: "",
    isRecommended: true,
    submitting: false,
  });

  const handleSubmit = async () => {
    if (!review.text.trim()) return;

    setReview((state) => ({ ...state, submitting: true }));

    const success = await onSubmit({
      text: review.text,
      isRecommended: review.isRecommended,
    });

    if (success) {
      setReview({ text: "", isRecommended: true, submitting: false });
    } else {
      setReview((state) => ({ ...state, submitting: false }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <Image source={{ uri: currentUser.image }} style={styles.avatar} />
        <Text style={styles.username}>{currentUser.name}</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.recommendationText}>Recommended</Text>
        <View style={styles.recommendationButtons}>
          <TouchableOpacity
            style={[
              styles.thumbButton,
              review.isRecommended ? styles.active : styles.inactive,
            ]}
            onPress={() =>
              setReview((state) => ({ ...state, isRecommended: true }))
            }
          >
            {/*<Image source={recommendedIcon} style={styles.icon} />*/}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.thumbButton,
              !review.isRecommended ? styles.active : styles.inactive,
            ]}
            onPress={() =>
              setReview((state) => ({ ...state, isRecommended: false }))
            }
          >
            {/*<Image source={unrecommendedIcon} style={styles.icon} />*/}
          </TouchableOpacity>
        </View>

        <TextInput
          value={review.text}
          onChangeText={(text) =>
            setReview((state) => ({ ...state, text }))
          }
          placeholder="Write your review..."
          multiline
          style={styles.textarea}
        />

        <TouchableOpacity
          style={styles.submitButton}
          disabled={review.submitting || !review.text.trim()}
          onPress={handleSubmit}
        >
          {review.submitting ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.submitButtonText}>Add review</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurrentReview;
