import React from "react";
import style from "./ClientsSection.module.scss";
import LogosCarousel from "../../../components/sliders/LogosCarousel";

function ClientsSection() {
  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Descripción pequeña aquí en el texto de abajo</p>
      <div className={style.clients__container}>
        <LogosCarousel />
      </div>
    </section>
  );
}

export default ClientsSection;
