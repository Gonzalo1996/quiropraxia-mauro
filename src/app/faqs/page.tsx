
import FAQs from "@/components/sections/FAQs";
import PageHero from "@/components/sections/PageHero";

export default function FAQsPage() {
  return (
    <main>
       <PageHero
        image="/images/div.st-hero.png"
        imageAlt="Equipo de Quiropraxia Mauro"
        eyebrow="RESOLVEMOS TUS DUDAS"
        title="Preguntas"
        titleHighlight="frecuentes"
        description="Ofrecemos una atención personalizada, adaptada a tus necesidades y objetivos. Cada tratamiento se ajusta a tu condición y a tu estilo de vida, para que recuperes el movimiento y te sientas mejor."
      />
     <FAQs
        eyebrow="RESOLVIENDO SUS DUDAS"
        title="Sobre la Quiropraxia y su Salud"
        whatsappUrl="https://wa.me/549XXXXXXXXXX"
        questions={[
            {
            question: "¿Qué es exactamente la quiropraxia?",
            answer:
                "La quiropraxia es una profesión de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos del sistema neuro-musculoesquelético, con especial énfasis en la columna vertebral. El quiropráctico realiza ajustes manuales precisos para abordar determinadas alteraciones musculoesqueléticas y mejorar la función y movilidad, según las necesidades de cada persona.",
            },
            {
            question: "¿Qué es exactamente la quiropraxia?",
            answer:
                "La quiropraxia es una profesión de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos del sistema neuro-musculoesquelético, con especial énfasis en la columna vertebral. El quiropráctico realiza ajustes manuales precisos para abordar determinadas alteraciones musculoesqueléticas y mejorar la función y movilidad, según las necesidades de cada persona.",
            },
            {
            question: "¿Qué es exactamente la quiropraxia?",
            answer:
                "La quiropraxia es una profesión de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos del sistema neuro-musculoesquelético, con especial énfasis en la columna vertebral. El quiropráctico realiza ajustes manuales precisos para abordar determinadas alteraciones musculoesqueléticas y mejorar la función y movilidad, según las necesidades de cada persona.",
            },
            {
            question: "¿Qué es exactamente la quiropraxia?",
            answer:
                "La quiropraxia es una profesión de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos del sistema neuro-musculoesquelético, con especial énfasis en la columna vertebral. El quiropráctico realiza ajustes manuales precisos para abordar determinadas alteraciones musculoesqueléticas y mejorar la función y movilidad, según las necesidades de cada persona.",
            },
            {
            question: "¿Qué es exactamente la quiropraxia?",
            answer:
                "La quiropraxia es una profesión de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos del sistema neuro-musculoesquelético, con especial énfasis en la columna vertebral. El quiropráctico realiza ajustes manuales precisos para abordar determinadas alteraciones musculoesqueléticas y mejorar la función y movilidad, según las necesidades de cada persona.",
            },
            {
            question: "¿Qué es exactamente la quiropraxia?",
            answer:
                "La quiropraxia es una profesión de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos del sistema neuro-musculoesquelético, con especial énfasis en la columna vertebral. El quiropráctico realiza ajustes manuales precisos para abordar determinadas alteraciones musculoesqueléticas y mejorar la función y movilidad, según las necesidades de cada persona.",
            },
            {
            question: "¿Qué es exactamente la quiropraxia?",
            answer:
                "La quiropraxia es una profesión de la salud que se enfoca en el diagnóstico, tratamiento y prevención de trastornos del sistema neuro-musculoesquelético, con especial énfasis en la columna vertebral. El quiropráctico realiza ajustes manuales precisos para abordar determinadas alteraciones musculoesqueléticas y mejorar la función y movilidad, según las necesidades de cada persona.",
            },
            // Agregá aquí las demás preguntas.
        ]}
    />
    </main>
  );
}
