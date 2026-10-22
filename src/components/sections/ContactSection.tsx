
import Image from "next/image";
import ContactForm from "@/components/ui/contact-form";

type ContactSectionProps = {
  logo: string;
  backgroundImage: string;
  instagramUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  tiktokUrl: string;
};

export default function ContactSection({
  logo,
  backgroundImage,
  instagramUrl,
  facebookUrl,
  youtubeUrl,
  tiktokUrl,
}: ContactSectionProps) {
  const socialLinks = [
    {
      name: "Instagram",
      url: instagramUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: facebookUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4Z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: youtubeUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M23.2 7a3 3 0 0 0-2.1-2.1C19.2 4.4 12 4.4 12 4.4s-7.2 0-9.1.5A3 3 0 0 0 .8 7 31 31 0 0 0 .3 12a31 31 0 0 0 .5 5 3 3 0 0 0 2.1 2.1c1.9.5 9.1.5 9.1.5s7.2 0 9.1-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      url: tiktokUrl,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M19.6 7.4a6.2 6.2 0 0 1-3.8-1.3v8.2a6.1 6.1 0 1 1-5.3-6V12a2.4 2.4 0 1 0 1.8 2.3V2h3.5a6.2 6.2 0 0 0 3.8 5.4v0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden px-6 py-16 md:px-10 md:py-20">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Capa para mejorar el contraste */}
      <div className="absolute inset-0 z-0 " />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 min-[1000px]:grid-cols-2 min-[1000px]:gap-16">
        {/* Izquierda: logo y redes sociales */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-full flex justify-center">
            <img
              src={logo}
              alt="Logo de Quiropraxia Mauro"
              className="object-contain"
            />
          </div>

          <p className="mt-5 max-w-sm font-medium text-base leading-6 text-[#003652]">
            Conectá con nosotros y conocé más sobre nuestro trabajo en
            nuestras redes sociales.
          </p>

          <div className="mt-7 flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#4F9F34] transition-colors duration-300 hover:bg-[#4F9F34] hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Derecha: formulario reutilizable */}
        <div className="w-full min-w-0 rounded-xl p-5  sm:p-8">
            <ContactForm />
        </div>
          
      </div>
    </section>
  );
}
