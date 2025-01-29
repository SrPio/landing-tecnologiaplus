import React from "react";
import style from "./ClientsSection.module.scss";

function ClientsSection() {
  return (
    <section id="clients-section" className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Descripción pequeña aquí en el texto de abajo</p>
      <div className={style.clients__container}>
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089024/RollosPruebaTecnica/hquaf5sfjiqtopftpbea.webp"
          alt="logo de Colmedica"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089024/RollosPruebaTecnica/dqdtnhigu2semyuv0h6z.webp"
          alt="Logo de macpollo"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738129692/logos_clientes-05_cnxgbp.svg"
          alt="Logo de Cosechas"
        />
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089024/RollosPruebaTecnica/ik5po4ufxlue6kcatm4m.webp"
          alt="Logo de Clinemed"
        />
      </div>
    </section>
  );
}

export default ClientsSection;
