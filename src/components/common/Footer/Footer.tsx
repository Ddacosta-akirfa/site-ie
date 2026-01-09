import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [companyData, setCompanyData] = useState<{
    linkedin: string;
    instagram: string;
    facebook: string;
    phone: string;
    email: string;
    address: string;
  } | null>(null);

  useEffect(() => {
    async function fetchCompanyData() {
      try {
        const response = await fetch("http://localhost:3001/api/v1/company");
        const json = await response.json();
        if (json.success) {
          const data = json.data;
          setCompanyData({
            linkedin: data.linkedin,
            instagram: data.instagram,
            facebook: data.facebook,
            phone: data.phone,
            email: data.email,
            address: data.address,
          });
        }
      } catch (error) {
        console.error("Erro ao buscar dados da empresa:", error);
      }
    }
    fetchCompanyData();
  }, []);

  const footerLinks = {
    produto: [
      { label: "Serviços", href: "/servicos" },
      { label: "Portfólio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Preços", href: "/precos" },
    ],
    empresa: [
      { label: "Sobre Nós", href: "/sobre" },
      { label: "Contacto", href: "/contato" },
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Termos de Serviço", href: "/termos" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: companyData?.linkedin || "#", label: "LinkedIn" },
    {
      icon: Instagram,
      href: companyData?.instagram || "#",
      label: "Instagram",
    },
    { icon: Facebook, href: companyData?.facebook || "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">IE Marketing</h3>
            <p className="text-sm text-primary-foreground/80 mb-6">
              Estratégia, criatividade e tecnologia para impulsionar seu
              crescimento digital.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              {footerLinks.produto.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${
                    companyData?.email || "contacto@iemarketing.com.ao"
                  }`}
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {companyData?.email || "contacto@iemarketing.com.ao"}
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${companyData?.phone || "+244943585590"}`}
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {companyData?.phone || "(+244) 943585590"}
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  {companyData?.address || "Cidade do Huambo, Huambo, Angola"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} IE Marketing. Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ para impulsionar seu crescimento digital.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
