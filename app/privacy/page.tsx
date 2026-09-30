import type { Metadata } from "next";
import Link from "next/link";
import { DivisionHeader } from "../division-header";
import { SiteFooter } from "../site-footer";

export const metadata: Metadata = {
  title: "Privacy · Bozza | OMNIMPRESA",
  description: "Pagina privacy OMNIMPRESA in fase di configurazione.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main>
      <DivisionHeader />
      <article className="legal-page">
        <p className="eyebrow">DOCUMENTO IN CONFIGURAZIONE</p>
        <h1>Informazioni privacy</h1>
        <p className="legal-intro">
          Questa pagina è una bozza da completare. I riferimenti dell’attività e
          le informazioni sul trattamento dei dati non sono ancora definitivi.
        </p>
        <section>
          <h2>Il contatto dal sito</h2>
          <p>
            Il modulo prepara un messaggio per info@omnimpresa.it e apre la tua
            app di posta. L’invio viene completato da te; il modulo non invia
            direttamente i dati a un server.
          </p>
        </section>
        <section>
          <h2>Informazioni da configurare</h2>
          <dl className="legal-fields">
            <div>
              <dt>Titolare e riferimenti dell’attività</dt>
              <dd>Da configurare</dd>
            </div>
            <div>
              <dt>Finalità e basi del trattamento</dt>
              <dd>Da configurare</dd>
            </div>
            <div>
              <dt>Servizi coinvolti e destinatari dei dati</dt>
              <dd>Da configurare</dd>
            </div>
            <div>
              <dt>Tempi di conservazione</dt>
              <dd>Da configurare</dd>
            </div>
            <div>
              <dt>Riferimenti per le richieste sui dati</dt>
              <dd>Da configurare</dd>
            </div>
          </dl>
        </section>
        <p className="legal-note">
          La versione definitiva sarà pubblicata dopo la verifica delle
          informazioni e della configurazione effettiva del sito.
        </p>
        <div className="actions">
          <Link className="button" href="/#contatti">
            Contatta OMNIMPRESA
          </Link>
          <Link className="button light" href="/cookie">
            Informazioni sui cookie
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
