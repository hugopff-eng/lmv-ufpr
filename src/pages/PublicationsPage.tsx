import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FadeUp } from "@/components/MotionWrappers";
import { fetchAllPublications, researchers, type Publicacao } from "@/lib/orcid";

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["orcid-publications"],
    queryFn: fetchAllPublications,
    staleTime: 1000 * 60 * 60, // 1 hora
  });

  const publications = useMemo<Publicacao[]>(() => data ?? [], [data]);

  const years = useMemo(
    () =>
      [...new Set(publications.map((p) => p.year).filter((y): y is number => y !== null))].sort(
        (a, b) => b - a
      ),
    [publications]
  );

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      if (yearFilter && p.year !== yearFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          (p.journal?.toLowerCase().includes(q) ?? false) ||
          p.source.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [publications, search, yearFilter]);

  const noYear = filtered.filter((p) => p.year === null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-hero py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground tracking-tighter">Publicações</h1>
          <p className="text-slate-300 mt-4 max-w-2xl">
            Artigos dos docentes do LMV-UFPR, buscados automaticamente em tempo real a partir de seus perfis ORCID.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin mb-4 text-primary" />
              <p>Carregando publicações...</p>
            </div>
          )}

          {isError && (
            <div className="max-w-xl mx-auto text-center py-16">
              <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-4" />
              <h2 className="text-lg font-bold text-foreground mb-2">Não foi possível carregar as publicações</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Houve um problema ao acessar os dados do ORCID. Você pode consultar os perfis diretamente
                pelos links abaixo.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {researchers.map((r) => (
                  <a
                    key={r.orcid}
                    href={`https://orcid.org/${r.orcid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    {r.name} no ORCID <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {!isLoading && !isError && (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar publicações..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Filtrar por ano</h4>
                    <div className="space-y-1">
                      <button
                        onClick={() => setYearFilter(null)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!yearFilter ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                      >
                        Todos os anos
                      </button>
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => setYearFilter(y)}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-mono-data transition-colors ${yearFilter === y ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted"}`}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* List */}
              <div className="flex-1">
                {filtered.length === 0 ? (
                  <p className="text-muted-foreground">Nenhuma publicação encontrada.</p>
                ) : (
                  <>
                    {years
                      .filter((y) => !yearFilter || y === yearFilter)
                      .map((year) => {
                        const yearPubs = filtered.filter((p) => p.year === year);
                        if (yearPubs.length === 0) return null;
                        return (
                          <div key={year} className="mb-10">
                            <h3 className="text-3xl font-bold text-foreground mb-4 pb-2 border-b-2 border-border font-mono-data">{year}</h3>
                            <div className="space-y-3">
                              {yearPubs.map((p) => (
                                <PublicationCard key={p.putCode} pub={p} />
                              ))}
                            </div>
                          </div>
                        );
                      })}

                    {!yearFilter && noYear.length > 0 && (
                      <div className="mb-10">
                        <h3 className="text-3xl font-bold text-foreground mb-4 pb-2 border-b-2 border-border">Sem data</h3>
                        <div className="space-y-3">
                          {noYear.map((p) => (
                            <PublicationCard key={p.putCode} pub={p} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}

function PublicationCard({ pub }: { pub: Publicacao }) {
  const content = (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-card p-4 rounded-lg shadow-card hover:shadow-card-hover transition-shadow border-l-4 border-primary"
    >
      <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{pub.title}</h4>
      <div className="flex items-center justify-between mt-2 gap-3">
        {pub.journal ? (
          <p className="text-xs text-muted-foreground italic">{pub.journal}</p>
        ) : (
          <span className="text-xs text-muted-foreground">{pub.source}</span>
        )}
        {pub.url && (
          <span className="text-primary text-xs inline-flex items-center gap-1 group-hover:underline underline-offset-4 whitespace-nowrap">
            {pub.doi ? "Ver artigo" : "DOI"} <ExternalLink className="h-3 w-3" />
          </span>
        )}
      </div>
    </motion.div>
  );

  if (pub.url) {
    return (
      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="block group">
        {content}
      </a>
    );
  }
  return <div className="group">{content}</div>;
}
