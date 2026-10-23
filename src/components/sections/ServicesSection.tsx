
"use client";

import Image from "next/image";
import { useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  benefits: string[];
};

const services: Service[] = [
  {
    id: "quiropraxia",
    title: "Quiropraxia",
    description:
      "Un enfoque profesional orientado al cuidado de la columna vertebral y al funcionamiento del sistema nervioso, con una atención adaptada a cada persona.",
    image: "/images/servicios/quiropraxia.jpg",
    icon: "/images/servicios/icono-quiropraxia.png",
    benefits: [
      "Evaluación individualizada",
      "Atención adaptada a cada persona",
      "Abordaje profesional de la columna vertebral",
      "Seguimiento personalizado",
    ],
  },
  {
    id: "deportiva",
    title: "Quiropraxia Deportiva",
    description:
      "Atención orientada a las necesidades de las personas que realizan actividad física, considerando sus objetivos, movimientos y exigencias deportivas.",
    image: "/images/servicios/deportiva.jpg",
    icon: "/images/servicios/icono-deportiva.png",
    benefits: [
      "Evaluación de las necesidades deportivas",
      "Atención personalizada",
      "Acompañamiento en la actividad física",
      "Seguimiento según cada objetivo",
    ],
  },
  {
    id: "posturologia",
    title: "Posturología",
    description:
      "Un abordaje orientado a evaluar la postura y comprender cómo se relaciona con los movimientos y las necesidades particulares de cada persona.",
    image: "/images/servicios/posturologia.jpg",
    icon: "/images/servicios/icono-posturologia.png",
    benefits: [
      "Evaluación postural individual",
      "Análisis de los patrones de movimiento",
      "Atención según las necesidades personales",
      "Seguimiento profesional",
    ],
  },
];

type ServicesSectionProps = {
  whatsappNumber?: string;
};

export default function ServicesSection({
  whatsappNumber = "549XXXXXXXXXX",
}: ServicesSectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState(
    services[0].id
  );

  const selectedService =
    services.find((service) => service.id === selectedServiceId) ??
    services[0];

  const whatsappMessage = encodeURIComponent(
    `Hola, quisiera solicitar un turno para el servicio de ${selectedService.title}.`
  );

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">

        {/* Tarjetas de servicios */}
        <div className="mb-12 flex w-full justify-center">
        <div
            className="flex w-fit max-w-full gap-4 overflow-x-auto px-1 py-1
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden"
        >
            {services.map((service) => {
            const isSelected = selectedServiceId === service.id;

            return (
                <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                aria-pressed={isSelected}
                aria-label={`Ver servicio: ${service.title}`}
                className={`group flex h-[174px] w-[184px] shrink-0
                    flex-col items-center justify-center gap-2 rounded-lg
                    px-3 py-3 transition-colors duration-200 ${
                    isSelected
                        ? "bg-[#003652] text-white"
                        : "bg-[#E9F8FE] text-[#003652] hover:bg-[#003652] hover:text-white"
                    }`}
                >
                <div className="relative h-[62px] w-[62px] shrink-0">
                    <Image
                    src={service.icon}
                    alt=""
                    fill
                    sizes="62px"
                    className="object-contain"
                    />
                </div>

                <span className="text-center text-sm font-semibold leading-tight">
                    {service.title}
                </span>

                {/* Flecha con círculo transparente y borde blanco */}
                <span className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border border-transparent bg-transparent transition-colors border-white">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                    </svg>
                </span>
                </button>
            );
            })}
        </div>
        </div>


        {/* Contenido dinámico del servicio */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_580px] lg:gap-12">
          {/* Texto a la izquierda */}
          <div className="min-w-0">
            {/* Ruta dinámica */}
            <div
              aria-label="Ruta de navegación"
              className="mb-7 flex flex-wrap items-center gap-2 text-sm"
            >
              <span className="text-[#5A5A5A]">
                Servicios
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>

              <span className="font-medium text-[#003652]">
                {selectedService.title}
              </span>
            </div>

            <span className="mb-3 block text-sm font-bold tracking-[0.12em] text-[#4F9F34]">
              NUESTRO SERVICIO
            </span>

            <h2
              aria-live="polite"
              className="mb-5 text-3xl font-bold leading-tight text-[#003652] md:text-4xl"
            >
              {selectedService.title}
            </h2>

            <p className="mb-7 text-base leading-7 text-[#5A5A5A]">
              {selectedService.description}
            </p>

            {/* Beneficios */}
            <ul className="mb-8 flex flex-col gap-4">
              {selectedService.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-full bg-[#4F9F34]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <span className="text-sm leading-6 text-[#5A5A5A] md:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Botón de WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#4F9F34] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3D8129]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
              </svg>

              Solicitar turno por WhatsApp
            </a>
          </div>

          {/* Imagen dinámica a la derecha */}
          <div className="relative aspect-[580/464] w-full overflow-hidden rounded-[14px]">
            <Image
              key={selectedService.image}
              src={selectedService.image}
              alt={selectedService.title}
              fill
              sizes="(max-width: 1023px) 100vw, 580px"
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}