
import Image from "next/image";

type ChiropracticIntroductionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export default function ChiropracticIntroduction({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
}: ChiropracticIntroductionProps) {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 min-[1000px]:grid-cols-[minmax(0,780px)_440px] min-[1000px]:justify-between">
        {/* Columna izquierda: contenido */}
        <div className="flex flex-col justify-center text-left">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4F9F34] sm:text-[14px]">
            {eyebrow}
          </span>

          <h2 className="mt-4 text-[28px] font-bold leading-tight text-[#1A3A5B] sm:text-[32px] lg:text-[35px]">
            {title}
          </h2>

          <div className="mt-6 space-y-4 text-[15px] font-regular leading-7 text-[#5A5A5A] sm:text-base sm:leading-7">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="flex w-full items-center justify-start">
          <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-[12px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}