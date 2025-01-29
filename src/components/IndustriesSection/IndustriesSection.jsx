import style from "./IndustriesSection.module.scss";

function IndustriesSection() {
  return (
    <section className={style.industries__section}>
      <h2>NUESTROS ROLLOS TÉRMICOS ADAPTABLES A TODOS LOS SECTORES</h2>
      <ul>
        <li>
          <img
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089023/RollosPruebaTecnica/i7kjrc8clsir0yjklhqg.webp"
            alt="icono de salud"
          />
          <p>Sector salud</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/h2wnutneinlzk5arrt5o.webp"
            alt="icono de oficina"
          />
          <p>Oficinas</p>
        </li>
        <li>
          <img
            src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089023/RollosPruebaTecnica/bk8jttrreuotq36ed4az.webp"
            alt="icono de otras industrias"
          />
          <p>Otras industrias</p>
        </li>
      </ul>
    </section>
  );
}

export default IndustriesSection;
