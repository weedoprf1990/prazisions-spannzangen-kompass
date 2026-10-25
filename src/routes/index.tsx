import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-spannzangen.jpg";
import spindel from "@/assets/spindel.jpg";
import { CtaBand } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Präzisions Spannzangen Swiss Made | Ferrer ITS" },
      {
        name: "description",
        content:
          "Ferrer ITS liefert Präzisions Spannzangen von Tecnopinz: ETS, ETA, ER-kompatible und PCB Spannzangen mit Rundlauf unter 0,003 mm. Jetzt anfragen.",
      },
      { property: "og:title", content: "Präzisions Spannzangen Swiss Made | Ferrer ITS" },
      {
        property: "og:description",
        content: "ETS, ETA, ER und PCB Präzisions Spannzangen von Tecnopinz – Rundlauf unter 0,003 mm.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ferrer ITS",
          description: "Vertrieb von Präzisions Spannzangen der Marke Tecnopinz (Swiss Made).",
        }),
      },
    ],
  }),
  component: Index,
});

const facts = [
  { k: "< 0,003 mm", v: "statischer Rundlauffehler (UP)" },
  { k: "Swiss Made", v: "Tecnopinz Qualität" },
  { k: "100 % ER", v: "kompatibel mit ER-Spannsystemen" },
];

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-steel text-primary-foreground">
        <img
          src={hero}
          alt="Präzisions Spannzangen aus Stahl von Tecnopinz"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel via-steel/80 to-transparent" />
        <div className="grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">Committed to Precision</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[1.02] md:text-7xl">
            Präzisions Spannzangen. Swiss Made.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-primary-foreground/75">
            ETS, ETA, ER-kompatible und PCB Spannzangen von Tecnopinz – für höchsten Rundlauf und lange
            Standzeiten Ihrer Werkzeuge.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/spannzangen" className="rounded-sm bg-signal px-6 py-3 font-medium text-signal-foreground transition-transform hover:-translate-y-0.5">
              Spannzangen entdecken
            </Link>
            <Link to="/kontakt" className="rounded-sm border border-primary-foreground/30 px-6 py-3 font-medium transition-colors hover:border-signal hover:text-signal">
              Anfrage senden
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {facts.map((f) => (
            <div key={f.k} className="border-b px-6 py-10 md:border-b-0 md:border-r last:border-0">
              <p className="font-display text-3xl font-extrabold">{f.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Unsere Mission</p>
          <h2 className="mt-3 text-4xl font-extrabold">Spannzangen nach Ihren Anforderungen</h2>
          <p className="mt-6 text-muted-foreground">
            Wir sind Ihr zuverlässiger Partner für Präzisions Spannzangen des Schweizer Technologieführers
            Tecnopinz. Ob Standard, Ultra Precision oder Sonderanfertigung – wir liefern das beste
            Preis-Leistungs-Verhältnis bei höchsten Qualitätsstandards.
          </p>
          <p className="mt-4 text-muted-foreground">
            Kleinserien und Prototypen fertigen wir nach Zeichnung oder Muster.
          </p>
          <Link to="/spannzangen" className="mt-8 inline-block border-b-2 border-signal pb-1 font-medium">
            Zum Spannzangen-Sortiment →
          </Link>
        </div>
        <img src={spindel} alt="CNC-Spindel mit Präzisions Spannzange und Mikrobohrer" width={1200} height={912} loading="lazy" className="rounded-sm" />
      </section>

      <CtaBand />
    </>
  );
}
