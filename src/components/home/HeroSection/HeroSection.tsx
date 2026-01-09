import { ReactNode } from 'react';
import { Link } from 'wouter';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  children?: ReactNode;
  alignment?: 'left' | 'center';
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  children,
  alignment = 'center',
}: HeroSectionProps) {
  const alignmentClass =
    alignment === 'left'
      ? 'md:text-left md:items-start'
      : 'md:text-center md:items-center';

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center py-20 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-primary/40" />
      )}

      {/* Gradient Background (fallback) */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted" />
      )}

      {/* Content */}
      <div className={`container relative z-10 flex flex-col ${alignmentClass}`}>
        {/* Subtitle Badge */}
        {subtitle && (
          <div className="inline-flex items-center gap-2 mb-6 w-fit">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">
              {subtitle}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 max-w-3xl leading-tight">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}

        {/* CTAs */}
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <a className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-center">
                  {primaryCTA.label}
                </a>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <a className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center">
                  {secondaryCTA.label}
                </a>
              </Link>
            )}
          </div>
        )}

        {/* Children (custom content) */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
