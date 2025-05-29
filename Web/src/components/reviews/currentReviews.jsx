import { useState } from "react";
import "./currentReviews.css";
import recommendedIcon from "../../assets/recommendedIcon.svg";
import unrecommendedIcon from "../../assets/unrecommendedIcon.svg";

const CurrentReview = ({ onSubmit, currentUser }) => {
  const [review, setReview] = useState({
    text: "",
    isRecommended: true,
    submitting: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!review.text.trim()) return;

    setReview((currentState) => ({ ...currentState, submitting: true }));

    const success = await onSubmit({
      text: review.text,
      isRecommended: review.isRecommended,
    });

    if (success) {
      setReview({ text: "", isRecommended: true, submitting: false });
    } else {
      setReview((currentState) => ({ ...currentState, submitting: false }));
    }
  };

  return (
    <div className="current-review-container">
      <div className="user-header">
        <img
          src={currentUser.image}
          alt={currentUser.name}
          className="user-avatar"
        />
        <h2 className="username-title">{currentUser.name}</h2>
      </div>

      <form onSubmit={handleSubmit} className="review-form">
        <div className="recommendation-section">
          <span className="recommendation-text">Recommended</span>
          <div className="recommendation-buttons">
            <button
              type="button"
              className={`thumb-btn ${
                review.isRecommended ? "opacity-100" : "opacity-50"
              }`}
              onClick={() =>
                setReview((currentState) => ({
                  ...currentState,
                  isRecommended: true,
                }))
              }
            >
              <img src={recommendedIcon} alt="Recommended" />
            </button>
            <button
              type="button"
              className={`thumb-btn ${
                !review.isRecommended ? "opacity-100" : "opacity-50"
              }`}
              onClick={() =>
                setReview((currentState) => ({
                  ...currentState,
                  isRecommended: false,
                }))
              }
            >
              <img src={unrecommendedIcon} alt="Not Recommended" />
            </button>
          </div>
        </div>

        <textarea
          value={review.text}
          onChange={(e) =>
            setReview((currentState) => ({
              ...currentState,
              text: e.target.value,
            }))
          }
          placeholder="Write your review..."
          className="review-textarea"
        />

        <button
          type="submit"
          className="btn-review"
          disabled={review.submitting || !review.text.trim()}
        >
          {review.submitting ? "Submitting..." : "Add review"}
        </button>
      </form>
    </div>
  );
};

export default CurrentReview;
