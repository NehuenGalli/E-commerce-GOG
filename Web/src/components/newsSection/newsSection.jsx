import { Link } from "react-router";
import "./newsSection.css";

const NewsSection = ({ games }) => {
  return (
    <div className="container my-3">
      <h3 className="mb-4">NEW & TRENDING</h3>
      <div className="mx-3 row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-5">
        {games.list.map((game) => (
          <div key={game.id} className="col mb-5">
            <div className="card h-100">
              <img
                src={game.mainImage}
                className="card-img-top"
                width="327"
                height="234"
                alt="..."
              />
              <div className="card-body d-flex flex-column color-bodyCard">
                <h2 className="card-title text-uppercase">{game.name}</h2>
                <div className="d-inline-flex flex-wrap my-3 gap-2">
                  {game.tags.map((tag) => (
                    <Link
                      key={`${tag.id}`}
                      to={`/tags/${tag.id}`}
                      className="fw-bolder me-5 font-color-tags link-offset-1"
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
    </div>
  );
};

export default NewsSection;
