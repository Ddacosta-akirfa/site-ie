import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Começa o fade-out
    setFade(true);

    const timeout = setTimeout(() => {
      // Scroll suave para o topo
      window.scrollTo({ top: 0, behavior: "smooth" });
      // Depois do scroll, fade-in
      setFade(false);
    }, 300); // duração do fade

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div
      style={{
        transition: "opacity 300ms ease-in-out",
        opacity: fade ? 0 : 1,
      }}
    />
  );
}
