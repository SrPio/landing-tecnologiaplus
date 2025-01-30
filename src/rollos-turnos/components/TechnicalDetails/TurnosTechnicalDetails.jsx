import { useState } from "react";
import style from "./TurnosTechnicalDetails.module.scss";

function TurnosTechnicalDetails() {
  const [selectedColor, setSelectedColor] = useState("blue");

  const images = [
    {
      id: "blue",
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738197772/rolloz_azul_2x-8_iu6bqi.webp",
      alt: "imagen rollos de tickets azules",
    },
    {
      id: "yellow",
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738197770/rollos_amarillo_2x-8_p2ydov.webp",
      alt: "imagen rollos de tickets amarillos",
    },
    {
      id: "green",
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738197771/rollos_verde_2x-8_n0r63p.webp",
      alt: "imagen rollos de tickets verdes",
    },
    {
      id: "pink",
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738197771/rollos_rosado_2x-8_oocdj4.webp",
      alt: "imagen rollos de tickets rosas",
    },
    {
      id: "white",
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738197771/rollos_blanco_2x-8_r2y66g.webp",
      alt: "imagen rollos de tickets blancos",
    },
  ];

  return (
    <section className={style.technical__details}>
      <div className={style.technical__carousel__container}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={
              selectedColor === image.id ? style.visible : style.invisible
            }
          />
        ))}
      </div>
      <div className={style.TechnicalDetails__container}>
        <div className={style.technical__textContainer}>
          <h2>Ficha Técnica</h2>
          <p>Rollos de turnos</p>
        </div>
        <div className={style.technical__info}>
          <h3>
            Color -{" "}
            {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)}
          </h3>
          <div className={style.container__colors}>
            {images.map((image) => (
              <div
                key={image.id}
                className={`${style.technical__circle__figure} ${
                  style["color__" + image.id]
                } 
        ${selectedColor === image.id ? style.selected : ""}`}
                onClick={() => setSelectedColor(image.id)}
              ></div>
            ))}
          </div>
        </div>
        <div className={style.technical__info}>
          <h3>Características</h3>
          <ul>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197768/iono_caracteristicas_1_2x-8_pnvmte.webp"
                alt="icono de ticket"
              />
              <p>
                Material:
                <br />
                papel bond
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197769/iono_caracteristicas_3_2x-8_ypg8wb.webp"
                alt="icono de tipos de numeración"
              />
              <p>
                Varias opciones
                <br />
                de numeración
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197768/iono_caracteristicas_2_2x-8_jkw2nh.webp"
                alt="icono de turno numerado"
              />
              <p>
                Asigna turnos en
                <br />
                orden de llegada.
              </p>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197769/iono_caracteristicas_4_2x-8_ppszke.webp"
                alt="icono de check"
              />
              <p>
                Para dispensador de
                <br />
                turnos tipo caracol
              </p>
            </li>
          </ul>
        </div>

        <a className={style.technical__details__btn} href="#">
          Ver más
        </a>
      </div>
    </section>
  );
}

export default TurnosTechnicalDetails;
