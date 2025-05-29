import Slide from "../../components/slide/slide";
import { ROUTES } from "../../constants";
const RelatedGameSection = ({ relatedGames }) => {
  return (
    <>
      <h5 className="mt-3">RELATED GAMES</h5>
      <div className="mx-5 my-3">
        <Slide list={relatedGames} route={ROUTES.GAMES} />
      </div>
    </>
  );
};

export default RelatedGameSection;
