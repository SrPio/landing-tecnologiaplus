import React from "react";
import style from "./TurnoExpressClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";
import LogosCarousel from "../../../components/sliders/LogosCarousel";

function TurnoExpressClientsSection() {
  const { logosTurnos } = useLogos();

  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>"Eliminan las filas con nuestro Turnero Digital."</p>
      <div className={style.clients__container}>
        <LogosCarousel logos={logosTurnos} />
      </div>
    </section>
  );
}

export default TurnoExpressClientsSection;
