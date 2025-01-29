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
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/rijkjjxwhpa9hbvnj8ga.webp"
            alt="icono de check"
          />
          Alta calidad de impresión.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/za4ik6yfenohf4oquc0j.webp"
            alt="icono de calendario"
          />
          Durabilidad a largo plazo y
          <br />
          rendimiento confiable.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/u2v3b0ngu177bi5byxcv.webp"
            alt="icono check"
          />
          Alta compatibilidad con
          <br />
          impresoras térmicas.
        </li>
      </ul>
    </section>
  );
}

export default BenefitsSection;
