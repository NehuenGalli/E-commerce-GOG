import TrendingSection from "./trendingSection/TrendingSection";
import TagSection from "./tagSection/TagSection";
import RecommendedSection from "./recommendedSection/RecommendedSection";

const Home = () => {
  return (
    <>
      <div className="container">
        <RecommendedSection />
        <TagSection />
        <TrendingSection />
      </div>
    </>
  );
};

export default Home;
