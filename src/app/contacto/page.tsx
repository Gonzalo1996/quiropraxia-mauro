import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import ContactMap from "@/components/sections/ContactMap";

const contactAddress = "AGREGÁ ACÁ LA DIRECCIÓN DEL CONSULTORIO";

export default function ContactoPage() {
  return (
    <main>
       <PageHero
        image="/images/div.st-hero.png"
        imageAlt="Equipo de Quiropraxia Mauro"
        eyebrow="ESTAMOS PARA AYUDARTE"
        title="Visita"
        titleHighlight="nuestras redes"
        description="Ofrecemos una atención personalizada, adaptada a tus necesidades y objetivos. Cada tratamiento se ajusta a tu condición y a tu estilo de vida, para que recuperes el movimiento y te sientas mejor."
      />
      <ContactSection
        logo="/images/logo.png"
        backgroundImage="/images/bg-contacto.png"
        instagramUrl="https://www.instagram.com/TU_USUARIO"
        facebookUrl="https://www.facebook.com/TU_USUARIO"
        youtubeUrl="https://www.youtube.com/@TU_USUARIO"
        tiktokUrl="https://www.tiktok.com/@TU_USUARIO"
      />

      <ContactMap address={contactAddress} />
    </main>
  );
}
