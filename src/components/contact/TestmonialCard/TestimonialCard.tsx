import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex gap-1 mb-6">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-secondary text-secondary"
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-lg text-foreground/80 mb-6 leading-relaxed italic">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-foreground/60">
            {role} • {company}
          </p>
        </div>
      </div>
    </div>
  );
}
