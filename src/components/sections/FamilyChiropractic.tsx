
import Image from "next/image";

type FamilyChiropracticProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraph: string;
  listTitle: string;
  items: string[];
  image: string;
  imageAlt: string;
};

export default function FamilyChiropractic({
  eyebrow,
  title,
  subtitle,
  paragraph,
  listTitle,
  items,
  image,
  imageAlt,
}: FamilyChiropracticProps) {
  return (
    <section className="w-full bg-[#F8F9FB] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 min-[1000px]:grid-cols-[400px_minmax(0,1fr)] min-[1000px]:gap-14">

        {/* Imagen izquierda */}
        <div className="order-2 flex w-full items-center justify-start min-[1000px]:order-1">
          <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[12px]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 999px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Contenido derecho */}
        <div className="order-1 flex w-full flex-col justify-center text-left min-[1000px]:order-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#4F9F34] sm:text-[14px]">
            {eyebrow}
          </span>

          <h2 className="mt-1 text-[28px] font-bold leading-tight text-[#003652] sm:text-[32px] lg:text-[35px]">
            {title}
          </h2>

          <p className="mt-1 text-base font-semibold leading-7 text-[#666666] sm:text-[16px]">
            {subtitle}
          </p>

          {/* Separador gris */}
          <div className="my-5 h-px w-full bg-[#EAEAEA]" />

          <p className="text-base leading-7 text-[#666666] sm:text-[15px] sm:leading-6">
            {paragraph}
          </p>

          <h3 className="mt-7 text-lg font-bold text-[#1A3A5B] sm:text-xl">
            {listTitle}
          </h3>

          {/* Lista con checks */}
          <ul className="mt-5 flex flex-col gap-4">
            {items.map((item, index) => (
              <li key={`${item}-${index}`} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1CAE58]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 10 3.2 3.2L15 6.5"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span className="text-sm leading-7 text-[#5A5A5A] sm:text-14px font-regular text-[#436372]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}