import style from "./TurnoExpressProductsSection.module.scss";

function TurnoExpressProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>
        Una pantalla para cada necesidad
      </h2>
      <div className={style.products__container}>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431728/Turnero_T1B_2x-8_cm2iev.webp"
              alt="imagen del turnero T1B"
            />
            <h3>Turnero T1b</h3>
            <p>294 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T1N_2x-8_r4igzs.webp"
              alt="imagen del turnero T1N"
            />
            <h3>Turnero T1N</h3>
            <p>269 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431726/Fila_unica_2x-8_iejxvf.webp"
              alt="imagen del turnero de pantalla Fila única"
            />
            <h3>Pantalla fila única</h3>
            <p>32 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431727/Turnero_T3_2x-8_ypmexo.webp"
              alt="imagen del turnero T3"
            />
            <h3>Turnero T3</h3>
            <p>269 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
        </div>
        <h2>Tuneros personalizados</h2>
        <div className={style.products__card__container}>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431730/Segun_producto_2x-8_fepwc0.webp"
              alt="imagen del turnero según producto"
            />
            <h3>Turnero según producto</h3>
            <p>280 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
          <div className={style.card}>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431729/T3_con_logo_2x-8_ofmcyp.webp"
              alt="imagen del turnero T3 con logo"
            />
            <h3>Turnero T3 - con logo</h3>
            <p>269 vendidos</p>
            <a className={style.card__btn} href="#">
              Ver más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TurnoExpressProductsSection;
