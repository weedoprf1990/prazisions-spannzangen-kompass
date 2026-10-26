import { createFileRoute } from "@tanstack/react-router";

const title = "Datenschutzerklärung | Ferrer ITS";
const desc = "Datenschutzerklärung von Ferrer ITS – Informationen zum Umgang mit personenbezogenen Daten.";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Rechtliches</p>
      <h1 className="mt-3 text-5xl font-extrabold">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-10 text-muted-foreground">
        <div>
          <h2 className="text-xl font-bold text-foreground">Datenschutz</h2>
          <p className="mt-3">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
            behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="mt-3">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
            möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
            Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
            freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
            Dritte weitergegeben.
          </p>
          <p className="mt-3">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
            Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">
            Datenschutzerklärung für die Nutzung von Google Analytics
          </h2>
          <p className="mt-3">
            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
            Google Inc. 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics
            verwendet sog. „Cookies“. Das sind Textdateien, die auf Ihrem Computer gespeichert
            werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
            den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der
            Regel an einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p className="mt-3">
            Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite wird Ihre IP-Adresse
            von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur
            in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA
            übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
            Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
            Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht
            mit anderen Daten von Google zusammengeführt.
          </p>
          <p className="mt-3">
            Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
            Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
            gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen
            können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf
            Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
            Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden
            Link verfügbare Browser-Plugin herunterladen und installieren:{" "}
            <a
              href="http://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noopener"
              className="border-b border-signal text-foreground"
            >
              http://tools.google.com/dlpage/gaoptout?hl=de
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">Kontaktformular</h2>
          <p className="mt-3">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
            wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">Newsletterdaten</h2>
          <p className="mt-3">
            Wenn Sie den auf der Webseite angebotenen Newsletter beziehen möchten, benötigen wir von
            Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten,
            dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des
            Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten
            verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben
            sie nicht an Dritte weiter.
          </p>
          <p className="mt-3">
            Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren
            Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den
            „Austragen“-Link im Newsletter.
          </p>
        </div>
      </div>
    </section>
  );
}
