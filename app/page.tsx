"use client";

import { FormEvent, useState } from "react";
import {
  BarChart3,
  CarFront,
  Cpu,
  GraduationCap,
  Leaf,
  MonitorUp,
  ShieldCheck,
} from "lucide-react";

const divisionIcons = {
  Finance: BarChart3,
  Energy: Leaf,
  Technology: Cpu,
  Digital: MonitorUp,
  Security: ShieldCheck,
  Academy: GraduationCap,
  Mobility: CarFront,
};

const divisions = [
  [
    "Finance",
    "▥",
    "Pagamenti, credito e protezione per la tua impresa.",
    "blue",
  ],
  [
    "Energy",
    "◒",
    "Efficienza energetica, fonti rinnovabili e gestione forniture.",
    "green",
  ],
  [
    "Technology",
    "▣",
    "Connettività, dispositivi e noleggio operativo.",
    "blue",
  ],
  ["Digital", "⌁", "CRM, gestionali, siti e automazioni per crescere.", "blue"],
  [
    "Security",
    "♙",
    "Sicurezza aziendale, privacy e protezione dei dati.",
    "slate",
  ],
  [
    "Academy",
    "⌂",
    "Formazione finanziata e competenze per il futuro.",
    "yellow",
  ],
  ["Mobility", "▱", "Mobilità elettrica e infrastrutture di ricarica.", "blue"],
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
            Tutto ciò che serve
            <br />
            alla tua impresa.
            <br />
            <em>Un solo interlocutore.</em>
          </h1>
          <p>
            OMNIMPRESA unisce competenze e soluzioni in 7 aree strategiche per
            semplificare la gestione aziendale, ridurre i costi e generare
            valore.
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
        <div
          className="hero-art"
          aria-label="Le sette divisioni OMNIMPRESA orbitano intorno al brand"
        >
          <div className="orbit-stage">
            <div className="orbit-core">
              <span className="orbit-logo-mark" aria-hidden="true" />
            </div>
            {divisions.map(([name, , , tone], index) => {
              const Icon = divisionIcons[name as keyof typeof divisionIcons];
              return (
                <div className={`orbit-path orbit-path-${index + 1}`} key={name}>
                  <a
                    className={`orbit-node ${tone}`}
                    href={`/divisioni/${name.toLowerCase()}`}
                    aria-label={`Divisione ${name}`}
                  >
                    <Icon aria-hidden="true" strokeWidth={1.8} />
                    <b>{name}</b>
                  </a>
                </div>
              );
            })}
          </div>
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
                <div className={`division-graphic ${tone}`}>
                  <span className="division-ring division-ring-one" />
                  <span className="division-ring division-ring-two" />
                  <Icon aria-hidden="true" strokeWidth={1.65} />
                </div>
                <h3>{name}</h3>
                <p>{text}</p>
                <strong aria-hidden="true">→</strong>
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
            Non una raccolta di prodotti, ma un gruppo che mette in relazione
            esigenze aziendali, specialisti e soluzioni concrete.
          </p>
        </div>
        <div className="about-note">
          <b>7 divisioni integrate</b>
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
            I recapiti, la sede e l'informativa privacy sono configurabili prima
            della pubblicazione.
          </small>
        </div>
        <form onSubmit={submit}>
          {sent ? (
            <div className="success">
              <b>Richiesta ricevuta.</b>
              <p>
                Collega qui il tuo CRM o l'indirizzo email aziendale per
                completare l'invio.
              </p>
            </div>
          ) : (
            <>
              <label>
                Nome e azienda
                <input required placeholder="Il tuo nome e azienda" />
              </label>
              <label>
                Email di lavoro
                <input type="email" required placeholder="nome@azienda.it" />
              </label>
              <label>
                Di cosa hai bisogno?
                <select defaultValue="">
                  <option value="" disabled>
                    Seleziona una divisione
                  </option>
                  {divisions.map(([x]) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>
              <button className="button" type="submit">
                Richiedi analisi <span>→</span>
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
