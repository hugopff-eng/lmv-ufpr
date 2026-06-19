import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, FlaskConical, Microscope, Leaf, Flower2, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeUp, StaggerContainer, StaggerItem, CardHover } from "@/components/MotionWrappers";
import heroImage from "@/assets/hero-molecular.jpg";
import orquideaNativa from "@/assets/projetos/orquidea-nativa-parana.jpg";
import cattleya from "@/assets/projetos/cattleya.webp";
import pleurothallidinae from "@/assets/projetos/pleurothallidinae-dryadella-zebrina.webp";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono-data">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { icon: Users, label: "Pesquisadores ativos", value: 15, suffix: "" },
  { icon: BookOpen, label: "Publicações (últimos 5 anos)", value: 20, suffix: "" },
  { icon: FlaskConical, label: "Projetos de pesquisa", value: 3, suffix: "" },
  { icon: Microscope, label: "Equipamentos multiusuário", value: 5, suffix: "" },
];

const featuredResearch = [
  {
    icon: Leaf,
    title: "Micropropagação de Orquídeas Nativas do Paraná com Potencial Ornamental e Alimentício",
    slug: "micropropagacao-orquideas-nativas-parana",
    description: "As orquídeas nativas do Paraná representam um importante patrimônio da biodiversidade brasileira, reunindo espécies de valor ecológico, ornamental e, em alguns casos, alimentício. Este projeto busca desenvolver e aperfeiçoar protocolos de cultivo in vitro e micropropagação para viabilizar a produção de mudas em larga escala, contribuindo para a conservação e o uso sustentável dessas espécies.",
    image: orquideaNativa,
  },
  {
    icon: Flower2,
    title: "Efeito de Reguladores Vegetais, Poliaminas e Extrato de Algas na Propagação In Vitro de Cattleya",
    slug: "reguladores-vegetais-cattleya",
    description: "As orquídeas do gênero Cattleya estão entre as espécies ornamentais mais valorizadas da floricultura, despertando interesse tanto para a conservação quanto para a produção comercial. Este projeto investiga estratégias para aprimorar sua propagação in vitro por meio do uso de reguladores vegetais, poliaminas e extratos de algas, compostos capazes de influenciar o crescimento e o desenvolvimento das plantas cultivadas em laboratório.",
    image: cattleya,
  },
  {
    icon: Sprout,
    title: "Uso de Fontes de Nitrogênio Orgânico e Ventilação Natural no Cultivo In Vitro de Orquídeas Ornamentais",
    slug: "nitrogenio-ventilacao-cultivo-in-vitro",
    description: "O cultivo in vitro oferece condições altamente controladas para a propagação de plantas, mas pequenas modificações na composição do meio de cultura e no ambiente de crescimento podem influenciar significativamente o desenvolvimento das mudas. Este projeto investiga como diferentes fontes de nitrogênio e a ventilação natural dos recipientes de cultivo afetam o crescimento, a morfogênese e a atividade fotossintética de orquídeas de interesse ornamental.",
    image: pleurothallidinae,
  },
];

const recentNews = [
  { date: "2026", slug: "processo-seletivo-pos-graduacao-botanica-2026", category: "Announcements", text: "Processo seletivo para ingresso na pós-graduação em Botânica" },
];

const categoryColors: Record<string, string> = {
  Awards: "bg-emerald-100 text-emerald-700",
  Publications: "bg-teal-100 text-teal-700",
  Presentations: "bg-blue-100 text-blue-500",
  Events: "bg-purple-500/10 text-purple-500",
  Announcements: "bg-amber-100 text-amber-700",
};

const categoryLabels: Record<string, string> = {
  Publications: "Publicações",
  Awards: "Prêmios",
  Presentations: "Apresentações",
  Events: "Eventos",
  Announcements: "Comunicados",
};

export default function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {/* Hero */}
      <section className="relative bg-hero min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tighter"
            >
              Micropropagação Vegetal e Biotecnologia
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              O LMV desenvolve pesquisas em Fisiologia, Biotecnologia e Morfogênese Vegetal com foco em espécies nativas brasileiras, integrando ensino, pesquisa e formação de novos cientistas na graduação e pós-graduação da UFPR.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <Link to="/research">Conheça a Pesquisa <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/team">Conheça a Equipe</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-foreground">
                    {stat.suffix === "M" ? (
                      <span className="font-mono-data">${stat.value}M</span>
                    ) : (
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeUp>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">Projetos em Andamento</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Nosso laboratório atua na propagação in vitro de plantas e suas aplicações biotecnológicas diversas.
            </p>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResearch.map((project) => (
              <StaggerItem key={project.title}>
                <Link to={`/research/${project.slug}`} className="block group h-full">
                  <CardHover className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <project.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                      <span className="inline-flex items-center text-primary text-sm font-medium mt-4 group-hover:underline underline-offset-4">
                        Saiba mais <ArrowRight className="ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </CardHover>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-foreground">Processos Seletivos</h2>
              <Button variant="outline" asChild>
                <Link to="/news">Ver todas</Link>
              </Button>
            </div>
          </FadeUp>
          <StaggerContainer className="space-y-4">
            {recentNews.map((news) => (
              <StaggerItem key={news.text}>
                <Link to={`/news/${news.slug}`} className="block group">
                  <CardHover className="bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-shadow flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[news.category]}`}>
                          {categoryLabels[news.category] ?? news.category}
                        </span>
                      </div>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">{news.text}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0 group-hover:text-primary transition-colors" />
                  </CardHover>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <FadeUp>
            <div className="bg-cta rounded-2xl p-10 lg:p-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Explore Nossa Pesquisa</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Conheça nossos projetos em micropropagação vegetal e biotecnologia.
              </p>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/research">Ver Projetos <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </motion.div>
  );
}
