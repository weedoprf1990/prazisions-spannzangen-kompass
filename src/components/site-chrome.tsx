import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Unternehmen" },
  { to: "/spannzangen", label: "Präzisions Spannzangen" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-steel/95 text-primary-foreground backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-extrabold tracking-tight">FERRER</span>
          <span className="font-mono text-xs text-signal">ITS</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className="rounded-sm px-3 py-2 text-primary-foreground/70 transition-colors hover:text-primary-foreground data-[status=active]:text-signal"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-steel text-primary-foreground/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:justify-between">
        <p>
          <span className="font-display font-bold text-primary-foreground">Ferrer ITS</span> –
          Industrial Trade &amp; Services. Präzisions Spannzangen von Tecnopinz, Swiss Made.
        </p>
        <p className="font-mono text-xs">© {new Date().getFullYear()} Ferrer ITS</p>
      </div>
    </footer>
  );
}

export function CtaBand() {
  return (
    <section className="bg-signal text-signal-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold">Die passende Spannzange für Ihre Anwendung?</h2>
          <p className="mt-2 max-w-xl">Schildern Sie uns Ihre Anforderung – wir finden die beste Lösung.</p>
        </div>
        <Link
          to="/kontakt"
          className="rounded-sm bg-steel px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          Anfrage senden
        </Link>
      </div>
    </section>
  );
}
