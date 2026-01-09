import { Link } from "wouter";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";

export default function Blog() {
  const featuredPost = {
    id: 1,
    title: "Como o Marketing Digital Pode Transformar Seu Negócio em 2024",
    excerpt:
      "Descubra as estratégias mais eficazes de marketing digital que estão revolucionando negócios e como aplicá-las para alavancar seus resultados este ano.",
    image: "/api/placeholder/800/400",
    author: "Maria Silva",
    date: "15 Jan 2024",
    readTime: "8 min de leitura",
    category: "Marketing Digital",
    featured: true,
  };

  const posts = [
    {
      id: 2,
      title: "SEO para Iniciantes: Guia Completo para Rankear no Google",
      excerpt:
        "Aprenda os fundamentos do SEO e como otimizar seu site para aparecer nas primeiras posições do Google.",
      image: "/api/placeholder/400/250",
      author: "João Santos",
      date: "12 Jan 2024",
      readTime: "6 min de leitura",
      category: "SEO",
    },
    {
      id: 3,
      title: "As Tendências de Design Web que Dominarão 2024",
      excerpt:
        "Conheça as principais tendências de design que vão definir a experiência do usuário na web este ano.",
      image: "/api/placeholder/400/250",
      author: "Ana Costa",
      date: "10 Jan 2024",
      readTime: "5 min de leitura",
      category: "Web Design",
    },
    {
      id: 4,
      title: "Google Ads vs Meta Ads: Qual Escolher para Seu Negócio?",
      excerpt:
        "Análise comparativa entre as duas maiores plataformas de ads e quando usar cada uma para maximizar ROI.",
      image: "/api/placeholder/400/250",
      author: "Pedro Oliveira",
      date: "8 Jan 2024",
      readTime: "7 min de leitura",
      category: "Ads",
    },
    {
      id: 5,
      title: "Como Criar Conteúdo que Converte em Vendas",
      excerpt:
        "Estratégias comprovadas para criar conteúdo que não apenas engaja, mas também gera resultados tangíveis.",
      image: "/api/placeholder/400/250",
      author: "Carla Rodrigues",
      date: "5 Jan 2024",
      readTime: "9 min de leitura",
      category: "Content Marketing",
    },
    {
      id: 6,
      title: "Ferramentas Essenciais para Gestão de Redes Sociais",
      excerpt:
        "Conheça as melhores ferramentas para otimizar sua gestão de redes sociais e economizar tempo.",
      image: "/api/placeholder/400/250",
      author: "Ricardo Lima",
      date: "3 Jan 2024",
      readTime: "4 min de leitura",
      category: "Social Media",
    },
  ];

  const categories = [
    "Todos",
    "Marketing Digital",
    "SEO",
    "Web Design",
    "Ads",
    "Content Marketing",
    "Social Media",
    "E-commerce",
  ];

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "Todos" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Dialog>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            subtitle="Blog"
            title="Conhecimento que Transforma"
            description="Artigos, tutoriais e insights sobre marketing digital, desenvolvimento web e estratégias para fazer seu negócio crescer."
          />

          {/* Featured Post */}
          <SectionWrapper>
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                    Em Destaque
                  </Badge>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="mb-4 w-fit">
                    {featuredPost.category}
                  </Badge>

                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Blog Content */}
          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Search */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Buscar</h3>
                  <Input
                    type="search"
                    placeholder="Pesquisar artigos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Categorias</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          activeCategory === category
                            ? "bg-secondary text-secondary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{category}</span>
                          <Tag className="w-4 h-4" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-2">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Receba os melhores conteúdos de marketing digital
                    diretamente no seu email.
                  </p>
                  <div className="space-y-2">
                    <Input placeholder="Seu email" type="email" />
                    <Button className="w-full">Inscrever</Button>
                  </div>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge
                          variant="outline"
                          className="absolute top-3 left-3"
                        >
                          {post.category}
                        </Badge>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                        </div>

                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Ler Mais
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                {filteredPosts.length > 0 && (
                  <div className="text-center mt-8">
                    <Button variant="outline">Carregar Mais Artigos</Button>
                  </div>
                )}

                {/* No Results */}
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-muted-foreground mb-4">
                      Nenhum artigo encontrado para sua busca.
                    </div>
                    <Button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("Todos");
                      }}
                    >
                      Ver Todos os Artigos
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </SectionWrapper>

          {/* CTA Section */}
          <SectionWrapper
            dark
            title="Gostou do Nosso Conteúdo?"
            description="Assine nossa newsletter e receba insights valiosos sobre marketing digital toda semana."
            className="bg-primary text-primary-foreground text-center"
          >
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                />
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Assinar
                </Button>
              </div>
            </div>
          </SectionWrapper>
        </main>

        <Footer />
      </div>
    </Dialog>
  );
}
