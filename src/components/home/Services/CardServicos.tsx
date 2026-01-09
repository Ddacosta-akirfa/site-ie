import { ReactNode } from "react";
import { Link } from "wouter";

interface CardServicoProps {
  icone: ReactNode;
  titulo: string;
  descricao: string;
  funcionalidades?: string[];
  href?: string;
  highlighted?: boolean | undefined;
}

export default function CardServico({
  icone: icon,
  titulo: title,
  descricao: description,
  funcionalidades: features,
  href,
  highlighted = false,
}: CardServicoProps) {
  const baseClasses = `
    relative p-8 rounded-lg transition-all duration-300 h-full flex flex-col
    ${
      highlighted
        ? "bg-secondary text-secondary-foreground shadow-lg scale-105 md:scale-110"
        : "bg-card text-card-foreground border border-border hover:border-secondary hover:shadow-lg"
    }
  `;

  const content = (
    <>
      {/* Icone */}
      <div
        className={`
          w-16 h-16 rounded-lg flex items-center justify-center mb-6
          ${highlighted ? "bg-secondary-foreground/20" : "bg-primary/10"}
        `}
      >
        <div
          className={
            highlighted ? "text-secondary-foreground" : "text-secondary"
          }
        >
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      {/* Description */}
      <p
        className={`mb-6 leading-relaxed ${
          highlighted ? "opacity-95" : "text-foreground/70"
        }`}
      >
        {description}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div
                className={`
                  w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                  ${
                    highlighted
                      ? "bg-secondary-foreground/30"
                      : "bg-secondary/20"
                  }
                `}
              >
                <span className="text-xs font-bold">✓</span>
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {/* {href && (
        <div className="flex items-center gap-2 font-semibold group mt-auto pt-4">
          <span
            className={`
            ${highlighted ? "text-secondary-foreground" : "text-secondary"}
            transition-all
          `}
          >
            Saiba mais
          </span>
          <ArrowRight
            className={`
            w-4 h-4 transition-transform duration-200
            ${highlighted ? "text-secondary-foreground" : "text-secondary"}
            group-hover:translate-x-1
          `}
          />
        </div>
      )} */}
    </>
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={baseClasses}>{content}</a>
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
