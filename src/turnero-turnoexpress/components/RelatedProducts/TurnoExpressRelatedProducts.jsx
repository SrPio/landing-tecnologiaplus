import style from "./TurnoExpressRelatedProducts.module.scss";

function TurnoExpressRelatedProducts() {
  return (
    <section className={style.related__products}>
      <div className={style.related__products__container}>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>TurnoMaster</h3>
              <p>Descripción pequeña aquí</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738350030/TurnoMaster_2x-8_stvupu_tvjv5q.webp"
              alt="imagen de TurnoMaster"
            />
          </div>
          <p className={style.selling__counter}>0000 vendidos</p>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
        </div>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>Rollos térmicos</h3>
              <p>Descripción pequeña aquí</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349920/image-1_1_ljyxis_qdsmdq.webp"
              alt="imagen de Rollos térmicos"
            />
          </div>
          <p className={style.selling__counter}>0000 vendidos</p>
          <a className={style.card__btn} href="#">
            Ver más
          </a>
        </div>
        <div className={style.related__products__card}>
          <div className={style.card__info}>
            <div className={style.card__text}>
              <h3>Localizadores</h3>
              <p>Descripción pequeña aquí</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431731/Localizadores_2x-8_niu5kx.webp"
              alt="imagen de TurnoExpress"
            />
          </div>
          <p className={style.selling__counter}>0000 vendidos</p>
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
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/xcbtnf1wh1en4taujsdx_avnfkj.webp"
              alt="icono pulgar arriba"
            />
            <p>precios justos</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/zpyfcqvsxo6wdubn2kdu_iuw7tl.webp"
              alt="icono de seguridad"
            />
            <p>Protección al comprador</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/jg3stajnopybox4xxdkd_favvxk.webp"
              alt="icono de excelencia"
            />
            <p>Excelente garantía</p>
          </li>
          <li>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/ynuxn64wkw3nkqxl4tvo_lwqzi0.webp"
              alt="icono de envíos a todo el país"
            />
            <p>Envíos a todo el país</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TurnoExpressRelatedProducts;
