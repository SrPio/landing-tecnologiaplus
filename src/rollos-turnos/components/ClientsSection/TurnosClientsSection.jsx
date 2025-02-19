import React from "react";
import style from "./TurnosClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";
import LogosCarousel from "../../../components/sliders/LogosCarousel";
import InfiniteSlider from "../../../components/sliders/InfiniteSlider";

function TurnosClientsSection() {
  const { logosTurnos } = useLogos();

  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Descripción pequeña aquí en el texto de abajo</p>
      <div className={style.clients__container}>
        <InfiniteSlider logos={logosTurnos} />
      </div>
    </section>
  );
}

export default TurnosClientsSection;
