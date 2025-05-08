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
          spaceBetween={10}
          navigation
          loop={tags.length > 4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            770: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {tags.slice(0, 10).map((tag) => (
            <SwiperSlide key={tag.id}>
              <Link className="card text-bg-dark" to={`/games/${tag.id}`}>
                <img
                  src={tag.image.src}
                  alt={tag.name}
                  className="card-img object-fit-cover "
                  height="300"
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
