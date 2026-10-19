
type MissionVisionProps = {
  leftTitle: string;
  leftText: string;
  rightTitle: string;
  rightText: string;
};

export default function MissionVision({
  leftTitle,
  leftText,
  rightTitle,
  rightText,
}: MissionVisionProps) {
  const items = [
    { title: leftTitle, text: leftText },
    { title: rightTitle, text: rightText },
  ];

  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col items-start"
          >
            <h2 className="text-[28px] font-bold text-[#1A3A5B] md:text-[36px]">
              {item.title}
            </h2>

            <span className="mt-4 h-[3px] w-14 rounded-full bg-[#4F9F34]" />

            <p className="mt-6 text-left text-[14px] leading-7 text-[#5A5A5A] md:text-base md:leading-8">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}