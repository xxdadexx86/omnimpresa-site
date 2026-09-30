import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BarChart3, Cpu, GraduationCap, Leaf, MonitorUp, ShieldCheck } from "lucide-react";
import { catalog } from "../../catalog";
import { DivisionHeader } from "../../division-header";

const icons = { finance: BarChart3, energy: Leaf, technology: Cpu, digital: MonitorUp, security: ShieldCheck, academy: GraduationCap };
type Slug = keyof typeof catalog;
function getDivision(slug: string) { if (!Object.hasOwn(catalog, slug)) notFound(); return catalog[slug as Slug]; }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const d = getDivision(slug);
  return { title: `${d.name} | OMNIMPRESA`, description: d.intro };
}
export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const d = getDivision(slug); const Icon = icons[slug as Slug];
  const href = `/?divisione=${slug}#contatti`;
  return <main>
    <DivisionHeader />
    <section className="division-detail">
      <div className="detail-copy">
        <p className="eyebrow"><span className="detail-icon"><Icon aria-hidden="true" /></span>DIVISIONE {d.name.toUpperCase()}</p>
        <h1>OMNIMPRESA <em>{d.name}</em></h1><p>{d.intro}</p>
        <p className="partner-label">{d.brand}</p>
        <div className="actions"><Link className="button" href={href}>{d.cta}</Link><Link className="button light" href="/#divisioni">Tutte le divisioni</Link></div>
      </div>
      <div className="detail-visual"><video className="division-video" autoPlay muted loop playsInline preload="metadata"><source src={`/assets/videos/${slug === "academy" ? "academy-business" : slug}.mp4`} type="video/mp4" /></video></div>
    </section>
    <section className="detail-solutions"><h2>Le soluzioni {d.name} per la tua azienda</h2><div>
      {d.items.map(([title, description]) => <article key={title}><span className="solution-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p><Link href={href}>Richiedi informazioni</Link></article>)}
    </div></section>
    <section className="detail-cta"><h2>Partiamo dalle tue esigenze.</h2><p>Un confronto per individuare il prossimo passo della tua impresa.</p><Link className="button light" href={href}>{d.cta}</Link></section>
    <footer><Link href="/">OMNIMPRESA · Servizi integrati per aziende</Link><Link href="/#contatti">Contatti</Link></footer>
  </main>;
}
