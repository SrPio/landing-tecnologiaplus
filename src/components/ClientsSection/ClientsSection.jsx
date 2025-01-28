import style from "./ClientsSection.module.scss";

function ClientsSection() {
  return (
    <section className={style.clients__section}>
      <h2 className={style.clients__title}>Algunos de nuestros clientes</h2>
      <p>Descripción pequeña aquí en el texto de abajo</p>
      <div className={style.clients__container}></div>
    </section>
  );
}

export default ClientsSection;
