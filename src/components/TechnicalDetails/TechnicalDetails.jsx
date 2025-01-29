import style from "./TechnicalDetails.module.scss";

function TechnicalDetails() {
  return (
    <section className={style.technical__details}>
      <div className={style.technical__carousel__container}>
        <img
          src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089023/RollosPruebaTecnica/w95mg3v5l3rz4s634bso.webp"
          alt="imagen de ficha de fila"
        />
      </div>
      <div className={style.TechnicalDetails__container}>
        <div className={style.technical__textContainer}>
          <h2>Ficha Técnica</h2>
          <p>Rollos térmicos</p>
        </div>
        <div className={style.technical__info}>
          <h3>Color - Blanco</h3>
          <div className={style.technical__circle__figure}></div>
        </div>
        <div className={style.technical__info}>
          <h3>Características</h3>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/uq6mantgalzbg1cwabg2.webp"
                alt="icono de papel"
              />
              <p>
                Material:
                <br />
                Papel térmico
              </p>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/mfucx7jyhfttrhehhv6f.webp"
                alt="icono de rollos"
              />
              <p>
                Distintos
                <br />
                tamaños
              </p>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/mklyxhubukpeobmbjxso.webp"
                alt="icono de impresora"
              />
              <p>
                Tipo de uso: para
                <br />
                impresora térmica
              </p>
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dckxydnei/image/upload/v1738089022/RollosPruebaTecnica/jacnophczhcmtv5jmrmt.webp"
                alt="icono de check"
              />
              <p>
                Compatible con la mayoría
                <br />
                de impresoras térmicas.
              </p>
            </li>
          </ul>
        </div>

        <a className={style.technical__details__btn} href="#">
          Ver más
        </a>
      </div>
    </section>
  );
}

export default TechnicalDetails;
