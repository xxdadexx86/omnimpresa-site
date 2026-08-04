import Link from "next/link";
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
  finance: BarChart3,
  energy: Leaf,
  technology: Cpu,
  digital: MonitorUp,
  security: ShieldCheck,
  academy: GraduationCap,
  mobility: CarFront,
};

const data: Record<
  string,
  {
    name: string;
    icon: string;
    label: string;
    intro: string;
    items: string[];
    video: string;
  }
> = {
  finance: {
    name: "Finance",
    icon: "▥",
    label: "DIVISIONE FINANCE",
    intro:
      "Soluzioni finanziarie integrate per far crescere la tua impresa: pagamenti, accesso al credito, supporto bancario e coordinamento assicurativo.",
    items: [
      "POS multibrand",
      "Accesso al credito",
      "Consulenza bancaria",
      "Gestione incassi",
      "Coperture assicurative",
    ],
    video:
      "https://videos.pexels.com/video-files/5726126/5726126-uhd_2560_1440_30fps.mp4",
  },
  energy: {
    name: "Energy",
    icon: "◒",
    label: "DIVISIONE ENERGY",
    intro:
      "Riduciamo sprechi e costi energetici con soluzioni costruite attorno ai consumi reali della tua azienda.",
    items: [
      "Forniture energia",
      "Fotovoltaico",
      "Sistemi di accumulo",
      "Colonnine di ricarica",
      "Analisi dei consumi",
    ],
    video:
      "https://videos.pexels.com/video-files/2887464/2887464-hd_1920_1080_25fps.mp4",
  },
  technology: {
    name: "Technology",
    icon: "▣",
    label: "DIVISIONE TECHNOLOGY",
    intro:
      "Infrastrutture IT, connettività e dispositivi per un’azienda più veloce, sicura e sempre operativa.",
    items: [
      "Fibra e TLC",
      "Hardware ricondizionato",
      "Noleggio operativo",
      "Telefonia aziendale",
      "Assistenza IT",
    ],
    video:
      "https://videos.pexels.com/video-files/3202364/3202364-hd_1920_1080_25fps.mp4",
  },
  digital: {
    name: "Digital",
    icon: "⌁",
    label: "DIVISIONE DIGITAL",
    intro:
      "Digitalizziamo processi, relazioni e vendite con CRM, gestionali, siti web e automazioni.",
    items: [
      "CRM e gestionali",
      "Siti web",
      "E-commerce",
      "Automazioni",
      "Integrazioni AI",
    ],
    video:
      "https://videos.pexels.com/video-files/9365135/9365135-hd_1920_1080_25fps.mp4",
  },
  security: {
    name: "Security",
    icon: "♙",
    label: "DIVISIONE SECURITY",
    intro:
      "Proteggiamo persone, dati e spazi con una visione integrata della sicurezza aziendale.",
    items: [
      "Impianti di allarme",
      "Videosorveglianza",
      "Controllo accessi",
      "Privacy e compliance",
      "Cyber security",
    ],
    video:
      "https://videos.pexels.com/video-files/5028622/5028622-uhd_2560_1440_25fps.mp4",
  },
  academy: {
    name: "Academy",
    icon: "⌂",
    label: "DIVISIONE ACADEMY",
    intro:
      "Formazione finanziata e percorsi su misura per sviluppare competenze e nuove opportunità.",
    items: [
      "Fondi interprofessionali",
      "Formazione finanziata",
      "Corsi aziendali",
      "Bandi e incentivi",
      "Percorsi digitali",
    ],
    video: "/assets/videos/academy-business.mp4",
  },
  mobility: {
    name: "Mobility",
    icon: "▱",
    label: "DIVISIONE MOBILITY",
    intro:
      "Mobilità elettrica e infrastrutture di ricarica per imprese più efficienti e sostenibili.",
    items: [
      "Biciclette elettriche",
      "Flotte aziendali",
      "Colonnine",
      "Ricarica intelligente",
      "Progetti green",
    ],
    video:
      "https://videos.pexels.com/video-files/9790212/9790212-hd_1080_1920_30fps.mp4",
  },
};

export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = data[slug] ?? data.finance;
  const DivisionIcon =
    divisionIcons[slug as keyof typeof divisionIcons] ?? BarChart3;
  return (
    <main>
      <header className="topbar">
        <Link className="brand brand-lockup" href="/">
          <span className="brand-logo" />
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/#divisioni">Divisioni</Link>
          <Link href="/#settori">Settori</Link>
          <Link href="/#metodo">Come lavoriamo</Link>
          <Link href="/#chi-siamo">Chi siamo</Link>
          <Link href="/#contatti">Contatti</Link>
        </nav>
        <Link className="button header-cta" href="/#contatti">
          Richiedi analisi <span>→</span>
        </Link>
      </header>
      <section className="division-detail">
        <div className="detail-copy">
          <p className="eyebrow">
            <span className="detail-icon">
              <DivisionIcon aria-hidden="true" strokeWidth={1.8} />
            </span>
            {d.label}
          </p>
          <h1>
            OMNIMPRESA <em>{d.name}</em>
          </h1>
          <p>{d.intro}</p>
          <div className="actions">
            <Link className="button" href="/#contatti">
              Richiedi consulenza <span>→</span>
            </Link>
            <Link className="button light" href="/#divisioni">
              Tutte le divisioni <span>→</span>
            </Link>
          </div>
        </div>
        <div className="detail-visual">
          <video
            className="division-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={d.video} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="detail-solutions">
        <h2>Le nostre soluzioni {d.name}</h2>
        <div>
          {d.items.map((x) => (
            <article key={x}>
              <span className="solution-icon">
                <DivisionIcon aria-hidden="true" strokeWidth={1.7} />
              </span>
              <h3>{x}</h3>
              <p>
                Una soluzione configurata sulle esigenze e sugli obiettivi della
                tua impresa.
              </p>
              <Link href="/#contatti">Scopri di più →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="detail-cta">
        <h2>Portiamo valore alla tua impresa.</h2>
        <p>
          Parla con un consulente {d.name} e scopri la soluzione più adatta a
          te.
        </p>
        <Link className="button light" href="/#contatti">
          Contattaci ora <span>→</span>
        </Link>
      </section>
    </main>
  );
}
