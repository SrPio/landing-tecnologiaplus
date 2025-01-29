import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import styles from "./LogosCarousel.module.scss"; // Importamos el módulo SCSS

const LogosCarousel = () => {
  return (
    <div className={styles.logosCarousel}>
      <Swiper
        slidesPerView={5} // Muestra 5 logos simultáneamente
        spaceBetween={30} // Espacio entre logos
        loop={true} // Hace que el carrusel sea infinito
        autoplay={{
          delay: 0, // Sin pausas
          disableOnInteraction: false,
        }}
        speed={3000} // Velocidad del desplazamiento
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-02_vu1bar.svg"
            alt="Logo Colmedica"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-04_g9qll7.svg"
            alt="Logo Mac Pollo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738129692/logos_clientes-05_cnxgbp.svg"
            alt="Logo Cosechas"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-06_uhv7u0.svg"
            alt="Logo Clinimed"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-02_vu1bar.svg"
            alt="Logo Colmedica"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-04_g9qll7.svg"
            alt="Logo Mac Pollo"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738129692/logos_clientes-05_cnxgbp.svg"
            alt="Logo Cosechas"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-06_uhv7u0.svg"
            alt="Logo Clinimed"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LogosCarousel;
