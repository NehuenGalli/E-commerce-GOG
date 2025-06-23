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

    setReview((s) => ({ ...s, submitting: true }));

    const success = await onSubmit({
      text: review.text,
      isRecommended: review.isRecommended,
    });

    if (success) {
      setReview({ text: "", isRecommended: true, submitting: false });
    } else {
      setReview((s) => ({ ...s, submitting: false }));
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.userHeader}>
        <Image source={{ uri: currentUser.image }} style={styles.avatar} />
        <Text style={styles.username}>{currentUser.name}</Text>
      </View>

      {/* Recommendation */}
      <Text style={styles.label}>Recommended</Text>
      <View style={styles.recommendationButtons}>
        <TouchableOpacity
          onPress={() => setReview((s) => ({ ...s, isRecommended: true }))}
          style={[
            styles.thumbButton,
            review.isRecommended ? styles.thumbActive : styles.thumbInactive,
          ]}
        >
          <Image source={recommendedIcon} style={styles.thumbIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setReview((s) => ({ ...s, isRecommended: false }))}
          style={[
            styles.thumbButton,
            !review.isRecommended ? styles.thumbActive : styles.thumbInactive,
          ]}
        >
          <Image source={unrecommendedIcon} style={styles.thumbIcon} />
        </TouchableOpacity>
      </View>

      {/* Review Text */}
      <Text style={styles.label}>Text</Text>
      <TextInput
        style={styles.textarea}
        multiline
        placeholder="Write your review..."
        placeholderTextColor="#444"
        value={review.text}
        onChangeText={(text) => setReview((s) => ({ ...s, text }))}
      />

      {/* Submit */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          (!review.text.trim() || review.submitting) && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        disabled={!review.text.trim() || review.submitting}
      >
        {review.submitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitText}>Add review</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CurrentReview;
