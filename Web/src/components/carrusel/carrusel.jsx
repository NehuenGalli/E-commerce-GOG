import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrusel.css";
const Carrucel = ({ recommendedGames }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={recommendedGames.length > 1}
        className="carrucel"
      >
        {recommendedGames.map((game) => (
          <SwiperSlide key={game.id}>
            <div className="mx-5">
              <Link to={`${ROUTES.GAMES}/${game.id}`}>
                <img
                  src={game.mainImage}
                  alt={game.name}
                  className="w-100 object-fit-cover"
                  height="480px"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrucel;
