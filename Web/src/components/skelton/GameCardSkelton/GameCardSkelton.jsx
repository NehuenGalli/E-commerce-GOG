import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const GameCardSkelton = ({ count }) => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
      <div className="container my-5">
        <div className="mx-3 row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-5">
          {Array(count)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="col mb-5">
                <div className="card h-100">
                  <Skeleton height={234} className="img-fluid rounded" />
                  <div className="card-body d-flex flex-column">
                    <Skeleton
                      height={30}
                      className="card-title text-uppercase"
                    />
                    <div className="me-5">
                      <Skeleton count={4} />
                    </div>
                    <Skeleton
                      height={20}
                      className="fw-bolder font-color-price text-end mt-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};
