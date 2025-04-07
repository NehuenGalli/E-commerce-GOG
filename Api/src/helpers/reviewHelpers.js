import { filterObject } from './filterObject.js';


const filterGame = (game) => {
  return filterObject(game, [
    'description', 'multimedia', 'requirement', 'relatedGames','developer', 'reviews', 'releaseDate', 'esrb', 'website']);
};

const formatReview = (review, game) => ({
  id: review.id,
    user: {
        id: review.user?.id,
        name: review.user?.name,
        image: review.user?.image || null,
  },
  game: filterGame(game),
  isRecommended: review.isRecommended,
  text: review.text
});

const transformGameReviews = (game) => ({
  ...filterObject(game, ["reviews"]),
  mainImage: game.mainImage?.src || null,
  relatedGames: (game.relatedGames || []).map(filterGame),
  reviews: (game.reviews || []).map(review => formatReview(review, game)),
});

export {transformGameReviews};