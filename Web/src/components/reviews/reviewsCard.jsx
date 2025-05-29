import { Link } from "react-router";
import { ROUTES } from "../../constants";
import "./reviewsCard.css";
import recommendedIcon from "../../assets/recommendedIcon.svg";
import unrecommendedIcon from "../../assets/unrecommendedIcon.svg";

const ReviewCard = ({ review, isCurrentUser }) => {
  const userImage = (
    <img
      src={review.user.image}
      alt={review.user.name}
      className="user-avatar"
    />
  );

  const userName = <h3 className="user-name">{review.user.name}</h3>;

  return (
    <article className={`review-card ${isCurrentUser ? "current-user" : ""}`}>
      <header className="review-header">
        <div className="user-info">
          {isCurrentUser ? (
            <>
              <Link to={`${ROUTES.LIBRARY}`}>{userImage}</Link>
              <Link to={`${ROUTES.LIBRARY}`}>{userName}</Link>
            </>
          ) : (
            <>
              <Link to={`${ROUTES.USER}/${review.user?.id}`}>{userImage}</Link>
              <Link to={`${ROUTES.USER}/${review.user?.id}`}>{userName}</Link>
            </>
          )}
        </div>
        <div className="recommendation">
          <img
            src={review.isRecommended ? recommendedIcon : unrecommendedIcon}
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
