
import Image from "next/image";

const values = [
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
];

export default function OurValues() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-10 text-center md:mb-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4F9F34] sm:text-[13px]">
            PILASTRES DE NUESTRO SERVICIO
          </span>

          <h2 className="mt-3 text-[30px] font-bold leading-tight text-[#1A3A5B] sm:text-[36px] md:text-[44px]">
            Nuestros Valores
          </h2>

        </div>

        {/* Imagen principal */}

        <div className="relative mx-auto mb-14 flex h-[50px] w-full items-start justify-center overflow-hidden rounded-2xl sm:h-[300px] md:mb-20 md:h-[50px]">
        <img
            src="/images/logo-separador.png"
            alt="Los valores que guían la atención en Quiropraxia Mauro"
            className="h-auto max-w-full object-contain"
        />
        </div>


       
        {/* Tarjetas de valores */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
            <article
            key={value.title}
            className="flex h-[340px] w-full max-w-[305px] flex-col items-center rounded-[8px] border border-[#eaeaea] bg-white px-4 py-7 text-center"
            >
            <div className="relative mb-5 h-17 w-17 shrink-0 overflow-hidden rounded-full">
                <Image
                src={value.image}
                alt={value.imageAlt}
                fill
                className="object-cover"
                />
            </div>

            <h3 className="text-xl font-bold text-[#003652] md:text-[18px]">
                {value.title}
            </h3>

            <p className="mt-4 text-[14px] leading-6 text-[#666666] md:text-[14px]">
                {value.description}
            </p>
            </article>
        ))}
        </div>

      </div>
    </section>
  );
}