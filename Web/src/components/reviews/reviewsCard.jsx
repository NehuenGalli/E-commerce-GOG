import thumbUp from '../../assets/thumb-up.png';
import thumbDown from '../../assets/thumb-down.png';
import { Link } from 'react-router';
import { ROUTES } from '../../constants';
import './reviewsCard.css';

const ReviewCard = ({ review, isCurrentUser }) => {
  return (
    <article className={`review-card ${isCurrentUser ? 'current-user' : ''}`}>
      <header className="review-header">
        <div className="user-info">
          <img
            src={review.user.image}
            alt={review.user.name}
            className="user-avatar"
          />
          <Link to={`${ROUTES.USER}/${review.user?.id}`}>
              <h3 className="user-name">{review.user.name}</h3>
          </Link>
        </div>
        <div className="recommendation">
          <img 
            src={review.isRecommended ? thumbUp : thumbDown} 
            alt={review.isRecommended ? "Recommended" : "Not Recommended"} 
          />
        </div>
      </header>

      <div className="review-content">
        <p className="review-text">{review.text}</p>
      </div>
    </article>
  );
};

export default ReviewCard;