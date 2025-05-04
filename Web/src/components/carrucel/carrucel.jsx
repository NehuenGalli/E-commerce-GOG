import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrucel.css";
const Carrucel = ({ gamesRecommended }) => {
  return (
    <div className="container my-4 carrucel">
      <h3 className="mb-4">FEATURED & RECOMMENDED</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
      >
        {gamesRecommended.map((game, i) => (
          <SwiperSlide key={i}>
            <div className="mx-5">
              <img
                src={game.mainImage}
                alt={game.name}
                className="w-100"
                height="480px"
                style={{ objectFit: "fill" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrucel;
