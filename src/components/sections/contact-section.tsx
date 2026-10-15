
import Image from "next/image";
import ContactForm from "@/components/ui/contact-form";

interface ContactSectionProps {
  showHeading?: boolean;
}

export default function ContactSection({
  showHeading = true,
}: ContactSectionProps) {
  return (
    <section className="contact-section contact-schedule" id="contacto">
      {showHeading && (
        <header className="contact-section-header">

          <h2>Contactanos</h2>

          <div className="contact-section-separator">
            <img
              src="/images/logo-separador.png"
              alt=""
            />
          </div>

          <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum the industry's standard dummy text.
          </p>
        </header>
      )}

      <div className="contact-section-container">
        <ContactForm />
      </div>
    </section>
  );
}
