import { ReactNode } from "react";

interface SectionWrapperProps {
  title?: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionWrapper({
  title,
  subtitle,
  description,
  children,
  className = "",
  centered = true,
  dark = false,
}: SectionWrapperProps) {
  return (
    <section
      className={`py-20 md:py-28 ${
        dark ? "bg-primary text-primary-foreground" : "bg-background"
      } ${className}`}
    >
      <div className="container">
        {/* Header */}
        {(title || subtitle || description) && (
          <div
            className={`mb-16 ${
              centered ? "max-w-3xl mx-auto text-center" : ""
            }`}
          >
            {subtitle && (
              <div className="inline-flex items-center gap-2 mb-4 w-fit">
                <div
                  className={`w-2 h-2 rounded-full ${
                    dark ? "bg-secondary" : "bg-secondary"
                  }`}
                />
                <span
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    dark ? "text-secondary" : "text-primary"
                  }`}
                >
                  {subtitle}
                </span>
              </div>
            )}

            {title && (
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
                  dark ? "text-primary-foreground" : "text-primary"
                }`}
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                className={`text-lg leading-relaxed ${
                  dark ? "text-primary-foreground/80" : "text-foreground/70"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
