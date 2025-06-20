
import { useContext, useEffect, useState } from "react";
import { userCurrent, getUserById, getReviewsById } from "../../services/userServices";
import UserHeader from "../../components/userHeader/userHeader";
import { View, FlatList, Text } from "react-native";
import { styles } from "../../app.style";
import GameCard from "../../components/gameCard/gameCard";
import { useLocalSearchParams } from "expo-router";

const User = () => {

    // const { logIn, isLoggedIn, getToken } = useContext(userContext);
    const { userId } = useLocalSearchParams();

//   const [userLogged, setUserLogged] = useState({
//     id: "",
//     email: "",
//     name: "",
//     image: "",
//     backgroundImage: "",
//     games: [],
//   });

  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });

  const [reviews, setReviews] = useState([]);


//   useEffect(() => {
//     getToken().then((token) =>
//       userCurrent(token)
//         .then((userInfo) => setUserLogged(userInfo))
//         .catch((error) => console.log(error))
//     );
//   }, []);

  useEffect(() => {
    getUserById(userId)
      .then((userInfo) => 
        setUserInfo(userInfo)
      )
      .catch((error) => console.log(error))
  }, []);

  useEffect(() => {
    getReviewsById(userId)
      .then((reviewsInfo) => 
        setReviews(reviewsInfo)
       )
      .catch((error) => console.log(error))
      
  }, []);

  const reviewsFormated = reviews.map((review) => ({
    id: review.id,
    name: review.game.name,
    mainImage: review.game.mainImage,
    text: review.text,
    isRecommended: review.isRecommended,
    gameId: review.game.id,
  }));

  

  return (
    <View style={styles.container}>
      <UserHeader user={userInfo} />
      <FlatList
            data={reviewsFormated}
            keyExtractor={(review) => review.id}
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
  );
};

export default User;
