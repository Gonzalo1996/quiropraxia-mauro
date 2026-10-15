
"use client";

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Próximo paso: conectar el formulario con un servicio de envío.
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-field">
        <label htmlFor="fullName">Nombre completo</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Ingresá tu nombre completo"
          autoComplete="name"
          required
        />
      </div>

      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="phone">Número celular</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Ingresá tu celular"
            autoComplete="tel"
            required
          />
        </div>

        <div className="contact-form-field">
          <label htmlFor="email">Correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ingresá tu correo electrónico"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="¿En qué podemos ayudarte?"
          rows={5}
          required
        />
      </div>

      <button className="contact-form-submit" type="submit">
        Enviar mensaje
      </button>
    </form>
  );
}