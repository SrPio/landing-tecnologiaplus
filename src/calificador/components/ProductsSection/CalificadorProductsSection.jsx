import style from "./CalificadorProductsSection.module.scss";

function CalificadorProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738606958/654b6711-d006-47ef-9708-32d92634c5c7.png"
          alt="Rollos de impresión"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738606975/2b3356f4-4bb8-4bbb-a534-a6c2166e05f9.png"
          alt="Imagen de Impresora"
        />
      </div>
    </section>
  );
}

export default CalificadorProductsSection;
