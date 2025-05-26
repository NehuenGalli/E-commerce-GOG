import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { SlideSkelton } from "../../../components/skelton/GameCardSkelton/SlideSkelton";
import { getTags } from "../../../services/gameServices";
import { Link } from "react-router";
import { ROUTES } from "../../../constants";
import Slide from "../../../components/slide/slide";

const TagSection = () => {
  const [tags, setTags] = useState([]);
  const [isLoadingTags, setIsLoadingTags] = useState(false);

  useEffect(() => {
    setIsLoadingTags(true);
    getTags()
      .then((tags) => setTags(tags))
      .catch((error) => toast.error(error))
      .finally(() => setIsLoadingTags(false));
  }, []);

  const tagsFormatted = tags.map((tag) => ({
    id: tag.id,
    name: tag.name,
    image: tag.image.src,
  }));

  const extraLink = (
    <Link to={ROUTES.TAGS} className="card text-decoration-none ">
      <div className="card-body d-flex flex-column justify-content-center align-items-center ">
        <i className="bi bi-plus-circle fs-1 mb-3"></i>
        <h5 className="card-title text-uppercase ">Ver todos los tags</h5>
      </div>
    </Link>
  );
  return (
    <>
      {isLoadingTags ? (
        <SlideSkelton />
      ) : (
        <>
          <h3 className="my-4">BROWSE BY CATEGORY</h3>
          <div className="mx-5">
            <Slide list={tagsFormatted} extraSlide={extraLink} />
          </div>
        </>
      )}
    </>
  );
};
export default TagSection;
