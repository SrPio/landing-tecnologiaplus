import React from "react";
import style from "./ClientsSection.module.scss";
import { useLogos } from "../../../context/LogosContext";
import LogosCarousel from "../../../components/sliders/LogosCarousel";

function ClientsSection() {
  const { logosTermicos } = useLogos();

  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Nuestra calidad en rollos térmicos respalda a grandes empresas.</p>
      <div className={style.clients__container}>
        <LogosCarousel logos={logosTermicos} />
      </div>
    </section>
  );
}

export default ClientsSection;
