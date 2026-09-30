import type { Metadata } from "next";
import Link from "next/link";
import { DivisionHeader } from "../division-header";
import { SiteFooter } from "../site-footer";

export const metadata: Metadata = {
  title: "Cookie · Bozza | OMNIMPRESA",
  description: "Pagina cookie OMNIMPRESA in fase di configurazione.",
  robots: { index: false, follow: true },
};

export default function CookiePage() {
  return (
    <main>
      <DivisionHeader />
      <article className="legal-page">
        <p className="eyebrow">DOCUMENTO IN CONFIGURAZIONE</p>
        <h1>Informazioni sui cookie</h1>
        <p className="legal-intro">
          Questa pagina è una bozza. L’elenco dei cookie e delle altre
          tecnologie utilizzate dal sito deve essere verificato e completato.
        </p>
        <section>
          <h2>Informazioni da configurare</h2>
          <dl className="legal-fields">
            <div>
              <dt>Cookie e tecnologie presenti</dt>
              <dd>Da verificare e configurare</dd>
            </div>
            <div>
              <dt>Finalità, durata e fornitori</dt>
              <dd>Da configurare</dd>
            </div>
            <div>
              <dt>Eventuali servizi di analisi o marketing</dt>
              <dd>Da verificare e configurare</dd>
            </div>
            <div>
              <dt>Gestione delle preferenze</dt>
              <dd>Da configurare in base ai servizi effettivamente attivi</dd>
            </div>
          </dl>
        </section>
        <p className="legal-note">
          Questa bozza non conferma l’assenza di cookie e non costituisce una
          configurazione definitiva delle preferenze. Le informazioni complete
          saranno pubblicate dopo la verifica del sito.
        </p>
        <div className="actions">
          <Link className="button" href="/">
            Torna al sito
          </Link>
          <Link className="button light" href="/privacy">
            Informazioni privacy
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
