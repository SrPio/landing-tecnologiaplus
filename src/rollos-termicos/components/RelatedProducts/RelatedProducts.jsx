import style from "./RelatedProducts.module.scss";

function RelatedProducts() {
  return (
    <section className={style.related__products}>
      <div className={style.related__products__container}>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>TurnoMaster</h3>
              <p>Digitaliza la gestión de turnos.</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dckxydnei/image/upload/v1738120517/TurnoMaster_2x-8_1_t4wh3f.webp"
              alt="imagen de TurnoMaster"
            />
          </div>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
        </div>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>TurnoExpress</h3>
              <p>Rapidez y agilidad para tus filas.</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197774/TurnoExpress_2x-8_ri7zqh.webp"
              alt="imagen de TurnoExpress"
            />
          </div>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
        </div>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>Dispensador de tiquetes</h3>
              <p>Complemento práctico para tomar el turno.</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197776/dispensador_de_tiquetes_2x-8_qusuqr.webp"
              alt="imagen de Dispensador de tiquetes"
            />
          </div>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
      <div className={style.related__products__specs}>
        <ul>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089023/RollosPruebaTecnica/xcbtnf1wh1en4taujsdx.webp"
              alt="icono pulgar arriba"
            />
            <p>precios justos</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089023/RollosPruebaTecnica/zpyfcqvsxo6wdubn2kdu.webp"
              alt="icono de seguridad"
            />
            <p>Protección al comprador</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089023/RollosPruebaTecnica/jg3stajnopybox4xxdkd.webp"
              alt="icono de excelencia"
            />
            <p>Excelente garantía</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089023/RollosPruebaTecnica/ynuxn64wkw3nkqxl4tvo.webp"
              alt="icono de envíos a todo el país"
            />
            <p>Envíos a todo el país</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RelatedProducts;
