import { useState, useEffect, use } from "react";
import { addReview } from "../../services/gameServices";
import { userCurrent } from "../../services/userService";
import CurrentReview from "./currentReviews";
import ReviewCard from "./reviewsCard";
import { ROUTES } from "../../constants";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { getToken } from "../../utilities/localstorageUtils";
import { success_addReview_message } from "../../utilities/success_message";
import "./reviews.css";

const Reviews = ({ game, isLoggedIn }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userGames, setUserGames] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const userData = isLoggedIn ? await userCurrent() : null;
        setCurrentUser(userData);
        setUserGames(userData?.games || []);
        setReviews(game.reviews || []);
      } catch (error) {
        toast.error(error.mensaje);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [game, isLoggedIn]);

  const handleNewReview = async (reviewData) => {
    try {
      const updatedGame = await addReview(game.id, reviewData, token);

      toast.success(success_addReview_message);
      setReviews(updatedGame.reviews || []);
    } catch (error) {
      toast.error(error);
    }
  };

  if (loading) return <div className="loading-spinner">Loading reviews...</div>;

  const userReview = currentUser
    ? reviews.find((r) => r.user.id === currentUser.id)
    : null;

  const userHasGame = isLoggedIn && userGames.some((userGame) => userGame.id === game.id);

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">REVIEWS</h2>

      <div className="user-review-container">
        {userReview ? (
          <ReviewCard review={userReview} isCurrentUser />
        ) : isLoggedIn && !userHasGame ? (
          <div className="bloqued-review-container">
            <p className="bloqued-review-text">
              Compre el juego para dejar una review
            </p>
          </div>
        ) : isLoggedIn ? (
          <CurrentReview onSubmit={handleNewReview} currentUser={currentUser} />
        ) : (
          <div className="bloqued-review-container">
            <p className="bloqued-review-text">
              Inicie sesión para dejar una review
            </p>
            <button
              className="btn-bloqued-review"
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              Login
            </button>
          </div>
        )}
      </div>

      <div className="reviews-grid">
        {reviews
          .filter((review) => !userReview || review.id !== userReview.id)
          .map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default Reviews;
