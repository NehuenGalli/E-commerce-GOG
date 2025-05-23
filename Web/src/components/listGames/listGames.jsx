import GameExtraInfo from "./gameExtraInfo";
import "./listGames.css";

const ListGames = ({ games, title, displayUser }) => {
  return (
    <>
      <div className="container mt-4">
        <h2 className="mb-4">{title}</h2>

        {games.map((game) => (
          <div key={game.id} className="card mb-3 mx-5 ">
            <div className="row g-0">
              <div className="col-lg-4">
                <img
                  src={game.mainImage}
                  className="w-100 h-100 object-fit-cover"
                  alt={game.name}
                />
              </div>

              <GameExtraInfo game={game} needUser={displayUser}></GameExtraInfo>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListGames;
