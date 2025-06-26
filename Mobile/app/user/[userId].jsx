
import {  useEffect, useState } from "react";
import {  getUserById, getReviewsById } from "../../services/userServices";
import UserHeader from "../../components/userHeader/userHeader";
import { View, FlatList, Text } from "react-native";
import { styles } from "../../app.style";
import GameCard from "../../components/gameCard/gameCard";
import { useLocalSearchParams, Stack } from "expo-router";
import Toast from "react-native-toast-message";
import Spinner from "@/components/spinner";



const User = () => {

   
  const { userId } = useLocalSearchParams();

  const [isLoading, setIsLoading] = useState(true);

  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });

  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    getUserById(userId)
      .then((userInfo) => 
        setUserInfo(userInfo)
      )
      .catch((error) =>  Toast.show({
                type: "error",
                text1: "Error loading user info",
                text2: error.message
              }))
      .finally(() => setIsLoading(false));  
  }, []);

  useEffect(() => {
    getReviewsById(userId)
      .then((reviewsInfo) => 
        setReviews(reviewsInfo)
       )
      .catch((error) =>  Toast.show({
                type: "error",
                text1: "Error loading user reviews",
                text2: error.message
              }))
      .finally(() => setIsLoading(false));      
  }, []);

  const reviewsFormated = reviews.map((review) => ({
    reviewId: review.id,
    name: review.game.name,
    mainImage: review.game.mainImage,
    text: review.text,
    isRecommended: review.isRecommended,
    id: review.game.id,
  }));


  return (
    <>
     <Stack.Screen options={{ title: userInfo.name}} />

    {isLoading && <Spinner />}
      {!isLoading && (
   
    <View style={styles.container}>
      <UserHeader user={userInfo} />
      <FlatList
            data={reviewsFormated}
            keyExtractor={(review) => review.reviewId}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={<Text style={styles.noResults}>No reviews found</Text>}
            ListHeaderComponent={
              <>
              
                <Text style={styles.pageTitle}>REVIEWS </Text>

              </>
            }
            renderItem={({ item }) => (
              
              <GameCard item={item}></GameCard>
             
            )}
        /> 
    </View>
        )}
    </>
  );
};

export default User;
