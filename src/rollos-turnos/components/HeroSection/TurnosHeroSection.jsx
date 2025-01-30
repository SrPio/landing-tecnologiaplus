import styles from "./TurnosHeroSection.module.scss";
import Header from "../../../components/Header/Header";

function TurnosHeroSection() {
  return (
    <section id="hero-section" className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          loading="lazy"
          className={styles.hero__img}
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738197768/Imagen_banner_2x-8_kcq3mt.webp"
          alt="imagen de rollos para impresora"
        />

        <div className={styles.hero__text}>
          <h1>
            Sistemas de llamado
            <br />
            inalámbrico para mejorar
          </h1>
          <p>la atención al cliente</p>
          <a className={styles.hero__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default TurnosHeroSection;
