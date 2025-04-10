import { filterObject } from "./filterObject.js";
import { formatReview } from "./reviewHelper.js";

const filterGame = (game) => ({
    ...filterObject(game, [
      'description', 'multimedia', 'requirement', 'relatedGames','developer', 'reviews', 'releaseDate', 'esrb', 'website']),
      mainImage: game.mainImage?.url || null,
    });

const transformGames = (games) =>
    games.map((game) => ({
        id: game.id,
        name: game.name,
        mainImage: game.mainImage?.url || null,
        tags: game.tags,
        price: game.price,
    }));

const transformGameWhitReviews = (game) => ({
    ...filterObject(game, ["reviews"]),
    mainImage: game.mainImage?.url || null,
    relatedGames: (game.relatedGames || []).map(filterGame),
    reviews: (game.reviews || []).map(review => formatReview(review, game)),
    });

export { filterGame, transformGames, transformGameWhitReviews }