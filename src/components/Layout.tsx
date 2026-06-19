import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import lmvLogo from "@/assets/lmv-logo.png";
import InstitutionalPartners from "@/components/InstitutionalPartners";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Equipe", path: "/team" },
  { label: "Pesquisa", path: "/research" },
  { label: "Publicações", path: "/publications" },
  { label: "Infraestrutura", path: "/infraestrutura" },
  { label: "Processos Seletivos", path: "/news" },
];

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-3" aria-label="LMV-UFPR — Início">
          <img src={lmvLogo} alt="Logo LMV-UFPR" className="h-11 w-11 object-contain" />
          <span className="hidden lg:inline text-base font-bold text-foreground tracking-tight leading-tight">
            Laboratório de Micropropagação Vegetal
          </span>
          <span className="inline lg:hidden text-base font-bold text-foreground tracking-tight leading-tight">
            LMV<span className="text-muted-foreground font-medium">·</span>UFPR
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 text-muted-foreground hover:text-foreground">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-card p-6">
            <div className="flex items-center gap-3 mb-8">
              <img src={lmvLogo} alt="Logo LMV-UFPR" className="h-12 w-12 object-contain" />
              <span className="text-lg font-bold text-foreground">LMV-UFPR</span>
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4 bg-white rounded-lg p-2 w-fit">
              <img src={lmvLogo} alt="Logo LMV-UFPR" className="h-12 w-12 object-contain" />
              <span className="text-lg font-bold text-slate-900">LMV-UFPR</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              O Laboratório de Micropropagação Vegetal da UFPR atua na propagação in vitro de plantas e suas aplicações biotecnológicas diversas.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Contato</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>Universidade Federal do Paraná</li>
              <li>Setor de Ciências Biológicas</li>
              <li>Departamento de Botânica</li>
              <li>Avenida Coronel Francisco H. dos Santos, 100</li>
              <li>Centro Politécnico – Jardim das Américas</li>
              <li>CEP: 81531-980 – Curitiba (PR), Brasil</li>
              <li>Caixa Postal: 19031</li>
              <li className="pt-1">Fone: +55 41 3361-1762</li>
              <li>E-mails: hugofraga@ufpr.br; llfribas@ufpr.br</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Localização</h4>
            <iframe
              src="https://maps.google.com/maps?q=Avenida%20Coronel%20Francisco%20H.%20dos%20Santos%2C%20100%2C%20Centro%20Polit%C3%A9cnico%2C%20Curitiba%20-%20PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização UFPR Centro Politécnico"
            />
          </div>
        </div>
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-xs text-slate-500">
          © 2026 LMV-UFPR — Laboratório de Micropropagação Vegetal. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>
      <InstitutionalPartners />
      <Footer />
    </div>
  );
}
