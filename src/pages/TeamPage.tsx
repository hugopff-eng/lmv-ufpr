import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FadeUp, StaggerContainer, StaggerItem, CardHover } from "@/components/MotionWrappers";
import hugoFraga from "@/assets/hugo-fraga.jpeg";
import lucianaLopes from "@/assets/luciana-lopes.jpg";

interface TeamMember {
  name: string;
  role: string;
  education: string;
  research: string;
  bio?: string;
  email?: string;
  category: string;
  image: string;
}

interface PrincipalInvestigator {
  name: string;
  role: string;
  education: string;
  research: string;
  bio: string;
  email?: string;
  image: string;
  links: { scholar?: string; lattes?: string; orcid?: string };
  metrics?: { citations: number; hIndex: number; i10: number };
}

const principalInvestigators: PrincipalInvestigator[] = [
  {
    name: "Dr. Hugo Pacheco de Freitas Fraga",
    role: "Pesquisador Responsável — Docente DBOT/UFPR",
    education: "Doutor em Ciências / Recursos Genéticos Vegetais",
    research: "Fisiologia Vegetal, Biotecnologia, Morfogênese in vitro, Embriogênese somática, Espécies nativas brasileiras",
    bio: "Docente do Departamento de Botânica da UFPR e pesquisador responsável pela orientação de alunos de graduação e pós-graduação do LMV. Atua em pesquisas voltadas à fisiologia, biotecnologia e morfogênese vegetal, com ênfase em propagação in vitro de espécies nativas e em estudos bioquímicos e moleculares associados ao desenvolvimento vegetal.",
    email: "hugofraga@ufpr.br",
    image: hugoFraga,
    links: {
      scholar: "https://scholar.google.com.br/citations?user=uEWlTycAAAAJ&hl=pt-BR",
      lattes: "http://lattes.cnpq.br/0997968594084455",
      orcid: "https://orcid.org/0000-0002-7363-5213",
    },
    metrics: { citations: 1352, hIndex: 19, i10: 33 },
  },
  {
    name: "Dra. Luciana Lopes Fortes Ribas",
    role: "Pesquisadora Responsável — Docente DBOT/UFPR",
    education: "Doutora em Engenharia Florestal / Nutrição e Crescimento Vegetal",
    research: "Cultura de tecidos vegetais, Micropropagação de orquídeas, Conservação de espécies nativas, Biotecnologia vegetal",
    bio: "Docente do Departamento de Botânica da UFPR e pesquisadora responsável pela orientação de alunos de graduação e pós-graduação do LMV. Coordena estudos sobre micropropagação, germinação assimbiótica e conservação in vitro de orquídeas nativas do Paraná, com foco no desenvolvimento de protocolos sustentáveis de propagação em larga escala.",
    email: "llfribas@ufpr.br",
    image: lucianaLopes,
    links: {
      scholar: "https://scholar.google.com.br/citations?user=wKLzMy4AAAAJ&hl=pt-BR",
      lattes: "http://lattes.cnpq.br/9283357374616431",
      orcid: "https://orcid.org/0000-0003-1099-1090",
    },
    metrics: { citations: 895, hIndex: 19, i10: 30 },
  },
];

// Dados reais dos estudantes em atualização.
const teamMembers: TeamMember[] = [];

const alumni: { name: string; position: string; year: string }[] = [];

const categories = ["Todos", "Pós-doc", "Doutorado e Mestrado", "Graduação"];

function getInitials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2);
}

export default function TeamPage() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const filtered = filter === "Todos" ? teamMembers : teamMembers.filter(m => m.category === filter);
  const grouped = categories.slice(1).map(cat => ({ cat, members: filtered.filter(m => m.category === cat) })).filter(g => g.members.length > 0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section className="bg-hero py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground tracking-tighter">Nossa Equipe</h1>
          <p className="text-slate-300 mt-4 max-w-2xl">Pesquisadores responsáveis e estudantes de graduação e pós-graduação dedicados à fisiologia, biotecnologia e morfogênese vegetal de espécies nativas brasileiras.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* PI Section */}
        <FadeUp>
          <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary">Pesquisadores Responsáveis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {principalInvestigators.map((pi) => (
              <div key={pi.name} className="bg-card rounded-xl shadow-card p-6 lg:p-8 flex flex-col">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 flex justify-center sm:justify-start">
                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-elevated bg-muted">
                      <img src={pi.image} alt={pi.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{pi.name}</h3>
                    <p className="text-primary font-medium text-sm mt-1">{pi.role}</p>
                    <p className="text-xs text-muted-foreground mt-1 font-mono-data">{pi.education}</p>
                    {pi.metrics && (
                      <div className="flex flex-wrap gap-3 mt-3 text-xs font-mono-data">
                        <span className="px-2 py-1 rounded bg-muted text-foreground"><strong>{pi.metrics.citations}</strong> citações</span>
                        <span className="px-2 py-1 rounded bg-muted text-foreground">h-index <strong>{pi.metrics.hIndex}</strong></span>
                        <span className="px-2 py-1 rounded bg-muted text-foreground">i10 <strong>{pi.metrics.i10}</strong></span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{pi.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pi.research.split(", ").map((r) => (
                    <span key={r} className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-medium">{r}</span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border flex flex-wrap gap-x-4 gap-y-2 text-sm">
                  {pi.email && (
                    <a href={`mailto:${pi.email}`} className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline underline-offset-4">
                      <Mail className="h-4 w-4" /> {pi.email}
                    </a>
                  )}
                  {pi.links.lattes && (
                    <a href={pi.links.lattes} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline underline-offset-4">
                      <ExternalLink className="h-4 w-4" /> Lattes
                    </a>
                  )}
                  {pi.links.orcid && (
                    <a href={pi.links.orcid} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline underline-offset-4">
                      <ExternalLink className="h-4 w-4" /> ORCID
                    </a>
                  )}
                  {pi.links.scholar && (
                    <a href={pi.links.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary font-medium hover:underline underline-offset-4">
                      <ExternalLink className="h-4 w-4" /> Google Scholar
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>


        {teamMembers.length > 0 ? (
          <>
            {/* Filters */}
            <FadeUp>
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filter === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeUp>

            {/* Team Grid */}
            {grouped.map(({ cat, members }) => (
              <div key={cat} className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary">{cat}</h3>
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {members.map(member => (
                    <StaggerItem key={member.name}>
                      <CardHover>
                        <button
                          onClick={() => setSelected(member)}
                          className="w-full text-left bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                        >
                          <div className="aspect-square bg-muted relative group overflow-hidden">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <p className="text-secondary-foreground text-sm">{member.research}</p>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-foreground">{member.name}</h4>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                          </div>
                        </button>
                      </CardHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            ))}
          </>
        ) : (
          <FadeUp>
            <p className="text-sm text-muted-foreground">Equipe de estudantes de graduação e pós-graduação em atualização.</p>
          </FadeUp>
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <FadeUp>
            <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-muted-foreground/30 mt-16">Egressos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {alumni.map(a => (
                <div key={a.name} className="bg-card rounded-lg p-5 shadow-card">
                  <h4 className="font-semibold text-foreground">{a.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{a.position}</p>
                  <span className="text-xs text-muted-foreground font-mono-data">Saída {a.year}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        )}
      </div>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                </div>
                <DialogHeader>
                  <DialogTitle>{selected.name}</DialogTitle>
                </DialogHeader>
              </div>
              <p className="text-primary font-medium text-sm">{selected.role}</p>
              {selected.education && <p className="text-xs text-muted-foreground font-mono-data">{selected.education}</p>}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Foco de Pesquisa</h4>
                <p className="text-muted-foreground text-sm">{selected.research}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
