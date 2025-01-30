import style from "./TurnosProductsSection.module.scss";

function TurnosProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>Colores de ticket disponibles</h2>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197773/tickets_2x-8_j3gdmx.webp"
          alt="Colores de tickets"
        />
      </div>
    </section>
  );
}

export default TurnosProductsSection;
