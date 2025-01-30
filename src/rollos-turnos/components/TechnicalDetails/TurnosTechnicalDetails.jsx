import style from "./TurnosTechnicalDetails.module.scss";

function TurnosTechnicalDetails() {
  return (
    <section className={style.technical__details}>
      <div className={style.technical__carousel__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197772/rolloz_azul_2x-8_iu6bqi.webp"
          alt="imagen rollos de tickets"
        />
      </div>
      <div className={style.TechnicalDetails__container}>
        <div className={style.technical__textContainer}>
          <h2>Ficha Técnica</h2>
          <p>Rollos de turnos</p>
        </div>
        <div className={style.technical__info}>
          <h3>Color - Azul</h3>
          <div className={style.container__colors}>
            <div
              className={`${style.technical__circle__figure} ${style.color__blue}`}
              id="color-blue"
            ></div>
            <div
              className={`${style.technical__circle__figure} ${style.color__yellow}`}
              id="color-yellow"
            ></div>
            <div
              className={`${style.technical__circle__figure} ${style.color__green}`}
              id="color-green"
            ></div>
            <div
              className={`${style.technical__circle__figure} ${style.color__pink}`}
              id="color-pink"
            ></div>
            <div
              className={`${style.technical__circle__figure} ${style.color__withe}`}
              id="color-white"
            ></div>
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
