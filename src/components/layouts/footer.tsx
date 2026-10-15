
import Image from "next/image";
import Link from "next/link";

const navegacion = [
  { nombre: "Inicio", href: "/#inicio" },
  { nombre: "Quiénes Somos", href: "/quienes-somos" },
  {
    nombre: "¿Qué es la quiropraxia?",
    href: "/que-es-la-quiropraxia",
  },
  { nombre: "Servicios", href: "/servicios" },
];

const informacion = [
  { nombre: "Testimonios", href: "/#testimonios" },
  { nombre: "FAQs", href: "/faqs" },
  { nombre: "Blog", href: "/blog" },
];

const redesSociales = [
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/",
    icono: "IG",
  },
  {
    nombre: "Facebook",
    href: "https://www.facebook.com/",
    icono: "f",
  },
  {
    nombre: "TikTok",
    href: "https://www.tiktok.com/",
    icono: "♪",
  },
  {
    nombre: "YouTube",
    href: "https://www.youtube.com/",
    icono: "▶",
  },
];

function TituloColumna({ children }: { children: string }) {
  return (
    <div className="mb-6 w-full">
      <h3 className="text-lg text-[20px] font-bold text-[#4F9F34]">
        {children}
      </h3>

      <div className="mt-3 h-0.5 w-36 rounded-full bg-[#eaeaea]" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate w-full overflow-hidden">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/footer.st-site-footer.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Capa oscura para mejorar la legibilidad */}
      <div className="absolute inset-0 -z-10" />

      {/* Contenido principal */}
      <div className="px-5 py-14 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Columna 1: Marca y redes sociales */}
          <div className="flex flex-col items-start footer-text">
            <Link
              href="/#inicio"
              aria-label="Quiropraxia Mauro - Inicio"
            >
              <img
                src="/images/logo.png"
                alt="Quiropraxia Mauro"
              />
            </Link>

            <p className="max-w-xs text-left text-sm leading-7 text-[#666666]">
                Lorem ipsum dolor sit consectet
                adipisicing sed do eiusmod temp
                incididunt ut labore. Lorem Ipsum is
                simply dummy.
            </p>

            <div className="mt-6 flex items-center justify-start gap-3">
              {redesSociales.map((red) => (
                <a
                  key={red.nombre}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${red.nombre}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-sm font-bold text-white transition-colors duration-300 hover:border-[#4F9F34] hover:bg-[#4F9F34]"
                >
                  {red.icono}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="flex flex-col items-start footer-text">
            <TituloColumna>Navegación</TituloColumna>

            <ul className="flex flex-col items-start gap-3">
              {navegacion.map((item) => (
                <li key={item.nombre}>
                  <Link
                    href={item.href}
                    className="footer-text text-left text-sm leading-6 text-[#666666] transition-colors duration-300 hover:text-[#4F9F34]"
                  >
                    {item.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div className="flex flex-col items-start">
            <TituloColumna>Información</TituloColumna>

            <ul className="flex flex-col items-start gap-4">
              {informacion.map((item) => (
                <li key={item.nombre}>
                  <Link
                    href={item.href}
                    className="footer-text text-left text-sm leading-6 text-[#666666] transition-colors duration-300 hover:text-[#4F9F34]"
                  >
                    {item.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="flex flex-col items-start">
            <TituloColumna>Contacto</TituloColumna>

            <div className="footer-text flex flex-col items-start gap-5 text-left text-sm leading-6 text-white/80">

              <div>
                <p className="mb-1 font-semibold text-[#666666]">
                  Dirección
                </p>
                <p className="text-[#666666] ">Agregar dirección del consultorio</p>
              </div>

              <div>
                <p className="mb-1 font-bold text-[#666666]">
                  Email
                </p>
                <a
                  href="mailto:contacto@ejemplo.com"
                  className="break-all transition-colors text-[#666666]  hover:text-[#4F9F34]"
                >
                  contacto@ejemplo.com
                </a>
              </div>

              <div>
                <p className="mb-1 font-semibold text-[#666666] ">
                  Teléfono
                </p>
                <a
                  href="tel:+540000000000"
                  className="transition-colors text-[#666666] hover:text-[#4F9F34]"
                >
                  Agregar teléfono
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Pie inferior */}
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 pt-6">
          <p className="text-center text-xs leading-6 text-[#666666] footer-text mb-3">
            © {new Date().getFullYear()} Quiropraxia Mauro.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
