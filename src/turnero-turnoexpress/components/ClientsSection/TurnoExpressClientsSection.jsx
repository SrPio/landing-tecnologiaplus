import React from "react";
import style from "./TurnoExpressClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";
import LogosCarousel from "../../../components/sliders/LogosCarousel";
import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function TurnoExpressClientsSection() {
  const { logosTurnoExpress } = useLogos();

  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Eliminan las filas con nuestro Turnero Digital.</p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosTurnoExpress} />
      </div>
    </section>
  );
}

export default TurnoExpressClientsSection;
