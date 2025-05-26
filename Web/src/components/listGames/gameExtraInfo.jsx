import { Link } from "react-router";
import { ROUTES } from "../../constants";

const GameExtraInfo = ({ game, needUser }) => {
  return (
    <>
      {game.tags && (
        <div className="col-lg-6">
          <div className="card-body">
            <h1 className="card-title">{game.name}</h1>

            <div className="d-flex flex-wrap my-3 gap-3 me-5 pt-3">
              {game.tags.slice(0, 10).map((tag) => (
                <Link
                  key={tag.id}
                  to={`${ROUTES.GAMES}/${tag.id}`}
                  className="fw-bolder font-color-tags link-offset-1"
                >
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {game.price && !needUser && (
        <div className="col-lg-2 d-flex align-items-center justify-content-end violeta ">
          <div className="d-flex flex-lg-column mb-2 mb-lg-0 me-3  me-lg-5 gap-3 gap-lg-0 ">
            <h3>{game.price.currency}</h3>
            <h3>{game.price.amount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default GameExtraInfo;
