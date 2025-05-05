const ListTagGames = ({ games }) => {
  return (
    <div>
      <h1>Games</h1>

      {games.map((game) => (
        <p>{game.name}</p>
      ))}
    </div>
  );
};

export default ListTagGames;
