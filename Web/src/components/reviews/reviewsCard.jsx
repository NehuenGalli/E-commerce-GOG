import thumbUp from './thumb-up.png';
import thumbDown from './thumb-down.png';
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
          <h3 className="user-name">{review.user.name}</h3>
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