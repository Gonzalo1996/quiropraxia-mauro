import PageHero from "@/components/sections/PageHero";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Servicios() {
  return (
    <main>
       <PageHero
        image="/images/div.st-hero.png"
        imageAlt="Equipo de Quiropraxia Mauro"
        eyebrow="SOLUCIONES PARA TU BIENESTAR"
        title="Nuestro"
        titleHighlight="servicios"
        description="Ofrecemos una atención personalizada, adaptada a tus necesidades y objetivos. Cada tratamiento se ajusta a tu condición y a tu estilo de vida, para que recuperes el movimiento y te sientas mejor."
      />        
      <ServicesSection whatsappNumber="549XXXXXXXXXX" />
    </main>
  );
}
