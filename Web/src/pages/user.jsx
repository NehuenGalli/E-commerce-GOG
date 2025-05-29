import ListGames from "../components/listGames/listGames";
import { useEffect, useState } from "react";
import UserHeader from "../components/user/userHeader";
import Spinner from "../components/spinner/Spinner";
import {
  userCurrent,
  getUserById,
  getReviewsById,
} from "../services/userService";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router";
import { ROUTES } from "../constants";
import { useNavigate } from "react-router";
import { errorMessage } from "../utilities/error_message";

const User = ({ isLoggedIn }) => {
  const { userId } = useParams();
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [isLoadingUserById, setIsLoadingUserById] = useState(true);
  //const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.LOGIN);
    }
  }, []);

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
  const [error, setError] = useState(null);

  useEffect(() => {
    userCurrent()
      .then((userLogged) => {
        setUserLogged(userLogged);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  useEffect(() => {
    getUserById(userId)
      .then((userInfo) => {
        setUserInfo(userInfo);
      })
      .catch((error) => {
        if ((error = errorMessage(error))) {
          setError(`Usuario no encontrado con id: ${userId}`);
        } else {
          toast.error(error);
        }
      })
      .finally(() => {
        setIsLoadingUserById(false);
      });
  }, []);

  useEffect(() => {
    getReviewsById(userId)
      .then((reviewsInfo) => {
        setReviews(reviewsInfo);
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoadingReviews(false);
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

  if (isLoadingReviews && isLoadingUserById) {
    return <Spinner />;
  }

  return (
    <>
      {userInfo.id ? (
        <>
          <UserHeader user={userInfo} idUserLogged={userLogged.id} />
          <ListGames
            games={reviewsFormated}
            title={"GAMES "}
            displayUser={true}
          />
          <ToastContainer />
        </>
      ) : (
        <div className="alert alert-danger d-flex justify-content-center fw-semibold fs-1">
          {error}
        </div>
      )}
    </>
  );
};

export default User;
