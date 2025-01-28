import style from "./SecondaryHeader.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";

function SecondaryHeader() {
  return (
    <section className={style.secondary__header}>
      <div className={style.nav__links}>
        <a href="#">Inicio</a>
        <a href="#">
          Productos
          <IoIosArrowDown className={style.arrow__icon} />
        </a>
      </div>
      <div className={style.phone__container}>
        <HiPhone />
        <a href="#">322 734 7971</a>
      </div>
    </section>
  );
}

export default SecondaryHeader;
