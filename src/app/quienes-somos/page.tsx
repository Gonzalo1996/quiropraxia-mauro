
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
        eyebrow="TU BIENESTAR, NUESTRA PRIORIDAD"
        title="Quiénes"
        titleHighlight="Somos"
        description="Somos un equipo comprometido con el cuidado de la salud y el bienestar. Trabajamos desde una mirada profesional y personalizada, acompañando a cada persona para mejorar su calidad de vida."
      />
      <AboutDoctor />
      <PhilosophyAndHours />
      <MissionVision 
        leftTitle="Nuestra Misión"
        leftText="Optimizar la salud y la vitalidad de nuestra comunidad a través de ajustes quiroprácticos de precisión, educando sobre la importancia de una columna libre de subluxaciones vertebrales y promoviendo hábitos de vida saludables de forma preventiva."
        rightTitle="Nuestra Visión"
        rightText="Consolidarnos como el centro quiropráctico de referencia nacional, reconocido por nuestra excelencia profesional, constante innovación tecnológica en análisis postural, y por ser un espacio donde cada paciente encuentra el camino hacia el máximo bienestar integral."
      />

      <OurValues
        eyebrow="PILASTRES DE NUESTRO SERVICIO"
        title="Nuestros Valores"
        separatorImage="/images/logo-separador.png"
        separatorAlt="Separador visual de la sección"
        values={[
          {
            title: "Compromiso",
            description:
              "Nos dedicamos a brindar una atención cercana y profesional, escuchando las necesidades de cada persona.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Compromiso con el bienestar de cada paciente",
          },
          {
            title: "Excelencia",
            description:
              "Buscamos la mejora continua a través de la formación profesional y una atención cuidadosa y responsable.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Excelencia y formación profesional",
          },
          {
            title: "Integridad",
            description:
              "Trabajamos con honestidad, respeto y transparencia, construyendo una relación de confianza con cada paciente.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Integridad y confianza en la atención",
          },
          {
            title: "Bienestar integral",
            description:
              "Promovemos una mirada integral de la salud, acompañando a las personas en la construcción de hábitos saludables.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Bienestar y hábitos saludables",
          },
        ]}
      />

      <FinalBanner
        eyebrow="TU BIENESTAR ES NUESTRA PRIORIDAD"
        title="¿Listo para mejorar tu"
        titleSecondLine="calidad de vida?"
        description="Reserve su primera sesión de diagnóstico y comience"
        descriptionSecondLine="su camino hacia el bienestar sin dolor."
        buttonText="Reservar Turno"
        whatsappUrl="https://wa.me/549XXXXXXXXXX"
      />

    </main>
  );
}