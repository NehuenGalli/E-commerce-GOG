import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

import { addReview } from "../../services/gameServices";
import { userCurrent } from "../../services/userServices";
import CurrentReview from "./currentReview";
import ReviewCard from "./reviewCard";
import { userContext } from "../../context/userContext";
import styles from "./reviews.styles";

const Reviews = ({ game, isLoggedIn }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [reviews, setReviews] = useState(game.reviews || []);
  const [loading, setLoading] = useState(true);

  const { getToken } = useContext(userContext);

  
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        if (isLoggedIn) {
          const token = await getToken();
          //console.log(token) 
          const userData = await userCurrent(token);
          //console.log(userData) // ✅ Obtenemos el token del contexto
        
          setCurrentUser(userData);
        } else {
          setCurrentUser(null);
        }
        setReviews(game.reviews || []);
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Error al cargar las reviews";

        Toast.show({
          type: "error",
          text1: "Error",
          text2: errorMessage,
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [game, isLoggedIn]);

  const handleNewReview = async ({ text, isRecommended }) => {
    try {
      const token = await getToken(); // ✅ Necesitamos el token para agregar la review
      const updatedGame = await addReview(game.id, { text, isRecommended }, token);
      Toast.show({
        type: "success",
        text1: "Review añadida con éxito",
      });
      setReviews(updatedGame.reviews || []);
      return true;
    } catch (error) {
      console.log(error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "No se pudo agregar la review";

      Toast.show({
        type: "error",
        text1: "Error",
        text2: errorMessage,
      });
      return false;
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#666" />
        <Text style={styles.loadingText}>Cargando reviews...</Text>
      </View>
    );
  }

  const userReview = currentUser
    ? reviews.find((r) => r.user.id === currentUser.id)
    : null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>REVIEWS</Text>

      <View style={styles.userReviewContainer}>
        {userReview ? (
          <ReviewCard review={userReview} isCurrentUser={true} />
        ) : isLoggedIn && currentUser ? (
          <CurrentReview
            onSubmit={handleNewReview}
            currentUser={{ name: currentUser.name, image: currentUser.image }}
          />
        ) : (
          <View style={styles.bloquedReviewContainer}>
            <Text style={styles.bloquedReviewText}>
              Inicie sesión para dejar una review
            </Text>
            <TouchableOpacity
              style={styles.btnBloquedReview}
              onPress={() => router.push("/login")}
            >
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.reviewsGrid}>
        {reviews
          .filter((review) => !userReview || review.id !== userReview.id)
          .map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              isCurrentUser={false}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default Reviews;
