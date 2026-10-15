
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Nombre del paciente",
    comment:
      "La atención fue muy buena. Me sentí escuchado desde la primera consulta y recibí una explicación clara sobre el tratamiento.",
    image: "/images/testimonio-1.jpg",
  },
  {
    name: "Nombre del paciente",
    comment:
      "Una experiencia muy positiva. Destaco la dedicación, la atención personalizada y la claridad con la que me explicaron cada paso.",
    image: "/images/testimonio-2.jpg",
  },
  {
    name: "Nombre del paciente",
    comment:
      "Excelente atención y profesionalismo. Me sentí acompañado durante todo el proceso y pude resolver muchas de mis dudas.",
    image: "/images/testimonio-3.jpg",
  },
];

export default function Testimonials() {

    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const interval = window.setInterval(() => {
        const firstCard = carousel.querySelector<HTMLElement>(
        ".testimonial-card"
        );

        if (!firstCard) return;

        const styles = window.getComputedStyle(carousel);
        const gap = parseFloat(styles.columnGap) || 0;
        const cardWidth = firstCard.offsetWidth + gap;

        const maxScroll =
        carousel.scrollWidth - carousel.clientWidth;

        if (maxScroll <= 5) return;

        if (carousel.scrollLeft >= maxScroll - 5) {
        carousel.scrollTo({
            left: 0,
            behavior: "smooth",
        });
        } else {
        carousel.scrollBy({
            left: cardWidth,
            behavior: "smooth",
        });
        }
    }, 3500);

    return () => window.clearInterval(interval);
    }, []);

  return (
    <section className="testimonials-section" id="testimonios">
      <header className="testimonials-header services-header">
        <span className="testimonials-eyebrow">
          TESTIMONIOS
        </span>

        <h2>Comentario de nuestros pacientes</h2>

        <div className="testimonials-separator">
          <img
            src="/images/logo-separador.png"
            alt=""
          />
        </div>

        <p>
          Conocé las experiencias de quienes confiaron en
          nosotros y compartieron su camino hacia un mayor
          bienestar.
        </p>
      </header>

      <div className="testimonials-carousel" ref={carouselRef}>
        {testimonials.map((testimonial, index) => (
          <article
            className="testimonial-card"
            key={`${testimonial.name}-${index}`}
          >
            <div className="testimonial-avatar">
              <Image
                src={testimonial.image}
                alt={`Foto de ${testimonial.name}`}
                width={100}
                height={100}
              />
            </div>

            <h3>{testimonial.name}</h3>

            <p>{testimonial.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}