import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrusel.css";
const Carrucel = ({ recommendedGames }) => {
  return (
    <>
      <div className="container my-4 carrucel">
        <h3 className="mb-4">FEATURED & RECOMMENDED</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={recommendedGames.length > 1}
        >
          {recommendedGames.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="mx-5">
                <img
                  src={game.mainImage}
                  alt={game.name}
                  className="w-100 object-fit-cover"
                  height="480px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carrucel;
