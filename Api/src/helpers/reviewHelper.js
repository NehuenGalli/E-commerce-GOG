import { filterGame } from "./gameHelper.js";

const formatReview = (review, game) => ({
  id: review.id,
  user: {
    id: review.user?.id,
    name: review.user?.name,
    image: review.user?.image || null,
  },
  game: filterGame(game),
  isRecommended: review.isRecommended,
  text: review.text,
});

export { formatReview };
