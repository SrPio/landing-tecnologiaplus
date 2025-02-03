import style from "./EncuestaVirtualProductsSection.module.scss";

function EncuestaVirtualProductsSection() {
  return (
    <section className={style.products__section}>
      <div className={style.products__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738608372/caff5eea-d206-4262-bd00-f6706b31adda.png"
          alt="Rollos de computador con encuesta virtual"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738608727/96ed8c3c-e819-4e76-ae97-188ff6d2f29a.png"
          alt="Imagen de celular con alerta en tiempo real"
        />
      </div>
    </section>
  );
}

export default EncuestaVirtualProductsSection;
