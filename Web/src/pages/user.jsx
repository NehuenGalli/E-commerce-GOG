import ListGames from "../components/listGames/listGames";
import { useEffect, useState } from "react";
import UserHeader from "../components/user/userHeader";
import { userCurrent } from "../services/userService";
import { toast, ToastContainer } from "react-toastify";
import { API, ROUTES } from "../constants";
import axios from "axios";
import { useParams } from "react-router";

const User = () => {
  const { userId } = useParams();

  const [userLogged, setUserLogged] = useState({
    id: "",
    email: "",
    name: "",
    image: "",
    backgroundImage: "",
    games: [],
  });

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
    userCurrent()
      .then((userInfo) => {
        setUserLogged(userInfo);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API.BASE_URL}${ROUTES.USERS}/${userId}`)
      .then((userInfo) => {
        setUserInfo(userInfo.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API.BASE_URL}${ROUTES.USER_REVIEWS}/${userId}`)
      .then((reviewsInfo) => {
        setReviews(reviewsInfo.data);
      })
      .catch((error) => {
        toast.error(error);
      });
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
    <>
      <UserHeader user={userInfo} idUserLogged={userLogged.id}></UserHeader>
      <ListGames games={reviewsFormated} title={"GAMES "} displayUser={true} />
      <ToastContainer />
    </>
  );
};

export default User;
