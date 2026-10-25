import { createFileRoute } from "@tanstack/react-router";

const title = "Kontakt – Präzisions Spannzangen anfragen | Ferrer ITS";
const desc = "Fragen zu Präzisions Spannzangen von Tecnopinz? Kontaktieren Sie Ferrer ITS – wir finden die passende Lösung.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

const EMAIL = "info@ferrer-its.com";

function Kontakt() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Kontakt</p>
      <h1 className="mt-3 text-5xl font-extrabold">Sprechen Sie mit uns</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Haben Sie Fragen zu unseren Präzisions Spannzangen? Schildern Sie uns Ihre Anwendung – wir
        bearbeiten Ihre Anfrage schnellstmöglich.
      </p>
      <a
        href={`mailto:${EMAIL}?subject=Anfrage%20Pr%C3%A4zisions%20Spannzangen`}
        className="mt-10 inline-block rounded-sm bg-signal px-6 py-3 font-medium text-signal-foreground"
      >
        {EMAIL}
      </a>
    </section>
  );
}
