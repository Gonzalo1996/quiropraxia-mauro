
type FinalBannerProps = {
  eyebrow: string;
  title: string;
  titleSecondLine?: string;
  description: string;
  descriptionSecondLine?: string;
  buttonText: string;
  whatsappUrl: string;
};

export default function FinalBanner({
  eyebrow,
  title,
  titleSecondLine,
  description,
  descriptionSecondLine,
  buttonText,
  whatsappUrl,
}: FinalBannerProps) {
  return (
    <section className="flex min-h-[246px] w-full items-center bg-[#1A3A5B] px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
        {/* Textos */}
        <div className="flex flex-col justify-center text-left">
          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4F9F34] sm:text-[13px]">
            {eyebrow}
          </span>

          <h2 className="mt-3 text-[28px] font-bold leading-tight text-white sm:text-[34px] md:text-[40px]">
            {title}
            {titleSecondLine && (
              <>
                <br className="hidden sm:block" /> {titleSecondLine}
              </>
            )}
          </h2>

          <p className="mt-4 max-w-2xl text-[14px] leading-6 text-white/85 sm:text-base">
            {description}
            {descriptionSecondLine && (
              <>
                <br className="hidden sm:block" /> {descriptionSecondLine}
              </>
            )}
          </p>
        </div>

        {/* Botón */}
        <div className="flex items-center justify-start md:justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[50px] w-[192px] items-center justify-center rounded-[8px] bg-[#4F9F34] px-7 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#40832A] sm:text-base"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}