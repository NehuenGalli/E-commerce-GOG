import ListAllGames from "../../../components/listAllGames/listAllGames";
const NewsSection = ({ games }) => {
  return (
    <div className="container my-3">
      <h3 className="mb-4">NEW & TRENDING</h3>
      <ListAllGames games={games} />
    </div>
  );
};

export default NewsSection;
