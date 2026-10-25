import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-spannzangen.jpg";
import { CtaBand } from "@/components/site-chrome";

const title = "Präzisions Spannzangen ETS, ETA, ER & PCB | Ferrer ITS";
const desc =
  "Tecnopinz Präzisions Spannzangen: ETS & ETA mit Ultra Precision (Rundlauf < 0,003 mm), voll ER-kompatibel, PCB Spannzangen für HF-Spindeln und Sonderanfertigungen.";

export const Route = createFileRoute("/spannzangen")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/spannzangen" },
    ],
    links: [{ rel: "canonical", href: "/spannzangen" }],
  }),
  component: Spannzangen,
});

const etsItems = [
  "ETS & ETA Spannzangen",
  "ETS & ETA Spannmuttern",
  "ETS Spray-Spannzangen",
  "ETS & ETA Fluid-Spannmuttern",
  "ETS & ETA Fluid-Dichtscheiben",
];
const advantages = [
  "Selbstzentrierend – vereinfacht das Einrichten",
  "Keine Reibung zwischen Spannmutter und Spannzange",
  "Besserer Rundlauf und längere Werkzeugstandzeit",
  "Kürzere Spannmuttern als ER – näher am Werkstück arbeiten",
  "Nur eine ETS-Überwurfmutter nötig für jedes ER-System",
];
const spindles = ["Westwind", "Precise", "Machswiss", "Mechatronics", "Hitachi"];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-b">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold">{title}</h2>
        </div>
        <div className="space-y-4 text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}

function Spannzangen() {
  return (
    <>
      <section className="relative overflow-hidden bg-steel text-primary-foreground">
        <img src={hero} alt="" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="grid-lines absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">Tecnopinz · Swiss Quality Made</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">Präzisions Spannzangen</h1>
          <nav className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
            {[["#ets", "ETS & ETA"], ["#er", "ER-Kompatibilität"], ["#pcb", "PCB"], ["#sonder", "Sonderanfertigung"]].map(([h, l]) => (
              <a key={h} href={h} className="rounded-sm border border-primary-foreground/25 px-3 py-1.5 hover:border-signal hover:text-signal">{l}</a>
            ))}
          </nav>
        </div>
      </section>

      <Section id="ets" eyebrow="01 · Standard & Ultra Precision" title="ETS & ETA Spannzangen">
        <p>
          In vielen Branchen ist Präzision der wichtigste Wettbewerbsvorteil. Für die genaueste
          Bearbeitung bietet Tecnopinz ETS und ETA Spannzangen in der UP-Version (Ultra Precision) an –
          mit einem statischen Rundlauffehler unter <strong className="text-foreground">0,003 mm</strong>.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {etsItems.map((i) => (
            <li key={i} className="border-l-2 border-signal bg-card px-4 py-3 text-foreground">{i}</li>
          ))}
        </ul>
        <a href="https://web.archive.org/web/2024/http://www.ferrer-its.com/wp-content/uploads/2017/01/K-1.1.1-Catalogue_ETS_ETA_2017.pdf" target="_blank" rel="noopener" className="inline-block border-b-2 border-signal pb-1 font-medium text-foreground">
          Katalog ETS & ETA (PDF) →
        </a>
      </Section>

      <Section id="er" eyebrow="02 · Schweizer Patent 649.242" title="Voll ER-kompatibel">
        <p>
          Spannzangen und Spannmuttern der ETS & ETA Serie sind mit allen Spannsystemen vom Typ ER
          kompatibel und bieten die besten Rundlaufwerte am Markt. Durch ihre Konstruktion sind ETS
          Spannzangen deutlich präziser als ER Spannzangen.
        </p>
        <ul className="space-y-2">
          {advantages.map((a) => (
            <li key={a} className="flex gap-3 text-foreground"><span className="font-mono text-signal">+</span>{a}</li>
          ))}
        </ul>
        <p className="text-sm">Hinweis: UP-Spannzangen sind nur sinnvoll, wenn das Spannsystem für Hochpräzision ausgelegt ist.</p>
      </Section>

      <Section id="pcb" eyebrow="03 · Leiterplatten" title="PCB Spannzangen für HF-Spindeln">
        <p>
          Der Rundlauf Ihrer Spindel bzw. Spannzange ist nicht nur entscheidend für die Bohrgenauigkeit,
          sondern verlängert auch die Standzeit Ihrer Werkzeuge erheblich. Neu lieferbar: UP (Ultra
          Precision) und Sonderbeschichtung.
        </p>
        <div className="flex flex-wrap gap-2">
          {spindles.map((s) => (
            <span key={s} className="rounded-sm bg-secondary px-3 py-1.5 font-mono text-sm text-foreground">{s}</span>
          ))}
        </div>
        <a href="https://web.archive.org/web/2024/http://www.ferrer-its.com/wp-content/uploads/2017/01/Catalogue_PCB_Collets_2014.pdf" target="_blank" rel="noopener" className="inline-block border-b-2 border-signal pb-1 font-medium text-foreground">
          Katalog PCB Spannzangen (PDF) →
        </a>
      </Section>

      <Section id="sonder" eyebrow="04 · Nach Maß" title="Sonderanfertigungen">
        <p>
          Ihre Anforderungen sind unser Maßstab. Gerne fertigen wir Kleinserien oder Prototypen nach
          Zeichnung oder Muster.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
