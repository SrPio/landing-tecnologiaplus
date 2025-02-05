import style from "./LocalizadoresSecondaryProductsSection.module.scss";

function LocalizadoresSecondaryProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <div
          className={`${style.products__card__container} ${style.products__card__container__variant}`}
        >
          <div className={style.card}>
            <div>
              <h3>REC V3</h3>
              <a className={style.card__btn} href="#">
                Ver más
              </a>
              <p>1.948 vendidos</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738765361/rec_v3_1_2x-100_oabcmm.webp"
              alt="imagen de localizador REC V3"
            />
          </div>
          <div className={style.card}>
            <div>
              <h3>CIR C2</h3>
              <a className={style.card__btn} href="#">
                Ver más
              </a>
              <p>1.630 vendidos</p>
            </div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738765361/cir_c2_1_2x-100_mg2j0j.webp"
              alt="imagen de localizador CIR C2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocalizadoresSecondaryProductsSection;
