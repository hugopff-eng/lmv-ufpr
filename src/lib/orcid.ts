// Integração com a API pública do ORCID para buscar, em tempo real, as
// publicações dos docentes do LMV-UFPR a partir de seus perfis.

export const researchers = [
  { name: "Hugo Fraga", orcid: "0000-0002-7363-5213" },
  { name: "Luciana Ribas", orcid: "0000-0003-1099-1090" },
] as const;

export type ResearcherName = (typeof researchers)[number]["name"];

// Tipos de produção aceitos (edite esta lista para incluir/excluir tipos).
export const ALLOWED_WORK_TYPES = [
  "journal-article",
  "book-chapter",
  "conference-paper",
  "book",
  "data-set",
  "preprint",
];

export interface Publicacao {
  putCode: string;
  title: string;
  journal: string | null;
  year: number | null;
  type: string;
  doi: string | null;
  url: string | null;
  source: ResearcherName;
}

const ORCID_API = "https://pub.orcid.org/v3.0";

// Remove tags HTML (ex.: <i>, <sub>) que o ORCID inclui em alguns títulos.
function stripHtml(text: string): string {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractDoi(externalIds: any): string | null {
  const ids = externalIds?.["external-id"] ?? [];
  const doiEntry = ids.find(
    (id: any) => id?.["external-id-type"]?.toLowerCase() === "doi"
  );
  const value = doiEntry?.["external-id-value"];
  return value ? String(value).trim() : null;
}

function extractUrl(externalIds: any, doi: string | null): string | null {
  if (doi) return `https://doi.org/${doi}`;
  const ids = externalIds?.["external-id"] ?? [];
  const withUrl = ids.find((id: any) => id?.["external-id-url"]?.value);
  return withUrl?.["external-id-url"]?.value ?? null;
}

export async function fetchOrcidWorks(
  orcidId: string,
  source: ResearcherName
): Promise<Publicacao[]> {
  try {
    const res = await fetch(`${ORCID_API}/${orcidId}/works`, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      throw new Error(`ORCID respondeu ${res.status} para ${orcidId}`);
    }
    const data = await res.json();
    const groups: any[] = data?.group ?? [];

    return groups
      .map((group): Publicacao | null => {
        const summary = group?.["work-summary"]?.[0];
        if (!summary) return null;

        const type: string = summary?.type ?? "";
        if (!ALLOWED_WORK_TYPES.includes(type)) return null;

        const rawTitle: string = summary?.title?.title?.value ?? "";
        const title = stripHtml(rawTitle);
        if (!title) return null;

        const yearRaw = summary?.["publication-date"]?.year?.value;
        const year = yearRaw ? parseInt(yearRaw, 10) : null;

        const externalIds = summary?.["external-ids"];
        const doi = extractDoi(externalIds);

        return {
          putCode: String(summary?.["put-code"] ?? ""),
          title,
          journal: summary?.["journal-title"]?.value
            ? stripHtml(summary["journal-title"].value)
            : null,
          year: Number.isNaN(year as number) ? null : year,
          type,
          doi,
          url: extractUrl(externalIds, doi),
          source,
        };
      })
      .filter((p): p is Publicacao => p !== null);
  } catch (err) {
    // Repassa o erro para o React Query lidar com o estado de erro na UI.
    throw err instanceof Error ? err : new Error(String(err));
  }
}

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

export async function fetchAllPublications(): Promise<Publicacao[]> {
  const results = await Promise.all(
    researchers.map((r) => fetchOrcidWorks(r.orcid, r.name))
  );
  const all = results.flat();

  // Deduplica por DOI (quando houver) ou por título normalizado.
  const seen = new Map<string, Publicacao>();
  for (const pub of all) {
    const key = pub.doi
      ? `doi:${pub.doi.toLowerCase()}`
      : `title:${normalizeTitle(pub.title)}`;
    if (!seen.has(key)) seen.set(key, pub);
  }

  // Ordena por ano decrescente; itens sem ano vão para o fim.
  return [...seen.values()].sort((a, b) => {
    if (a.year === null && b.year === null) return 0;
    if (a.year === null) return 1;
    if (b.year === null) return -1;
    return b.year - a.year;
  });
}
