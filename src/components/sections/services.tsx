"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Quiropraxia",
    subtitle: "Cuidado y bienestar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/servicio-uno.png",
  },
  {
    id: 2,
    title: "Columna Vertebral",
    subtitle: "Movimiento y salud",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/servicio-uno.png",
  },
  {
    id: 3,
    title: "Sistema Nervioso",
    subtitle: "Equilibrio y funcionamiento",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/servicio-uno.png",
  },
  {
    id: 4,
    title: "Dolor y Lesiones",
    subtitle: "Acompañamiento personalizado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/servicio-uno.png",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="services">

      {/* ENCABEZADO */}
      <div className="services-header">

        <span>SERVICIOS</span>

        <h2>Quiropraxia según tus necesidades</h2>
      {/*
        <p className="services-subtitle">
          Un enfoque personalizado para acompañarte en tu bienestar.
        </p>
      */
      }
        {/* LÍNEA + LOGO + LÍNEA */}
        <div className="services-divider">

          <img
            src="/images/logo-separador.png"
            alt=""
          />

        </div>

        <p className="services-intro">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum the industry's standard dummy text.
        </p>

      </div>

      {/* LÍNEA GRIS */}
      <div className="services-line"></div>

      {/* TARJETAS */}
      <div className="services-cards">

        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            className={`service-card ${
              activeService.id === service.id ? "active" : ""
            }`}
            onClick={() => setActiveService(service)}
          >
            <div className="service-card-image">
              {/*
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
              />
              */}
            </div>

            <div className="service-card-title">
              <h3>{service.title}</h3>
            </div>
          </button>
        ))}

      </div>

      {/* CONTENIDO DEL SERVICIO */}
      <div className="service-detail">

        {/* IMAGEN */}
        <div className="service-detail-image">
          <Image
            src={activeService.image}
            alt={activeService.title}
            width={600}
            height={450}
          />
        </div>

        {/* TEXTOS */}
        <div className="service-detail-content">

          <h3>{activeService.title}</h3>

          <h4>{activeService.subtitle}</h4>

          <p>{activeService.description}</p>

          <Button className="button hero-button-whatsapp"
            href="/servicios"
            variant="primary"
          >
            Ver más
          </Button>

        </div>

      </div>

    </section>
  );
}