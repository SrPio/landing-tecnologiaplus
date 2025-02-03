import style from "./CalificadorIndustriesSection.module.scss";

function CalificadorIndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>
        NUESTRO CALIFICADOR
        <br />
        ES ADAPTABLE A TODOS
        <br />
        LOS SECTORES
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738605624/oficinas_2x-8_jdbpk9.jpg"
            alt="icono de oficinas"
          />
          <p>Oficinas</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738596137/comercio_2x-8_wrjczj.webp"
            alt="icono de carrito de compras"
          />
          <p>Comercio</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738605624/otras_insdustrias_2x-8_junbgu.jpg"
            alt="icono de otras industrias"
          />
          <p>Otras industrias</p>
        </li>
      </ul>
    </section>
  );
}

export default CalificadorIndustriesSection;
