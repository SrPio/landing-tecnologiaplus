import style from "./Footer.module.scss";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";

function Footer() {
  return (
    <footer className={style.footer}>
      {/* <div className={style.footer__top}>
        <div>
          <h3>Siguenos</h3>
          <ul className={style.footer__social}>
            <li>
              <FiInstagram />
            </li>
            <li>
              <FaTiktok />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="">
                <MdOutlineEmail />
                ventas@tecnologiaplus.com
              </a>
            </li>
            <li>
              <a href="">
                <HiPhone />
                (+57) 322 734 79 71
              </a>
            </li>
            <li>
              <a href="">
                <HiPhone />
                (+57) 316 692 38 27
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Estamos en</h3>

          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738128342/colombia_1_mcsiuu.png"
                alt="bandera de colombia"
              />
              Colombia
            </li>
            <li>Bogotá • Av. Cra 30#75-61 Oficina 510.</li>
            <li>Medellín • EI Poblado edificio oceanía.</li>
            <li>Cobertura nacional</li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738128406/peru_myylpq.png"
                alt="bandera de peru"
              />
              Perú
            </li>
            <li>(+51) 976 270 171</li>
            <li>Envíos a toda Latinoamérica</li>
          </ul>
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
      <div className={style.footer__bottom}>
        <img
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738127256/Captura-de-pantalla-2025-01-29-000613_1_oxgzf9.webp"
          alt="logo de Tecnología Plus"
        />
      </div> */}

      <img
        className={style.footer__img__provicional}
        src="https://res.cloudinary.com/dckxydnei/image/upload/v1738129271/Captura_de_pantalla_2025-01-29_004021_amttbj.png"
        alt="footer"
      />
    </footer>
  );
}

export default Footer;
