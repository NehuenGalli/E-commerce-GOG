const findTagInGames = (tagId, games) => {
  return games?.[0]?.tags?.find((item) => item.id === tagId);
};

export { findTagInGames };
