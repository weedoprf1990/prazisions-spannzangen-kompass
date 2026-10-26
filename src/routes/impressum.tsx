import { createFileRoute } from "@tanstack/react-router";

const title = "Impressum | Ferrer ITS";
const desc = "Impressum von Ferrer ITS – Industrial Trade & Services, Freilassing. Angaben gemäß § 5 TMG.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Rechtliches</p>
      <h1 className="mt-3 text-5xl font-extrabold">Impressum</h1>

      <div className="mt-10 space-y-10 text-muted-foreground">
        <div>
          <h2 className="text-xl font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3">
            Rafael Ferrer
            <br />
            Ferrer ITS
            <br />
            Görlitzer Strasse 17
            <br />
            83395 Freilassing
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
          <p className="mt-3">
            Telefon: +49 (0)8654 309 6011
            <br />
            Telefax: +49 (0)8654 309 6012
            <br />
            E-Mail: office@ferrer-its.com
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">Umsatzsteuer-ID</h2>
          <p className="mt-3">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE 813622931
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">EORI-Nr.</h2>
          <p className="mt-3">DE862376233655377</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">Bankverbindung</h2>
          <p className="mt-3">
            Commerzbank Gräfelfing
            <br />
            IBAN: DE82 7008 0000 0790 0144 00
            <br />
            SWIFT-BIC: DRES DE FF
          </p>
        </div>
      </div>
    </section>
  );
}
