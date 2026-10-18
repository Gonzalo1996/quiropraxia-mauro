
import PageHero from "@/components/sections/PageHero";
import AboutDoctor from "@/components/sections/aboutdoctor";
import PhilosophyAndHours from "@/components/sections/philosophyandhours";
import MissionVision from "@/components/sections/MissionVision";
import OurValues from "@/components/sections/OurValues";
import FinalBanner from "@/components/sections/FinalBanner";

export default function QuienesSomosPage() {
  return (
    <main>
      <PageHero
        image="/images/div.st-hero.png"
        imageAlt="Equipo de Quiropraxia Mauro"
        eyebrow="Conocé nuestra historia"
        title="Quiénes"
        titleHighlight="Somos"
        description="Somos un equipo comprometido con el cuidado de la salud y el bienestar. Trabajamos desde una mirada profesional y personalizada, acompañando a cada persona para mejorar su calidad de vida."
      />
      <AboutDoctor />
      <PhilosophyAndHours />
      <MissionVision />
      <OurValues />
      <FinalBanner />
    </main>
  );
}