
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "¿Qué es la quiropraxia?",
    description:
      "Conocé los fundamentos de la quiropraxia y qué podés esperar de una consulta.",
    image: "/images/blog-quiropraxia.jpg",
  },
  {
    title: "Postura y vida cotidiana",
    description:
      "Descubrí hábitos cotidianos que pueden ayudarte a cuidar tu postura.",
    image: "/images/blog-postura.jpg",
  },
  {
    title: "Columna y sistema nervioso",
    description:
      "Aprendé más sobre la columna vertebral y el funcionamiento del sistema nervioso.",
    image: "/images/blog-columna.jpg",
  },
];

export default function BlogPreview() {
  return (
    <section className="blog-preview">
      <div className="services-header">
        <span className="blog-preview-eyebrow">
          ÚLTIMAS PÚBLICACIONES
        </span>

        <h2>Nuestro Blog</h2>

        <div className="blog-preview-separator">
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

      <div className="blog-preview-grid">
        {articles.map((article) => (
          <Link
            href="/blog"
            className="blog-preview-card"
            key={article.title}
          >
            <div className="blog-preview-image">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 85vw, 33vw"
              />
              <div className="blog-preview-image-overlay" />
              
            </div>

            <div className="blog-preview-card-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
