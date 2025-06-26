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
import recommendedIcon from "../../assets/images/recommendedIcon.png";
import unrecommendedIcon from "../../assets/images/unrecommendedIcon.png";

const CurrentReview = ({ onSubmit, currentUser }) => {
  const [review, setReview] = useState({
    text: "",
    isRecommended: true,
    submitting: false,
  });

  const handleSubmit = async () => {
    if (!review.text.trim()) return;

    setReview((prev) => ({ ...prev, submitting: true }));

    try {
      const success = await onSubmit({
        text: review.text,
        isRecommended: review.isRecommended,
      });

      if (success) {
        setReview({
          text: "",
          isRecommended: true,
          submitting: false,
        });
      } else {
        setReview((prev) => ({ ...prev, submitting: false }));
      }
    } catch (error) {
      console.error("Error submitting review12:", error);
      setReview((prev) => ({ ...prev, submitting: false }));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.userHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: currentUser.image }}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.username}>{currentUser.name}</Text>
      </View>

      <View style={styles.recommendationSection}>
        <Text style={styles.label}>Recommended</Text>
        <View style={styles.recommendationButtons}>
          <TouchableOpacity
            onPress={() =>
              setReview((prev) => ({ ...prev, isRecommended: true }))
            }
            style={[
              styles.thumbButton,
              review.isRecommended ? styles.thumbActive : styles.thumbInactive,
            ]}
          >
            <Image source={recommendedIcon} style={styles.thumbIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setReview((prev) => ({ ...prev, isRecommended: false }))
            }
            style={[
              styles.thumbButton,
              !review.isRecommended ? styles.thumbActive : styles.thumbInactive,
            ]}
          >
            <Image source={unrecommendedIcon} style={styles.thumbIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.label}>Text</Text>
      <TextInput
        style={styles.textarea}
        multiline
        placeholder="Write your review..."
        placeholderTextColor="#A9A9A9"
        value={review.text}
        onChangeText={(text) => setReview((prev) => ({ ...prev, text }))}
        editable={!review.submitting}
      />

      <TouchableOpacity
        style={[
          styles.submitButton,
          (!review.text.trim() || review.submitting) && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        disabled={!review.text.trim() || review.submitting}
        activeOpacity={0.7}
      >
        {review.submitting ? (
          <ActivityIndicator color="#fff" size="small" />
        ) : (
          <Text style={styles.submitText}>Add review</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CurrentReview;
