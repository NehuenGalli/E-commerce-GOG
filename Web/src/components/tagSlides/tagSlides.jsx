import { Link } from "react-router";
import Slide from "../slide/slide";
import { ROUTES } from "../../constants";

const TagSlides = ({ tags }) => {
  const tagsFormatted = tags.map((tag) => ({
    id: tag.id,
    name: tag.name,
    image: tag.image.src,
  }));

  const extraLink = (
    <Link
      to={ROUTES.TAGS}
      className="card text-decoration-none "
      style={{ backgroundColor: "#898989" }}
    >
      <div
        className="card-body d-flex flex-column justify-content-center align-items-center "
        style={{ height: "300px" }}
      >
        <i className="bi bi-plus-circle fs-1 mb-3"></i>
        <h5 className="card-title text-uppercase ">Ver todos los tags</h5>
      </div>
    </Link>
  );

  return (
    <div className="container my-3 ">
      <h3 className="mb-4">BROWSE BY CATEGORY</h3>
      <div className="mx-5">
        <Slide list={tagsFormatted} extraSlide={extraLink} />
      </div>
    </div>
  );
};
export default TagSlides;
