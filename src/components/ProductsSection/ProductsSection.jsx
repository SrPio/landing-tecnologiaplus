import style from "./ProductsSection.module.scss";

function ProductsSection() {
  return (
    <section className={style.products__section}>
      <h2 className={style.products__title}>Rollos para impresora térmica</h2>
      <div className={style.products__container}>
        <img
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738106572/image-1_1_ljyxis.webp"
          alt="Rollos de impresión"
        />
        <img
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738106457/Recurso-13_2x-8_1_suitny.webp"
          alt="Imagen de Impresora"
        />
      </div>
      <p>
        En Tecnología Plus, somos fabricantes especializados en rollos térmicos
        de alta calidad, diseñados para satisfacer las necesidades de impresión
        de todo tipo de negocios. Nuestros productos destacan por su precisión,
        durabilidad y compatibilidad con las principales impresoras del mercado.
        Nos comprometemos a brindar soluciones confiables que optimicen tus
        procesos y refuercen la profesionalidad de tu empresa. Elige Tecnología
        Plus y experimenta la diferencia que solo los expertos pueden ofrecer.
        Contacta con nosotros y descubre cómo podemos ser tu mejor aliado en
        impresión térmica!
      </p>
    </section>
  );
}

export default ProductsSection;
