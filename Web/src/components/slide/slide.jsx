import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router";
import "./slide.css";
import { ROUTES } from "../../constants";

const Slide = ({ images, names, ids, extraSlide }) => {
  return (
    <div className="slide">
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        navigation
        loop={ids.length > 4}
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
        {names.slice(0, 10).map((name, i) => (
          <SwiperSlide key={ids[i]}>
            <Link
              className="card text-bg-dark"
              to={`${ROUTES.GAMES}/${ids[i]}`}
            >
              <img
                src={images[i]}
                alt={name}
                className="card-img object-fit-cover"
                height="300"
              />
              <div className="card-img-overlay d-flex justify-content-center align-items-end">
                <h5 className="card-title text-uppercase">{name}</h5>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {extraSlide && <SwiperSlide>{extraSlide}</SwiperSlide>}
      </Swiper>
    </div>
  );
};

export default Slide;
