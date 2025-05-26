import { Link } from "react-router";
import { ROUTES } from "../../constants";
import "./listAllGames.css";

const ListAllGames = ({ games }) => {
  return (
    <div className="mx-3 row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-5">
      {games.list.map((game) => (
        <div key={game.id} className="col">
          <div className="card h-100">
            <div className="ratio ratio-4x3">
              <img
                src={game.mainImage}
                className="card-img-top object-fit-cover"
                width="327"
                height="234"
                alt={game.name}
              />
            </div>

            <div className="card-body d-flex flex-column">
              <h2 className="card-title text-uppercase">{game.name}</h2>
              <div className="d-flex flex-wrap my-3 gap-3 me-5">
                {game.tags.slice(0, 10).map((tag) => (
                  <Link
                    key={tag.id}
                    to={`${ROUTES.GAMES}/${tag.id}`}
                    className="fw-bolder link-offset-1"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
              <h3 className="fw-bolder font-color-price text-end mt-auto">
                {game.price.currency} {game.price.amount.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListAllGames;
