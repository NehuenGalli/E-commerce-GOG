import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SlideSkelton = () => {
  return (
    <div className="container my-3">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 mx-5">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="col-3">
              <div className="card-body">
                <Skeleton className="img-fluid" height={300} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
