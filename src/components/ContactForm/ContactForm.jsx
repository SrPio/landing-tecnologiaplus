import style from "./ContactForm.module.scss";

function ContactForm() {
  return (
    <section className={style.contact__form}>
      <div className={style.contact__form__container}>
        <form>
          <h2>Llámanos o escríbenos</h2>
          <input type="text" placeholder="Nombre" />
          <input type="tel" name="tel" id="tel" placeholder="Celular" />
          <input type="email" placeholder="Correo" />
          <input type="text" placeholder="Que Producto te Interesa?"></input>
          <button type="submit">Enviar</button>
        </form>
        <div className={style.contact__texts}>
          <h2 className={style.contact__title}>Te brindamos asesoría</h2>
          <p>Para escoger la mejor opción según tu necesidad</p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
