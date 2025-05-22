import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CarrucelSkelton = () => {
  return (
    <div className="container my-5">
      <div className="mx-5">
        <Skeleton
          className="w-100"
          height="480px"
          baseColor="#e0e0e0"
          highlightColor="#f5f5f5"
        />
      </div>
    </div>
  );
};
