import { createContext, useContext, useState } from "react";

const LogosContext = createContext();

export const useLogos = () => {
  return useContext(LogosContext);
};

export const LogosProvider = ({ children }) => {
  const [logosTermicos] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-04_g9qll7_necl9v.svg",
      alt: "Logo Mac Pollo",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-05_cnxgbp_nkhgxh.svg",
      alt: "Logo Cosechas",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349922/logos_clientes-06_uhv7u0_gc4hbe.svg",
      alt: "Logo Clinimed",
    },
  ]);

  const [logosTurnos] = useState([
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/logos_clientes-02_vu1bar_uhkadi.svg",
      alt: "Logo Colmedica",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_4_xzmheh_hanw0e.svg",
      alt: "Logo Nord Vital",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_2_ijydmt_kqdz55.svg",
      alt: "Logo Dermosalud",
    },
    {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349969/Logo_cliente_1_phkgsq_lniwwn.svg",
      alt: "Logo Comfenalco",
    },
  ]);

  return (
    <LogosContext.Provider value={{ logosTermicos, logosTurnos }}>
      {children}
    </LogosContext.Provider>
  );
};
