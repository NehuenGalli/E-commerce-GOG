import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";
import "./tagSlides.css";

const TagSlides = ({ tags }) => {
  return (
    <div className="container my-3 tag-slides">
      <h3 className="mb-4">BROWSE BY CATEGORY</h3>
      <div className="mx-5">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          loop={true}
        >
          {tags.slice(0, 10).map((tag, i) => (
            <SwiperSlide key={i}>
              <Link className="card text-bg-dark h-100" to={`/tags/${tag.id}`}>
                <img
                  src={tag.image.src}
                  alt={tag.name}
                  className="card-img"
                  height="300"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                  <h5 className="card-title text-uppercase">{tag.name}</h5>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          <SwiperSlide>
            <Link
              to="/tags"
              className="card text-decoration-none "
              style={{ backgroundColor: "#898989" }}
            >
              <div
                className="card-body d-flex flex-column justify-content-center align-items-center "
                style={{ height: "300px" }}
              >
                <i className="bi bi-plus-circle fs-1 mb-3"></i>
                <h5 className="card-title text-uppercase ">
                  Ver todos los tags
                </h5>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default TagSlides;
