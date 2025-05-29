import { useState, useEffect } from 'react';
import { addReview } from '../../services/gameServices';
import { userCurrent } from '../../services/userService';
import CurrentReview from './currentReviews';
import ReviewCard from './reviewsCard';
import { API, ROUTES } from '../../constants';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import './reviewss.css';

const Reviewss = ({ game, isLoggedIn }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem(API.TOKEN_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const userData = isLoggedIn ? await userCurrent() : null;
        setCurrentUser(userData);
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

      toast.success("Review submitted successfully");
      setReviews(updatedGame.reviews || []);
    } catch (error) {
      toast.error("Error adding review");
    }
  };

  if (loading) return <div className="loading-spinner">Loading reviews...</div>;

  const userReview = currentUser
    ? reviews.find(r => r.user.id === currentUser.id)
    : null;

  return (
    <div className="reviews-container">
      <h2 className="reviews-title">REVIEWS</h2>

      {/* Review del usuario o formulario */}
      <div className="user-review-container">
        {userReview ? (
          <ReviewCard review={userReview} isCurrentUser />
        ) : isLoggedIn ? (
          <CurrentReview
            onSubmit={handleNewReview}
            currentUser={currentUser}
          />
        ) : (
          <div className="bloqued-review-container">
            <p className="bloqued-review-text">Inicie sesión para dejar una review</p>
            <button className="btn-bloqued-review" onClick={() => navigate(ROUTES.LOGIN)}>Login</button>
          </div>
        )}
      </div>

      {/* Listado de otras reviews */}
      <div className="reviews-grid">
        {reviews
          .filter(review => !userReview || review.id !== userReview.id)
          .map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default Reviewss;