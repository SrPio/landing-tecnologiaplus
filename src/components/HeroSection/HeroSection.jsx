import styles from "./HeroSection.module.scss";
import Header from "../Header/Header";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Header />
      <div className={styles.hero__content}>
        <img
          className={styles.hero__img}
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089024/RollosPruebaTecnica/tiuyfgrjwlmhj4gdzrtm.webp"
          alt="imagen de rollos para impresora"
        />

        <div className={styles.hero__text}>
          <h1>
            0000000000000
            <br />
            00000000000000
          </h1>
          <p>00000000000</p>
          <a className={styles.hero__btn} href="#">
            Ver más
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
