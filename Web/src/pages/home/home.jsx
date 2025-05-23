import TrendingSection from "./trendingSection/TrendingSection";
import TagSection from "./tagSection/TagSection";
import RecommendedSection from "./recommendedSection/RecommendedSection";

const Home = () => {
  return (
    <>
      <RecommendedSection />
      <TagSection />
      <TrendingSection />
    </>
  );
};

export default Home;
