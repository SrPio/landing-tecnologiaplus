import style from "./TurnoExpressBenefitsSection.module.scss";

function TurnoExpressBenefitsSection() {
  return (
    <section className={style.benefits__section}>
      <h2 className={style.benefits__title}>
        BENEFICIOS
        <br />
        DESTACADOS
        <br />
        DE TURNOS?
      </h2>
      <ul>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431751/icono_1_2x-8_zw5neg.webp"
            alt="icono de sonido"
          />
          Alarma sonora.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431754/icono_2_2x-8_vktxnl.webp"
            alt="icono de conectividad"
          />
          Inalámbrico, entre pantalla
          <br />y controles.
        </li>
        <li>
          <img
            loading="lazy"
            src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738431752/icono_3_2x-8_ypc1eu.webp"
            alt="icono de tipos de pantalla anti reflejo"
          />
          Pantalla antireflejo.
        </li>
      </ul>
    </section>
  );
}

export default TurnoExpressBenefitsSection;
