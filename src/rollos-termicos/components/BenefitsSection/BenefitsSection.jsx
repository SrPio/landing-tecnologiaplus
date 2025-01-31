import style from "./BenefitsSection.module.scss";

function BenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        BENEFICIOS
        <br />
        DESTACADOS
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349923/rijkjjxwhpa9hbvnj8ga_i2qgeg.webp"
            alt="icono de check"
          />
          Variedad en tamaños y medidas:
          <br />
          perfectos para tickets, recibos y más.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349925/za4ik6yfenohf4oquc0j_fdtqew.webp"
            alt="icono de calendario"
          />
          Alta calidad de impresión:
          <br />
          Textos y gráficos claros en cada ticket.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/u2v3b0ngu177bi5byxcv_yckaaq.webp"
            alt="icono check"
          />
          Compatibilidad:
          <br />
          Con impresoras térmicas multimarcas.
        </li>
      </ul>
    </section>
  );
}

export default BenefitsSection;
