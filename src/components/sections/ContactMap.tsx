
type ContactMapProps = {
  address: string;
};

export default function ContactMap({ address }: ContactMapProps) {
  return (
    <section className="w-full bg-[#F8F9FB] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 text-left">
          <span className="text-[13px] font-bold uppercase tracking-wide text-[#4F9F34]">
            ENCONTRANOS
          </span>

          <h2 className="mt-2 text-[28px] font-bold text-[#003652]">
            Cómo llegar
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#5A5A5A] sm:text-base">
            Visitá nuestro consultorio. Podés consultar la ubicación en el mapa.
          </p>
        </div>

        <div className="h-[320px] w-full overflow-hidden rounded-[12px] border border-[#EAEAEA] sm:h-[400px] lg:h-[450px]">
          <iframe
            title="Ubicación del consultorio de Quiropraxia Mauro"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
