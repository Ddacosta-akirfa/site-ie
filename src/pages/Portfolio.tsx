import { Link } from "wouter";
import { ExternalLink, Eye, Github, ArrowRight } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button/button";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [projects, setProjects] = useState<
    {
      id: number;
      name: string;
      category: string;
      description: string;
      stack: string[];
      link: string;
      image?: string;
    }[]
  >([]);

  const [activeCategory, setActiveCategory] = useState("Todos");

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("http://localhost:3001/api/v1/portfolios");
        const json = await response.json();
        if (json.success) {
          setProjects(json.data);
        }
      } catch (error) {
        console.error("Erro ao buscar projectos:", error);
      }
    }
    fetchProjects();
  }, []);

  // Extrair categorias únicas dinamicamente
  const Categories = [
    "Todos",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          subtitle="Nosso Trabalho"
          title="Portfólio de Projectos"
          description="Conheça alguns dos projectos incríveis que desenvolvemos para nossos clientes. Cada trabalho é único e feito sob medida para atender necessidades específicas."
        />

        {/* Categories Filter */}
        <SectionWrapper>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {Categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {capitalizeWords(category)}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.description && (
                    <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                      Destaque
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    <Button size="sm" variant="secondary" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-sky-900 flex items-center gap-1"
                    >
                      Ver projecto <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* CTA Section */}
        <SectionWrapper
          dark
          title="Tem um Projecto em Mente?"
          description="Vamos conversar sobre como podemos transformar sua ideia em realidade."
          className="bg-primary text-primary-foreground text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Iniciar Projecto
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:contato@iemarketing.com.br">Enviar Email</a>
            </Button>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );

  function capitalizeWords(text: string) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
}
