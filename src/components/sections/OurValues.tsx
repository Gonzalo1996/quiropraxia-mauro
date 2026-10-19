
import Image from "next/image";

type ValueItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

type OurValuesProps = {
  eyebrow: string;
  title: string;
  separatorImage: string;
  separatorAlt?: string;
  values: ValueItem[];
};

export default function OurValues({
  eyebrow,
  title,
  separatorImage,
  separatorAlt = "",
  values,
}: OurValuesProps) {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-10 text-center md:mb-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4F9F34] sm:text-[13px]">
            {eyebrow}
          </span>

          <h2 className="mt-3 text-[30px] font-bold leading-tight text-[#1A3A5B] sm:text-[36px] md:text-[44px]">
            {title}
          </h2>
        </div>

        {/* Imagen separadora */}
        <div className="relative mx-auto mb-14 flex h-[50px] w-full items-start justify-center overflow-hidden md:mb-20">
          <Image
            src={separatorImage}
            alt={separatorAlt}
            width={1200}
            height={50}
            sizes="100vw"
            className="h-auto max-h-full max-w-full object-contain object-top"
          />
        </div>

        {/* Tarjetas de valores */}
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="flex h-[340px] w-full max-w-[305px] flex-col items-center rounded-[8px] border border-[#eaeaea] bg-white px-4 py-7 text-center"
            >
              <div className="relative mb-5 h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full">
                <Image
                  src={value.image}
                  alt={value.imageAlt}
                  fill
                  sizes="70px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#003652] md:text-[18px]">
                {value.title}
              </h3>

              <p className="mt-4 text-[14px] leading-6 text-[#666666]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}