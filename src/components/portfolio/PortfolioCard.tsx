import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  results?: string[];
  href?: string;
}

export default function PortfolioCard({
  image,
  title,
  category,
  description,
  results,
  href,
}: PortfolioCardProps) {
  const content = (
    <div className="group">
      {/* Image Container */}
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
          {href && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-secondary text-secondary-foreground p-3 rounded-full">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Category Badge */}
        <div className="inline-block">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>

        {/* Results */}
        {results && results.length > 0 && (
          <ul className="space-y-2 pt-4">
            {results.map((result, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <span className="text-secondary font-bold">→</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <a>{content}</a>
      </Link>
    );
  }

  return content;
}
