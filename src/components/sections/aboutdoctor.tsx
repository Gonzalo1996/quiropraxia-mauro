
import Image from "next/image";

const specialties = [
  "Ajuste de Columna Vertebral",
  "Prevención de Lesiones",
  "Quiropraxia Deportiva",
  "Posturología Clínica",
];

export default function AboutDoctor() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

        {/* Fotografía del profesional */}
        <div className="flex justify-center">
          <div className="relative h-[400px] w-full max-w-[320px] overflow-hidden rounded-2xl sm:h-[450px] sm:max-w-[360px] md:h-[500px] md:max-w-[400px]">
            <Image
              src="/images/mauricio-cantero.jpg"
              alt="Dr. Mauricio Cantero, quiropráctico"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Información profesional */}
        <div className="w-full">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4F9F34] sm:text-[13px]">
            Quiropráctico principal y fundador
          </span>

          <h2 className="mt-4 text-[32px] font-bold leading-tight text-[#1A3A5B] md:text-[44px]">
            Dr. Mauricio Cantero
          </h2>

          <p className="mt-3 text-[14px] font-medium text-[#5A5A5A] md:text-base">
            Matrícula Profesional M.N. 124590
          </p>

          <div className="my-6 h-px w-full bg-[#eaeaea]" />

          <p className="text-[14px] leading-7 text-[#5A5A5A] md:text-base md:leading-8">
            El Dr. Mauricio Cantero es egresado con honores de la
            Universidad de Buenos Aires y se especializó en Quiropraxia
            Deportiva y Posturología Clínica en centros de formación de
            renombre internacional. Su enfoque terapéutico integra los
            métodos de ajuste manual más avanzados y el análisis
            biomecánico asistido por computadora.
          </p>

          <h3 className="mt-8 text-[20px] font-bold text-[#1A3A5B] md:text-2xl">
            Áreas de Especialización
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-[#eaeaea] bg-[#f8faf8] px-4 py-2 text-[12px] font-medium text-[#5A5A5A] sm:text-[13px]"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}