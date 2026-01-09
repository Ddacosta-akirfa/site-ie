import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Portfólio", href: "/portfolio" },
    // { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              {APP_LOGO && (
                <img
                  src={APP_LOGO}
                  alt={APP_TITLE}
                  className="h-10 w-10 object-contain"
                />
              )}
              <span className="font-poppins font-bold text-xl hidden sm:inline text-primary">
                {APP_TITLE}
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-sm font-medium text-foreground hover:text-secondary transition-colors">
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contato">
              <a className="px-6 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
                Começar
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* text-emerald-600 */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contato">
              <a
                className="block px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Começar
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
