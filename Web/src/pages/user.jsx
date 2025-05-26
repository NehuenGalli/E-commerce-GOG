import ListGames from "../components/listGames/listGames";
import { useEffect, useState } from "react";
import UserHeader from "../components/user/userHeader";
import { userCurrent } from "../services/userService";
import { toast, ToastContainer } from "react-toastify";
import { API, ROUTES } from "../constants";
import axios from "axios";

const User = ({ logOut, isLoggedIn }) => {
  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    userCurrent()
      .then((userInfo) => {
        setUserLogged(userInfo);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  useEffect(() => {
    if (!userLogged.id) return;
    axios
      .get(`${API.BASE_URL}${ROUTES.USER_REVIEWS}/${userLogged.id}`)
      .then((reviewsInfo) => {
        setReviews(reviewsInfo.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, [userLogged.id]);

  const reviewsFormated = reviews.map((review) => ({
    id: review.id,
    name: review.game.name,
    mainImage: review.game.mainImage,
    text: review.text,
    isRecommended: review.isRecommended,
  }));

  console.log(reviewsFormated);
  return (
    <>
      <UserHeader user={userLogged}></UserHeader>
      <ListGames games={reviewsFormated} title={"GAMES "} displayUser={true} />
      <ToastContainer />
    </>
  );
};

export default User;
