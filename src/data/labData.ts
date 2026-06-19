import orquideaNativa from "@/assets/projetos/orquidea-nativa-parana.jpg";
import cattleya from "@/assets/projetos/cattleya.webp";
import pleurothallidinae from "@/assets/projetos/pleurothallidinae-dryadella-zebrina.webp";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const researchProjects = [
  {
    title: "Micropropagação de Orquídeas Nativas do Paraná com Potencial Ornamental e Alimentício",
    slug: "micropropagacao-orquideas-nativas-parana",
    status: "Active" as const,
    team: ["Professores DBOT/UFPR", "Bolsistas IC", "Mestrandos e Doutorandos"],
    funding: "Fomento institucional",
    description: "As orquídeas nativas do Paraná representam um importante patrimônio da biodiversidade brasileira, reunindo espécies de valor ecológico, ornamental e, em alguns casos, alimentício. Este projeto busca desenvolver e aperfeiçoar protocolos de cultivo in vitro e micropropagação para viabilizar a produção de mudas em larga escala, contribuindo para a conservação e o uso sustentável dessas espécies.",
    longDescription: `As orquídeas nativas do Paraná representam um importante patrimônio da biodiversidade brasileira, reunindo espécies de valor ecológico, ornamental e, em alguns casos, alimentício. Este projeto busca desenvolver e aperfeiçoar protocolos de cultivo in vitro e micropropagação para viabilizar a produção de mudas em larga escala, contribuindo para a conservação e o uso sustentável dessas espécies.

As pesquisas abrangem desde a germinação e o estabelecimento assimbiótico das plântulas até as etapas de multiplicação, enraizamento e aclimatização, permitindo compreender aspectos fundamentais do desenvolvimento dessas orquídeas em condições controladas.

Além de gerar conhecimento sobre a biologia e a propagação das espécies estudadas, o projeto contribui para estratégias de conservação ex situ e para a ampliação das possibilidades de utilização sustentável da flora nativa paranaense.`,
    pubs: "",
    image: orquideaNativa,
  },
  {
    title: "Efeito de Reguladores Vegetais, Poliaminas e Extrato de Algas na Propagação In Vitro de Cattleya",
    slug: "reguladores-vegetais-cattleya",
    status: "Active" as const,
    team: ["Professores DBOT/UFPR", "Bolsistas IC", "Mestrandos e Doutorandos"],
    funding: "Fomento institucional",
    description: "As orquídeas do gênero Cattleya estão entre as espécies ornamentais mais valorizadas da floricultura, despertando interesse tanto para a conservação quanto para a produção comercial. Este projeto investiga estratégias para aprimorar sua propagação in vitro por meio do uso de reguladores vegetais, poliaminas e extratos de algas, compostos capazes de influenciar o crescimento e o desenvolvimento das plantas cultivadas em laboratório.",
    longDescription: `As orquídeas do gênero Cattleya estão entre as espécies ornamentais mais valorizadas da floricultura, despertando interesse tanto para a conservação quanto para a produção comercial. Este projeto investiga estratégias para aprimorar sua propagação in vitro por meio do uso de reguladores vegetais, poliaminas e extratos de algas, compostos capazes de influenciar o crescimento e o desenvolvimento das plantas cultivadas em laboratório.

Os estudos avaliam os efeitos desses compostos sobre a multiplicação, o enraizamento e o desenvolvimento das plântulas, buscando compreender os mecanismos envolvidos na resposta das culturas e identificar condições mais eficientes para a produção de mudas.

Além de contribuir para o conhecimento sobre a fisiologia do crescimento in vitro de orquídeas, a pesquisa explora alternativas que possam reduzir a dependência de reguladores sintéticos e ampliar as possibilidades de aplicação de insumos de origem natural em protocolos de micropropagação.`,
    pubs: "",
    image: cattleya,
  },
  {
    title: "Uso de Fontes de Nitrogênio Orgânico e Ventilação Natural no Cultivo In Vitro de Orquídeas Ornamentais",
    slug: "nitrogenio-ventilacao-cultivo-in-vitro",
    status: "Active" as const,
    team: ["Professores DBOT/UFPR", "Bolsistas IC", "Mestrandos e Doutorandos"],
    funding: "Fomento institucional",
    description: "O cultivo in vitro oferece condições altamente controladas para a propagação de plantas, mas pequenas modificações na composição do meio de cultura e no ambiente de crescimento podem influenciar significativamente o desenvolvimento das mudas. Este projeto investiga como diferentes fontes de nitrogênio e a ventilação natural dos recipientes de cultivo afetam o crescimento, a morfogênese e a atividade fotossintética de orquídeas de interesse ornamental.",
    longDescription: `O cultivo in vitro oferece condições altamente controladas para a propagação de plantas, mas pequenas modificações na composição do meio de cultura e no ambiente de crescimento podem influenciar significativamente o desenvolvimento das mudas. Este projeto investiga como diferentes fontes de nitrogênio e a ventilação natural dos recipientes de cultivo afetam o crescimento, a morfogênese e a atividade fotossintética de orquídeas de interesse ornamental.

Os estudos acompanham as plantas desde a germinação assimbiótica até as fases mais avançadas de desenvolvimento, avaliando características morfoanatômicas, pigmentos fotossintéticos e parâmetros fisiológicos relacionados ao desempenho das culturas in vitro.

Além de contribuir para a compreensão dos processos envolvidos no desenvolvimento das orquídeas em ambiente controlado, a pesquisa busca aperfeiçoar as condições de cultivo, fornecendo subsídios para o desenvolvimento de protocolos mais eficientes para a micropropagação de espécies ornamentais.`,
    pubs: "",
    image: pleurothallidinae,
  },
];

export const labMembers = ["Fraga", "Ribas", "Quoirin", "Amano", "Vieira", "Guerra", "Suzuki", "Koene", "Vudala", "Padilha", "Silveira", "Degenhardt", "Bonetti", "Corbellini", "Navarro", "Amatuzi", "Gomes", "Ferreira"];

// Artigos reais do LMV-UFPR (mais recentes primeiro). A lista pode ser
// ampliada com os demais artigos do laboratório conforme forem reunidos.
export const publications = [
  { year: 2021, title: "Efficient use of biomass and extract of the microalga Desmodesmus subspicatus in asymbiotic seed germination and seedling development of the orchid Cattleya warneri", slug: "efficient-use-of-biomass-and-extract-of-the-microalga-desmodesmus-subspicatus-in-asymbiotic-seed-germination-and-seedling-development-of-the-orchid-cattleya-warneri", authors: "Navarro, Q. R.; Corrêa, D. O.; Behling, A.; Noseda, M. D.; Amano, É.; Suzuki, R. M.; Ribas, L. L. F.", journal: "Journal of Applied Phycology, v. 33, 2021", doi: "", citations: 0, featured: true, abstract: "", relatedProject: "" },
  { year: 2020, title: "Improved in vitro development of Epidendrum secundum (Orchidaceae) by using aqueous extract of the seaweed Kappaphycus alvarezii", slug: "improved-in-vitro-development-of-epidendrum-secundum-orchidaceae-by-using-aqueous-extract-of-the-seaweed-kappaphycus-alvarezii", authors: "Amatuzi, J. A.; Vieira, L. N.; Santanna-Santos, B. F.; Noseda, M. D.; Fraga, H. P. F.", journal: "Acta Physiologiae Plantarum, v. 42, p. 136, 2020", doi: "", citations: 0, featured: true, abstract: "", relatedProject: "" },
  { year: 2020, title: "Effect of microalgae Messastrum gracile and Chlorella vulgaris on the in vitro propagation of orchid Cattleya labiata", slug: "effect-of-microalgae-messastrum-gracile-and-chlorella-vulgaris-on-the-in-vitro-propagation-of-orchid-cattleya-labiata", authors: "Corbellini, J. R.; Ribas, L. L. F.; Maia, F. R.; Corrêa, D. O.; Noseda, M. D.; Suzuki, R. M.; Amano, É.", journal: "Journal of Applied Phycology, v. 32, p. 4013-4027, 2020", doi: "", citations: 0, featured: true, abstract: "", relatedProject: "" },
  { year: 2020, title: "An efficient protocol for in vitro propagation of Trichilia pallida Swartz (Meliaceae): a potential tree for natural insecticide production", slug: "an-efficient-protocol-for-in-vitro-propagation-of-trichilia-pallida-swartz-meliaceae-a-potential-tree-for-natural-insecticide-production", authors: "de Souza Prim, P.; de Oliveira, L. F.; Ribas, L. L. F.", journal: "Plant Cell Tissue and Organ Culture, v. 143, p. 1-8, 2020", doi: "", citations: 0, featured: false, abstract: "", relatedProject: "" },
  { year: 2019, title: "In vitro establishment of Bambusa oldhamii Munro from field-grown matrices and molecular identification of endophytic bacteria", slug: "in-vitro-establishment-of-bambusa-oldhamii-munro-from-field-grown-matrices-and-molecular-identification-of-endophytic-bacteria", authors: "Pasqualini, A. P. A.; Schneider, G. X.; Fraga, H. P. F.; Biasi, L. A.; Quoirin, M.", journal: "Pesquisa Agropecuária Tropical, v. 49, e53673, 2019", doi: "", citations: 0, featured: false, abstract: "", relatedProject: "" },
  { year: 2019, title: "Asymbiotic seed germination and in vitro seedling development of Acianthera prolifera (Orchidaceae)", slug: "asymbiotic-seed-germination-and-in-vitro-seedling-development-of-acianthera-prolifera-orchidaceae", authors: "Koene, F. M.; Amano, E.; Ribas, L. L. F.", journal: "South African Journal of Botany, v. 121, p. 83-91, 2019", doi: "", citations: 0, featured: false, abstract: "", relatedProject: "" },
  { year: 2019, title: "Micropropagation of Hadrolaelia grandis through transverse and longitudinal thin cell layer culture", slug: "micropropagation-of-hadrolaelia-grandis-through-transverse-and-longitudinal-thin-cell-layer-culture", authors: "Vudala, S. M.; Padial, A. A.; Ribas, L. L. F.", journal: "South African Journal of Botany, v. 121, p. 76-82, 2019", doi: "", citations: 0, featured: false, abstract: "", relatedProject: "" },
  { year: 2017, title: "Seed storage and asymbiotic germination of Hadrolaelia grandis (Orchidaceae)", slug: "seed-storage-and-asymbiotic-germination-of-hadrolaelia-grandis-orchidaceae", authors: "Vudala, S. M.; Ribas, L. L. F.", journal: "South African Journal of Botany, v. 108, p. 1-7, 2017", doi: "", citations: 0, featured: false, abstract: "", relatedProject: "" },
  { year: 2017, title: "Micropropagation of Aspidosperma polyneuron Mull. Arg. from in vitro germinated seedlings", slug: "micropropagation-of-aspidosperma-polyneuron-mull-arg-from-in-vitro-germinated-seedlings", authors: "Ribas, L. L. F.; Guerra, M. P.; Kulchetscki, L.; Zanette, F.", journal: "Ciência Florestal, v. 27, p. 391-402, 2017", doi: "", citations: 0, featured: false, abstract: "", relatedProject: "" },
  { year: 2016, title: "Glutathione and abscisic acid supplementation influences somatic embryo maturation and hormone endogenous levels during somatic embryogenesis in Podocarpus lambertii", slug: "glutathione-and-abscisic-acid-supplementation-influences-somatic-embryo-maturation-and-hormone-endogenous-levels-during-somatic-embryogenesis-in-podocarpus-lambertii", authors: "Fraga, H. P. F.; Vieira, L. N.; Puttkammer, C. C.; Santos, H. P.; Garighan, J.; Guerra, M. P.", journal: "Plant Science, v. 253, p. 98-106, 2016", doi: "", citations: 0, featured: false, abstract: "", relatedProject: "" },
];

export const newsItems = [
  {
    date: "2026",
    slug: "processo-seletivo-pos-graduacao-botanica-2026",
    category: "Announcements",
    title: "Processo seletivo para ingresso na pós-graduação em Botânica",
    text: "Estão abertas as inscrições para o processo seletivo de ingresso no Programa de Pós-Graduação em Botânica da UFPR.",
    fullText: `O Programa de Pós-Graduação em Botânica da UFPR está com inscrições abertas para o processo seletivo de ingresso em níveis de mestrado e doutorado.

O LMV-UFPR participa ativamente da formação de recursos humanos vinculados ao programa, oferecendo orientação em projetos voltados à propagação in vitro de plantas e suas aplicações biotecnológicas.

**Mais informações e edital completo:**
https://www.prppg.ufpr.br/site/ppgbot/pb/`,
  },
];
