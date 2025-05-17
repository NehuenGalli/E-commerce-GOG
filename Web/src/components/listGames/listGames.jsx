import GameExtraInfo from "./gameExtraInfo";
import "./listGames.css";

const ListGames = ({ games, title }) => {
  return (
    <>
      <div className="container mt-5">
        <h1>{title}</h1>

        {games.map((game) => (
          <div className="card mb-3 mx-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={game.mainImage}
                  className="img-fluid rounded-start object-fit-cover"
                  alt="..."
                />
              </div>

              <GameExtraInfo game={game}></GameExtraInfo>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListGames;
