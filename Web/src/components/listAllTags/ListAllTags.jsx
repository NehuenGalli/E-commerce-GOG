import { ROUTES } from "../../constants";
import { Link } from "react-router";
const ListAllTags = ({ tags }) => {
  return (
    <div className="mx-5 row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
      {tags.map((tag) => (
        <Link to={`${ROUTES.GAMES}/${tag.id}`} key={tag.id} className="col ">
          <div className="card text-bg-dark rounded-1 ratio ratio-1x1">
            <img
              src={tag.image.src}
              className="card-img object-fit-cover opacity-75 h-100"
              alt={tag.name}
            />
            <div className="card-img-overlay d-flex align-items-end justify-content-center ">
              <h2 className="card-title text-center text-uppercase">
                {tag.name}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ListAllTags;
