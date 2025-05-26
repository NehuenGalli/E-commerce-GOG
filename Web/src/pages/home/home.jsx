import TrendingSection from "./trendingSection/TrendingSection";
import TagSection from "./tagSection/TagSection";
import RecommendedSection from "./recommendedSection/RecommendedSection";
import { ToastContainer } from "react-toastify";

const Home = () => {
  return (
    <>
      <div className="container">
        <RecommendedSection />
        <TagSection />
        <TrendingSection />
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
