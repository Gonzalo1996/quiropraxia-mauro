
export default function MissionVision() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

        {/* Nuestra Misión */}
        <article className="flex flex-col items-start">
        <h2 className="text-[28px] font-bold text-[#1A3A5B] md:text-[36px]">
            Nuestra Misión
        </h2>

        <span className="mt-4 h-[3px] w-14 rounded-full bg-[#4F9F34]" />

        <p className="mt-6 text-left text-[14px] leading-7 text-[#5A5A5A] md:text-base md:leading-8">
            Optimizar la salud y la vitalidad de nuestra comunidad a través
            de ajustes quiroprácticos de precisión, educando sobre la
            importancia de una columna libre de subluxaciones vertebrales
            y promoviendo hábitos de vida saludables de forma preventiva.
        </p>
        </article>

        {/* Nuestra Visión */}
        <article className="flex flex-col items-start">
        <h2 className="text-[28px] font-bold text-[#1A3A5B] md:text-[36px]">
            Nuestra Visión
        </h2>

        <span className="mt-4 h-[3px] w-14 rounded-full bg-[#4F9F34]" />

        <p className="mt-6 text-left text-[14px] leading-7 text-[#5A5A5A] md:text-base md:leading-8">
Consolidarnos como el centro quiropráctico de referencia nacional, reconocido por nuestra excelencia profesional, constante innovación tecnológica en análisis postural, y por ser un espacio donde cada paciente encuentra el camino hacia el máximo bienestar integral.
        </p>
        </article>

      </div>
    </section>
  );
}