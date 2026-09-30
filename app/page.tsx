"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  Cpu,
  GraduationCap,
  Leaf,
  MonitorUp,
  ShieldCheck,
  Search,
  FileText,
  Rocket,
  Headphones,
  Users,
  ShoppingBag,
  Hotel,
  Factory,
  BriefcaseBusiness,
  Pause,
  Play,
  ArrowRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import { catalog } from "./catalog";
import { DivisionHeader } from "./division-header";
import { SiteFooter } from "./site-footer";
import { ContactForm } from "./contact-form";
import { MotionVideo } from "./motion-video";
import { PartnerLogos } from "./partner-logos";

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
    "Consulenza bancaria UniCredit Business e POS Worldline e SumUp.",
  ],
  ["Energy", "Luce, gas, fotovoltaico, accumulo e ricarica con FuturEnergy."],
  [
    "Technology",
    "Telefonia 1Mobile, fibra, dispositivi, noleggio e assistenza IT.",
  ],
  [
    "Digital",
    "Siti, e-commerce, CRM e automazioni AI con L.D. Automation & AI.",
  ],
  ["Security", "Allarmi e videosorveglianza per aziende con Very Alarm."],
  ["Academy", "Formazione finanziata per sviluppare le competenze aziendali."],
];

const steps = [
  [
    Search,
    "Analisi",
    "Ascoltiamo obiettivi, costi e priorità della tua azienda.",
  ],
  [FileText, "Proposta", "Progettiamo soluzioni integrate e sostenibili."],
  [
    Rocket,
    "Attivazione",
    "Coordiniamo partner e attività con un unico referente.",
  ],
  [
    Headphones,
    "Assistenza",
    "Restiamo al tuo fianco per far crescere il business.",
  ],
] as const;

const sectors = [
  [Users, "PMI", "Piccole e medie imprese"],
  [ShoppingBag, "Commercio", "Negozi e distribuzione"],
  [Hotel, "Ospitalità", "Hotel e ristorazione"],
  [Factory, "Industria", "Produzione e manifattura"],
  [BriefcaseBusiness, "Professionisti", "Studi e servizi professionali"],
] as const;

export default function Home() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPaused(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  return (
    <main>
      <DivisionHeader home />

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">SERVIZI INTEGRATI PER AZIENDE</p>
          <h1>
            La tua impresa.
            <br />
            <em>Più possibilità.</em>
          </h1>
          <p>Servizi integrati per aziende. Sei aree, un solo interlocutore.</p>
          <div className="actions">
            <a className="button" href="#contatti">
              <BarChart3 className="button-icon" aria-hidden="true" />
              Richiedi un check-up aziendale
            </a>
            <a className="button light" href="#divisioni">
              Scopri le divisioni <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-art">
          <img
            src="/assets/omni-hero-v2.png"
            alt="Un ambiente di lavoro luminoso con postazione e sala riunioni"
            width={1672}
            height={941}
            fetchPriority="high"
          />
          <div className="hero-caption">
            <span>OMNIMPRESA</span>
            <b>Il prossimo passo, insieme.</b>
          </div>
        </div>
      </section>

      <section
        className="section partner-section"
        aria-labelledby="partner-title"
      >
        <p className="eyebrow">COMPETENZE E MARCHI PER LA TUA IMPRESA</p>
        <h2 id="partner-title">Soluzioni concrete. Un unico referente.</h2>
        <div className="partner-grid">
          {Object.entries(catalog)
            .filter(([slug]) => slug !== "academy")
            .map(([slug, division]) => (
              <a
                className="partner-card"
                href={`/divisioni/${slug}`}
                key={slug}
              >
                <PartnerLogos division={slug as keyof typeof catalog} />
                <small>{division.name}</small>
                <span className="partner-link">
                  Esplora le soluzioni <ArrowRight aria-hidden="true" />
                </span>
              </a>
            ))}
        </div>
      </section>
      <section id="divisioni" className="section divisions">
        <div className="section-heading">
          <h2>Le nostre divisioni</h2>
          <button
            className="motion-toggle"
            onClick={() => setPaused((current) => !current)}
            aria-pressed={paused}
          >
            {paused ? (
              <Play aria-hidden="true" />
            ) : (
              <Pause aria-hidden="true" />
            )}
            {paused ? "Riproduci i video" : "Pausa video"}
          </button>
        </div>
        <div className="division-grid">
          {divisions.map(([name, text]) => {
            const Icon = divisionIcons[name as keyof typeof divisionIcons];
            return (
              <a
                className="division-card"
                href={`/divisioni/${name.toLowerCase()}`}
                key={name}
              >
                <div className="division-graphic">
                  <MotionVideo
                    slug={name.toLowerCase()}
                    title={name}
                    paused={paused}
                  />
                  <span className="card-icon">
                    <Icon aria-hidden="true" />
                  </span>
                </div>
                <h3>{name}</h3>
                <p>{text}</p>
                <strong>
                  Scopri {name} <ArrowRight aria-hidden="true" />
                </strong>
              </a>
            );
          })}
        </div>
      </section>
      <section id="metodo" className="method">
        <h2>Come lavoriamo</h2>
        <div className="steps">
          {steps.map(([StepIcon, t, d]) => (
            <article key={t}>
              <span className="step-icon">
                <StepIcon aria-hidden="true" />
              </span>
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
          {sectors.map(([SectorIcon, t, d]) => (
            <article key={t}>
              <span>
                <SectorIcon aria-hidden="true" />
              </span>
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
            Mettiamo in contatto le esigenze della tua azienda con competenze e
            soluzioni concrete.
          </p>
        </div>
        <div className="about-note">
          <Users className="about-icon" aria-hidden="true" />
          <b>6 divisioni integrate</b>
          <p>
            Un modello pensato per coordinare ogni progetto con semplicità e
            continuità.
          </p>
          <a href="#contatti">
            Parliamone <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
      <section id="contatti" className="contact">
        <div>
          <MessageCircle className="contact-icon" aria-hidden="true" />
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
          <a className="contact-email" href="mailto:info@omnimpresa.it">
            <Mail aria-hidden="true" />
            info@omnimpresa.it
          </a>
        </div>
        <ContactForm />
      </section>
      <SiteFooter />
    </main>
  );
}
