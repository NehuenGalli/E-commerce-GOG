import { toast } from 'react-toastify';
import './currentReview.css';
import { useState, useEffect} from 'react';
import { API } from '../../constants';
import { addReview } from '../../services/gameServices';
import { userCurrent } from '../../services/userService';

const CurrentReview = ({ game, isLoggedIn }) => {

  const gameId = game.id;
  const token = localStorage.getItem(API.TOKEN_KEY);
  const [currentUser, setCurrentUser] = useState(null);
  const [review, setReview] = useState({
    text: '',
    isRecommended: true
  });
  const [isUserLoading, setIsUserLoading] = useState(true);
 
useEffect(() => {
    const fetchUser = async () => {
      if (isLoggedIn) {
        try {
          setIsUserLoading(true);
          const user = await userCurrent();
          setCurrentUser(user);
        } catch (error) {
          toast.error(error);
        } finally {
        setIsUserLoading(false);
      }
      }
    };

    fetchUser();
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.error("You must be logged in to submit a review");
      return;
    }

    if (!review.text.trim()) {
      toast.error("The comment cannot be empty");
      return;
    }

    try {
      await addReview(gameId, {
        isRecommended: review.isRecommended,
        text: review.text
      }, token);

      toast.success("Review submitted successfully");
      setReview({ text: '', isRecommended: true });
    } catch (error) {
      toast.error(error.message || "There is already a review for this game");
    }
  };

  if (isUserLoading) {
    return <div className="text-white">Cargando usuario...</div>;
  }

  return (
    <div className="review-container mx-3">
      <div className="px-2 py-4  text-white rounded-3 d-flex flex-column"
        style={{ backgroundColor: '#808080' }}>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <div className="d-flex align-items-center">
            <img
              src={currentUser.image}
              alt=""
              className="img-fluid me-4 rounded-circle"
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'cover'
              }}
            />
            <p className="mb-0 fw-bold fs-4">{currentUser.name}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-auto mb-3">
            <textarea
              value={review.text}
              onChange={(e) => setReview({ ...review, text: e.target.value })}
              placeholder="Escribe tu reseña..."
              className="form-control mb-2 border-0 text-white"
              style={{
                backgroundColor: 'transparent',
                minHeight: '100px',
                resize: 'none'
              }}
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              id="recommendCheckbox"
              checked={review.isRecommended}
              onChange={(e) => setReview({ ...review, isRecommended: e.target.checked })}
              className="form-check-input"
            />
            <label htmlFor="recommendCheckbox" className="form-check-label">
              Recomendar este juego
            </label>
          </div>

          <div className="review-input-container">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                display: 'block',
                margin: '0 auto',
                width: 'fit-content'
              }}
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CurrentReview;