"use client";

import { FormEvent, useState } from "react";
import {
  BarChart3,
  Cpu,
  GraduationCap,
  Leaf,
  MonitorUp,
  ShieldCheck,
} from "lucide-react";
import { catalog } from "./catalog";

const divisionIcons = {
  Finance: BarChart3,
  Energy: Leaf,
  Technology: Cpu,
  Digital: MonitorUp,
  Security: ShieldCheck,
  Academy: GraduationCap,
};

const divisions = [
  [
    "Finance",
    "▥",
    "Consulenza bancaria UniCredit Business e POS Worldline e SumUp.",
    "blue",
  ],
  [
    "Energy",
    "◒",
    "Luce, gas, fotovoltaico, accumulo e ricarica con Futur Energy.",
    "green",
  ],
  [
    "Technology",
    "▣",
    "Telefonia 1Mobile, fibra, dispositivi, noleggio e assistenza IT.",
    "blue",
  ],
  ["Digital", "⌁", "Siti, e-commerce, CRM e automazioni AI con L.D. Automation & AI.", "blue"],
  [
    "Security",
    "♙",
    "Allarmi e videosorveglianza per aziende con Very Alarm.",
    "slate",
  ],
  [
    "Academy",
    "⌂",
    "Formazione finanziata per sviluppare le competenze aziendali.",
    "yellow",
  ],
];

const steps = [
  [
    "01",
    "Analisi",
    "Ascoltiamo obiettivi, costi e priorità della tua azienda.",
  ],
  ["02", "Proposta", "Progettiamo soluzioni integrate e sostenibili."],
  [
    "03",
    "Attivazione",
    "Coordiniamo partner e attività con un unico referente.",
  ],
  ["04", "Assistenza", "Restiamo al tuo fianco per far crescere il business."],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = `Richiesta OMNIMPRESA · ${form.get("divisione") || "Informazioni"}`;
    const body = `Nome e azienda: ${form.get("nome")}\nEmail: ${form.get("email")}\nDivisione: ${form.get("divisione")}\n\n${form.get("messaggio") || "Vorrei ricevere maggiori informazioni."}`;
    window.location.href = `mailto:info@omnimpresa.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <main>
      <header className="topbar">
        <a
          className="brand brand-lockup"
          href="#home"
          aria-label="OMNIMPRESA home"
        >
          <span className="brand-logo" />
        </a>
        <button
          className="hamb"
          onClick={() => setMenu(!menu)}
          aria-label="Apri menu"
        >
          ☰
        </button>
        <nav className={menu ? "open" : ""}>
          {[
            ["Home", "#home"],
            ["Divisioni", "#divisioni"],
            ["Settori", "#settori"],
            ["Come lavoriamo", "#metodo"],
            ["Chi siamo", "#chi-siamo"],
            ["Contatti", "#contatti"],
          ].map(([n, h]) => (
            <a key={n} href={h} onClick={() => setMenu(false)}>
              {n}
            </a>
          ))}
        </nav>
        <a className="button header-cta" href="#contatti">
          Richiedi analisi <span>→</span>
        </a>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SERVIZI INTEGRATI PER AZIENDE</p>
          <h1>
            La tua impresa.
            <br /><em>Più possibilità.</em>
          </h1>
          <p>
            Servizi integrati per aziende. Sei aree, un solo interlocutore.
          </p>
          <div className="actions">
            <a className="button" href="#contatti">
              Richiedi un check-up aziendale <span>→</span>
            </a>
            <a className="button light" href="#divisioni">
              Scopri le divisioni <span>→</span>
            </a>
          </div>
        </div>
        <div className="hero-art"><img src="/assets/omni-hero-v2.png" alt="Strumenti per pagamenti, digitale, connettività, energia e sicurezza aziendale" fetchPriority="high" /><div className="hero-caption"><span>OMNIMPRESA</span><b>Il prossimo passo, insieme.</b></div></div>
      </section>

      <section className="section partner-section" aria-labelledby="partner-title">
        <p className="eyebrow">COMPETENZE E MARCHI PER LA TUA IMPRESA</p>
        <h2 id="partner-title">Soluzioni concrete. Un unico referente.</h2>
        <div className="partner-grid">
          {Object.entries(catalog).filter(([slug]) => slug !== "academy").map(([slug, division]) => (
            <a className="partner-card" href={`/divisioni/${slug}`} key={slug}>
              <small>{division.name}</small><h3>{division.brand}</h3><span>Esplora le soluzioni</span>
            </a>
          ))}
        </div>
      </section>
      <section id="divisioni" className="section divisions">
        <h2>Le nostre divisioni</h2>
        <div className="division-grid">
          {divisions.map(([name, , text, tone]) => {
            const Icon = divisionIcons[name as keyof typeof divisionIcons];
            return (
              <a
                className="division-card"
                href={`/divisioni/${name.toLowerCase()}`}
                key={name}
              >
                <div className={`division-graphic ${tone}`}><video muted autoPlay loop playsInline preload="metadata" aria-hidden="true"><source src={`/assets/videos/${name === "Academy" ? "academy-business" : name.toLowerCase()}.mp4`} type="video/mp4" /></video><span className="card-icon"><Icon aria-hidden="true" /></span></div>
                <h3>{name}</h3>
                <p>{text}</p>
                <strong>Scopri {name}</strong>
              </a>
            );
          })}
        </div>
      </section>
      <section id="metodo" className="method">
        <h2>Come lavoriamo</h2>
        <div className="steps">
          {steps.map(([, t, d]) => (
            <article key={t}>
              <span className="step-icon">◌</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section id="settori" className="section sectors">
        <h2>Settori serviti</h2>
        <div>
          {[
            ["♚", "PMI", "Piccole e medie imprese"],
            ["▣", "Retail", "Commercio e distribuzione"],
            ["⌂", "Hospitality", "Hotel e ristorazione"],
            ["▤", "Industry", "Industria e produzione"],
            ["▱", "Professional services", "Studi e servizi professionali"],
          ].map(([i, t, d]) => (
            <article key={t}>
              <span>{i}</span>
              <b>{t}</b>
              <small>{d}</small>
            </article>
          ))}
        </div>
      </section>
      <section id="chi-siamo" className="about">
        <div>
          <p className="eyebrow">UN ECOSISTEMA, UNA DIREZIONE</p>
          <h2>
            Più competenze.
            <br />
            <em>Un solo interlocutore.</em>
          </h2>
          <p>
            Mettiamo in contatto le esigenze della tua azienda con competenze e soluzioni concrete.
          </p>
        </div>
        <div className="about-note">
          <b>6 divisioni integrate</b>
          <p>
            Un modello pensato per coordinare ogni progetto con semplicità e
            continuità.
          </p>
          <a href="#contatti">Parliamone →</a>
        </div>
      </section>
      <section id="contatti" className="contact">
        <div>
          <p className="eyebrow">INIZIAMO DA QUI</p>
          <h2>
            Portiamo valore
            <br />
            alla tua impresa.
          </h2>
          <p>
            Raccontaci le tue esigenze: il nostro team ti ricontatterà per
            definire un primo confronto.
          </p>
          <small>
            <a href="mailto:info@omnimpresa.it">info@omnimpresa.it</a>
          </small>
        </div>
        <form onSubmit={submit}>
          {sent ? (
            <div className="success">
              <b>Completa l'invio dalla tua email.</b>
              <p>
                Abbiamo preparato il messaggio per info@omnimpresa.it. Invialo dall'app di posta che si apre sul tuo dispositivo.
              </p>
            </div>
          ) : (
            <>
              <label>
                Nome e azienda
                <input name="nome" required placeholder="Il tuo nome e azienda" />
              </label>
              <label>
                Email di lavoro
                <input name="email" type="email" required placeholder="nome@azienda.it" />
              </label>
              <label>
                Di cosa hai bisogno?
                <select name="divisione" defaultValue="">
                  <option value="" disabled>
                    Seleziona una divisione
                  </option>
                  {divisions.map(([x]) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <label>Il tuo progetto<textarea name="messaggio" placeholder="Di cosa hai bisogno?" rows={3} /></label>
              <small className="form-note">Il pulsante apre la tua app di posta con il messaggio pronto.</small>
              <button className="button" type="submit">
                Prepara email
              </button>
            </>
          )}
        </form>
      </section>
      <footer>
        <div className="brand brand-lockup">
          <span className="brand-logo footer-logo" />
        </div>
        <p>
          OMNIMPRESA è il gruppo per i servizi integrati alle aziende. Un unico
          partner, infinite soluzioni.
        </p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </footer>
    </main>
  );
}
