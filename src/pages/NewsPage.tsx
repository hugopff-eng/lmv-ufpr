import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { newsItems } from "@/data/labData";

const categoryLabels: Record<string, string> = {
  Publications: "Publicações",
  Awards: "Prêmios",
  Presentations: "Apresentações",
  Events: "Eventos",
  Announcements: "Comunicados",
};

const borderColors: Record<string, string> = {
  Publications: "border-l-primary",
  Awards: "border-l-emerald-500",
  Presentations: "border-l-blue-500",
  Events: "border-l-purple-500",
  Announcements: "border-l-amber-500",
};

const badgeColors: Record<string, string> = {
  Publications: "bg-teal-100 text-teal-700",
  Awards: "bg-emerald-100 text-emerald-700",
  Presentations: "bg-blue-100 text-blue-500",
  Events: "bg-purple-500/10 text-purple-500",
  Announcements: "bg-amber-100 text-amber-700",
};

export default function NewsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="bg-hero py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary-foreground tracking-tighter">Processos Seletivos</h1>
          <p className="text-slate-300 mt-4 max-w-2xl">Acompanhe nossos processos seletivos.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {newsItems.map((news, i) => (
              <Link key={news.slug} to={`/news/${news.slug}`} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow border-l-4 ${borderColors[news.category]}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColors[news.category]}`}>{categoryLabels[news.category] ?? news.category}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{news.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{news.text}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0 group-hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
