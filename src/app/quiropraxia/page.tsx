
import PageHero from "@/components/sections/PageHero";
import MissionVision from "@/components/sections/MissionVision";
import OurValues from "@/components/sections/OurValues";
import FinalBanner from "@/components/sections/FinalBanner";
import ChiropracticIntroduction from "@/components/sections/ChiropracticIntroduction";
import FamilyChiropractic from "@/components/sections/FamilyChiropractic";

export default function Quiropraxia() {
  return (
    <main>
        <PageHero
            image="/images/div.st-hero.png"
            imageAlt="Equipo de Quiropraxia Mauro"
            eyebrow="CONOCÉ LA QUIROPRAXIA"
            title="¿Qué es la"
            titleHighlight="quiropraxia?"
            description="Ofrecemos una atención personalizada, adaptada a tus necesidades y objetivos. Cada tratamiento se ajusta a tu condición y a tu estilo de vida, para que recuperes el movimiento y te sientas mejor."
        />
        <ChiropracticIntroduction
        eyebrow="CUIDADO NATURAL Y EFICAZ"
        title="Una disciplina dedicada a restablecer la armonía entre su cerebro y su cuerpo"
        paragraphs={[
          "La quiropraxia es una ciencia de la salud basada en la premisa de que el cuerpo tiene una capacidad innata para sanarse a sí mismo cuando el sistema nervioso funciona sin interferencias. Su columna vertebral protege la médula espinal, que es la principal vía de comunicación de su organismo.",
          "Cuando una vértebra pierde su posición normal (subluxación), puede presionar los nervios cercanos bloqueando este flujo vital. Mediante ajustes manuales específicos, el Dr. Mauricio Cantero corrige estas desviaciones para devolverle la vitalidad a su día a día.",
        ]}
        image="/images/que-es-la-quiropraxia/introduccion.jpg"
        imageAlt="Atención quiropráctica de la columna vertebral"
        />
        <MissionVision 
        leftTitle="El Ajuste Quiropráctico"
        leftText="Es un movimiento rápido, preciso y seguro realizado por el profesional sobre la vértebra afectada. Este procedimiento indoloro libera la presión sobre el nervio, reduce la inflamación y restablece la movilidad normal de la articulación de manera inmediata."
        rightTitle="Optimización Nerviosa"
        rightText="Al liberar la columna de subluxaciones, garantizamos que las señales eléctricas del cerebro lleguen correctamente a cada órgano, músculo y tejido del cuerpo. El resultado es un aumento notable de la energía, un sistema inmune más fuerte y un rendimiento físico óptimo."
        />

        <OurValues
        eyebrow="RESULTADOS COMPROBADOS"
        title="Beneficios de Cuidar su Columna"
        separatorImage="/images/logo-separador.png"
        separatorAlt="Separador visual de la sección"
        values={[
            {
            title: "Alivio del Dolor",
            description:
                "Eficaz contra el dolor de espalda, cuello, cabeza, ciática y tensiones musculares crónicas de forma totalmente natural.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Compromiso con el bienestar de cada paciente",
            },
            { 
            title: "Mayor Movilidad",
            description:
                "Restaura el rango de movimiento de las articulaciones, reduciendo la rigidez y promoviendo una postura óptima y equilibrada.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Excelencia y formación profesional",
            },
            {
            title: "Bienestar Integral",
            description:
                "Mejora la calidad del sueño, disminuye el estrés corporal y fortalece la capacidad de respuesta de su sistema inmune.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Integridad y confianza en la atención",
            },
            {
            title: "Prevención Activa",
            description:
                "Evita el desgaste prematuro de las articulaciones (artrosis) y previene futuras lesiones en actividades cotidianas o deportivas.",
            image: "/images/quienes-somos/icon-box-uno.png",
            imageAlt: "Bienestar y hábitos saludables",
            },
        ]}
        />

        <FamilyChiropractic
        eyebrow="CUIDADO PARA TODA LA FAMILIA"
        title="¿Quiénes deben asistir al quiropráctico?"
        subtitle="La quiropraxia es segura y adaptable para personas de todas las edades"
        paragraph="No es necesario sentir dolor para consultar. Al igual que visitamos al dentista para mantener la salud dental, el cuidado de la columna previene interferencias y optimiza la vitalidad del cuerpo antes de que aparezcan los síntomas."
        listTitle="Adaptado a cada etapa de la vida"
        items={[
          "Bebés y niños, con atención adaptada a su etapa de desarrollo.",
          "Adolescentes, durante el crecimiento y los cambios posturales.",
          "Adultos, para el cuidado de la columna y la movilidad.",
          "Adultos mayores, con un abordaje adaptado a sus necesidades.",
        ]}
        image="/images/que-es-la-quiropraxia/familia.jpg"
        imageAlt="Atención quiropráctica para distintas etapas de la vida"
        />

        <FinalBanner
        eyebrow="TU BIENESTAR EMPIEZA ACÁ"
        title="¿Tenés alguna pregunta?"
        titleSecondLine=""
        description="Estamos para ayudarte. Conocé nuestro enfoque o reservá tu turno y empezá a sentir la diferencia."
        descriptionSecondLine=""
        buttonText="Reservar Turno"
        whatsappUrl="https://wa.me/549XXXXXXXXXX"
        />

    </main>
  );
}