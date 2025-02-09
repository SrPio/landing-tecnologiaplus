import BlogCard from "../../../components/Cards/Blog/BlogCard";
import style from "./HomeRecentPostsSection.module.scss";
import { IoIosArrowForward } from "react-icons/io";

function HomeRecentPostsSection() {
  return (
    <section className={style.products__section}>
      <h2>Publicaciones recientes</h2>
      <div className={style.products__container}>
        <BlogCard
          title="¿Cómo integrar un dispensador de
turnos con tu sistema de gestión?"
          description="Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam orem ipsum dol"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944980/imagen_ejemplo_blog_1_2x-8_lvtxvq.webp"
          altText="imagen de referencia"
          link="#"
        />

        <BlogCard
          title="¿Qué es un sistema de espera
inteligente y cómo funciona?"
          description="Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam orem ipsum dol"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944979/imagen_ejemplo_blog_2_2x-8_cvcu6t.webp"
          altText="imagen de referencia"
          link="#"
          customClass="custom__style__one"
        />

        <BlogCard
          title="¿Qué es el papel de transferencia
térmica y cómo usarlo en tu negocio?"
          description="Lorem ipsum dolor sit amet, consectetuer
adipiscing elit, sed diam orem ipsum dol"
          imageSrc="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738944978/imagen_ejemplo_blog_3_2x-8_kz2jvy.webp"
          altText="imagen de referencia"
          link="#"
        />
      </div>
      <a href="#" className={style.btn__go_to_blog}>
        Visita nuestro blog
        <IoIosArrowForward className={style.icon__btn} />
      </a>
    </section>
  );
}

export default HomeRecentPostsSection;
