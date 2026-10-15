
import Image from "next/image";

interface FeatureCardProps {
  imageSrc?: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  imageSrc,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="feature-card">
      {imageSrc ? (
        <div className="feature-card-icon">
          <Image
            src={imageSrc}
            alt={title}
            width={64}
            height={64}
            className="feature-card-image"
          />
        </div>
      ) : (
        <div
          className="feature-card-icon feature-card-placeholder"
          aria-hidden="true"
        >
          <span />
        </div>
      )}

      <h3 className="feature-card-title">{title}</h3>

      <p className="feature-card-description">
        {description}
      </p>
    </article>
  );
}