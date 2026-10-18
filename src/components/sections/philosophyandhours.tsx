
import BusinessHours from "@/components/ui/business-hours";

export default function PhilosophyAndHours() {
  return (
    <section className="w-full bg-[#f8faf8] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

        {/* Columna izquierda: Nuestra filosofía */}
        <div className="flex flex-col justify-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4F9F34] sm:text-[13px]">
              Nuestra filosofía
            </span>

          </div>

          <h2 className="text-[30px] font-bold leading-tight text-[#1A3A5B] sm:text-[36px] md:text-[42px]">
            Pasión por el bienestar integral y el equilibrio del sistema nervioso
          </h2>

          <p className="mt-6 text-[14px] leading-7 text-[#5A5A5A] md:text-base md:leading-8">
            En nuestra clínica creemos que la quiropraxia es mucho más que
            aliviar un dolor de espalda momentáneo. Se trata de desbloquear
            la capacidad natural de autocuración de su organismo, asegurando
            que la comunicación entre su cerebro y el resto de su cuerpo
            fluya sin interferencias.
          </p>

          <p className="mt-4 text-[14px] leading-7 text-[#5A5A5A] md:text-base md:leading-8">
            Liderados por el Dr. Mauricio Cantero, nos dedicamos a ofrecer
            un enfoque clínico riguroso, seguro y de alta calidez humana
            para personas de todas las edades.
          </p>
        </div>

        {/* Columna derecha: Horarios existentes */}
        <div className="flex w-full justify-center">
          <div className="w-full max-w-[480px]">
            <BusinessHours phone="(+01) - 234 567 890"/>
          </div>
        </div>

      </div>
    </section>
  );
}