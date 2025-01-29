import style from "./Footer.module.scss";
import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok, FaFacebookF, FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__section">
          <h3>Síguenos</h3>
          <ul className="footer__social">
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
        <div className="footer__section">
          <h3>Contacto</h3>
          <ul>
            <li>
              <MdOutlineEmail /> ventas@tecnologiaplus.com
            </li>
            <li>
              <HiPhone /> (+57) 322 734 79 71
            </li>
            <li>
              <HiPhone /> (+57) 316 692 38 27
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Estamos en</h3>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738128342/colombia_1_mcsiuu.png"
                alt="Colombia"
              />
              Colombia
            </li>
            <li>Bogotá • Av. Cra 30#75-61 Oficina 510.</li>
            <li>Medellín • El Poblado edificio Oceanía.</li>
            <li>Cobertura nacional</li>
          </ul>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738128406/peru_myylpq.png"
                alt="Perú"
              />
              Perú
            </li>
            <li>(+51) 976 270 171</li>
            <li>Envíos a toda Latinoamérica</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <img
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738127256/Captura-de-pantalla-2025-01-29-000613_1_oxgzf9.webp"
          alt="Tecnología Plus"
        />
      </div>
    </footer>
  );
};

export default Footer;
