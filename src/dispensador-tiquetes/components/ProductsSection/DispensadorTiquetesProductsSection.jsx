import style from "./DispensadorTiquetesProductsSection.module.scss";

function DispensadorTiquetesProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>Dispensador de rollos de turnos</h2>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/dispensador_2x-8_dwru2g.webp"
          alt="Colores de tickets"
        />
      </div>
    </section>
  );
}

export default DispensadorTiquetesProductsSection;
