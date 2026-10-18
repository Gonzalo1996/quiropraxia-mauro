
import Image from "next/image";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  imagePosition?: string;
};

export default function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  titleHighlight,
  description,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[600px] w-full items-center overflow-hidden md:min-h-[440px] mt-20">
      {/* Imagen de fondo */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: imagePosition }}
        className="object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-[#102A43]/65" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-2xl">
          {/* Texto superior con línea a la derecha */}
          <div className="mb-2 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#4CC493] md:text-[13px]">
              {eyebrow}
            </span>

            <span className="h-[2px] w-12 shrink-0 bg-[#4CC493]" />
          </div>

          {/* Título con dos colores */}
          <h1 className="mb-2 text-4xl font-bold leading-tight sm:text-5xl md:text-[64px]">
            <span className="text-white">{title} </span>
            <span className="text-[#4CC493]">{titleHighlight}</span>
          </h1>

          {/* Descripción */}
          <p className="max-w-xl text-base font-medium leading-8 text-white/100 sm:text-lg md:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}