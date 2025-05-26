import { Link } from "react-router";
import { ROUTES } from "../../constants";
import recommended from "../../assets/recommended.svg";
import notRecommended from "../../assets/notRecommended.svg";
const GameExtraInfo = ({ game, needUser }) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="card-body">
          <h1 className="card-title">{game.name}</h1>
          {game.tags && (
            <>
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
            </>
          )}

          {game.text && (
            <>
              <div className="d-flex flex-wrap my-3 gap-3 me-5 pt-3">
                <h4>{game.text}</h4>
              </div>
            </>
          )}
        </div>
      </div>

      {game.text && (
        <>
          <div className="col-lg-2 d-flex align-items-start justify-content-end mt-3 ">
            <div className="d-flex flex-lg-column mb-2 mb-lg-0 me-3  me-lg-5 gap-3 gap-lg-0 ">
              {game.isRecommended ? (
                <span className=" bg-primary bg-opacity-10 p-0">
                  <i className="bi bi-hand-thumbs-up-fill fs-1 text-primary"></i>
                </span>
              ) : (
                <span className=" bg-danger bg-opacity-10 p-0 ">
                  <i className="bi bi-hand-thumbs-down-fill text-danger fs-1"></i>
                </span>
              )}
            </div>
          </div>
        </>
      )}

      {game.price && !needUser && (
        <div className="col-lg-2 d-flex align-items-center justify-content-end violeta ">
          <div className="mb-2 mb-lg-0 me-3  me-lg-5 gap-3 gap-lg-0 ">
            <h3>{game.price.currency}</h3>
            <h3>{game.price.amount.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default GameExtraInfo;
