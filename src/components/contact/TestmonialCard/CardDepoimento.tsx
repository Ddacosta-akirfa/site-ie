import { Star } from "lucide-react";

interface CardDepoimentoProps {
  declaracao: string;
  autor: string;
  funcao: string;
  empresa: string;
  avatar?: string;
  classificacao?: number;
}

export default function CardDepoimento({
  declaracao,
  autor,
  funcao,
  empresa,
  avatar,
  classificacao = 5,
}: CardDepoimentoProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
      {/* Rating Stars */}
      {classificacao > 0 && (
        <div className="flex gap-1 mb-6">
          {Array.from({ length: classificacao }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-lg text-foreground/80 mb-6 leading-relaxed italic">
        "{declaracao}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {avatar && (
          <img
            src={avatar}
            alt={autor}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-primary">{autor}</p>
          <p className="text-sm text-foreground/60">
            {funcao} • {empresa}
          </p>
        </div>
      </div>
    </div>
  );
}
