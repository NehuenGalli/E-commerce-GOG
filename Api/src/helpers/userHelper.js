const transformUser = (user) => ({
  id: user.id,
  name: user.name,
  image: user.image,
});

const transformUser5datos = (user) => ({
  id: user.id,
  email: user.email,
  name: user.name,
  image: user.image,
  backgroundImage: user.backgroundImage,
});

export { transformUser, transformUser5datos }