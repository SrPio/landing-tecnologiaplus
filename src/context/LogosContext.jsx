import { createContext, useContext, useState } from "react";

const LogosContext = createContext();

export const useLogos = () => {
  return useContext(LogosContext);
};

export const LogosProvider = ({ children }) => {
  const [logosTermicos] = useState([
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-02_vu1bar.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-04_g9qll7.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738129692/logos_clientes-05_cnxgbp.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-06_uhv7u0.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-02_vu1bar.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-04_g9qll7.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738129692/logos_clientes-05_cnxgbp.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-06_uhv7u0.svg",
      alt: "Logo Clinimed",
    },
  ]);

  const [logosTurnos] = useState([
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-02_vu1bar.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738200097/Logo_cliente_4_xzmheh.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738200097/Logo_cliente_2_ijydmt.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738200096/Logo_cliente_1_phkgsq.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-02_vu1bar.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-04_g9qll7.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738129692/logos_clientes-05_cnxgbp.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/dckxydnei/image/upload/v1738190881/logos_clientes-06_uhv7u0.svg",
      alt: "Logo Clinimed",
    },
  ]);

  return (
    <LogosContext.Provider value={{ logosTermicos, logosTurnos }}>
      {children}
    </LogosContext.Provider>
  );
};
