const transformGames = (games) =>
  games.map((game) => ({
    id: game.id,
    name: game.name,
    mainImage: game.mainImage,
    tags: game.tags,
    price: game.price,
  }));

const transformUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  backgroundImage: user.backgroundImage,
  image: user.image,
});

export { transformGames, transformUser };
