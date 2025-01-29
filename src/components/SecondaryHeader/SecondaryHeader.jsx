import React, { useState, useEffect } from "react";
import style from "./SecondaryHeader.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { HiPhone } from "react-icons/hi2";

function SecondaryHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const clientsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const clientsTarget = document.querySelector("#clients-section");
    const heroTarget = document.querySelector("#hero-section");

    if (clientsTarget) {
      clientsObserver.observe(clientsTarget);
    }

    if (heroTarget) {
      heroObserver.observe(heroTarget);
    }

    return () => {
      if (clientsTarget) {
        clientsObserver.unobserve(clientsTarget);
      }
      if (heroTarget) {
        heroObserver.unobserve(heroTarget);
      }
    };
  }, []);

  return (
    <section
      className={`${style.secondary__header} ${isVisible ? style.visible : ""}`}
    >
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
