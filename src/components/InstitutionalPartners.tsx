import logoUfpr from "@/assets/logo-ufpr.png";
import logoPpgBotanica from "@/assets/ppg-botanica.png";

const partners = [
  {
    src: logoUfpr,
    alt: "Universidade Federal do Paraná",
    href: "https://www.ufpr.br",
  },
  {
    src: logoPpgBotanica,
    alt: "Programa de Pós-Graduação em Botânica - UFPR",
    href: "https://www.prppg.ufpr.br/site/ppgbot/pb/",
  },
];

export default function InstitutionalPartners() {
  return (
    <section className="border-t border-border bg-muted py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Vinculação Institucional
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16">
          {partners.map((p) => (
            <a
              key={p.alt}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img src={p.src} alt={p.alt} className="h-16 lg:h-20 w-auto object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
