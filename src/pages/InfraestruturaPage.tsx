import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FadeUp } from "@/components/MotionWrappers";
import imgEsterilizacao from "@/assets/esterilizacao-e-preparo-de-meios.jpeg";
import imgAnalises from "@/assets/analises-e-documentacao-experimental.jpeg";
import imgCultura from "@/assets/cultura-asseptica.jpeg";
import imgCrescimento from "@/assets/crescimento-in-vitro.jpeg";
import imgCasaVegetacao from "@/assets/casa-de-vegetacao.jpeg";

const equipamentos = [
  {
    image: imgEsterilizacao,
    title: "Esterilização e preparo de meios",
    desc: "Autoclaves, destilador, estufa, balanças, medidor de pH e agitadores.",
  },
  {
    image: imgAnalises,
    title: "Análises e documentação experimental",
    desc: "Microscópios ópticos e estereomicroscópios para avaliação de culturas e experimentos.",
  },
  {
    image: imgCultura,
    title: "Cultura asséptica",
    desc: "Capelas de fluxo laminar e estrutura completa para manipulação estéril.",
  },
  {
    image: imgCrescimento,
    title: "Crescimento in vitro",
    desc: "Salas de cultivo com controle de temperatura, fotoperíodo e iluminação LED.",
  },
  {
    image: imgCasaVegetacao,
    title: "Casa de vegetação",
    desc: "Estrutura para aclimatização e cultivo de plantas com irrigação e iluminação artificial.",
  },
];

export default function InfraestruturaPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-hero py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground tracking-tighter">
            Infraestrutura
          </h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <FadeUp>
            <a
              href="https://pnipe.mcti.gov.br/laboratory/36020"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border mb-12 group"
            >
              <ExternalLink className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Cadastro no PNIPE — Equipamentos Multiusuário
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Acesse o registro oficial do laboratório no Plataforma Nacional de Infraestrutura de Pesquisa.
                </p>
              </div>
            </a>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipamentos.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border h-full flex flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-40 sm:h-44 lg:h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
