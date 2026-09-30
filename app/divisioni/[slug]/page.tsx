import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  BarChart3,
  Cpu,
  GraduationCap,
  Leaf,
  MonitorUp,
  ShieldCheck,
  Landmark,
  CreditCard,
  Shield,
  PlugZap,
  Sun,
  BatteryCharging,
  ChartNoAxesCombined,
  Cable,
  Smartphone,
  Wifi,
  Laptop,
  CalendarCheck,
  Wrench,
  Globe,
  ShoppingCart,
  ContactRound,
  Workflow,
  Sparkles,
  Siren,
  Cctv,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { catalog } from "../../catalog";
import { DivisionHeader } from "../../division-header";
import { SiteFooter } from "../../site-footer";
import { MotionVideo } from "../../motion-video";
import { PartnerLogos } from "../../partner-logos";

const icons = {
  finance: BarChart3,
  energy: Leaf,
  technology: Cpu,
  digital: MonitorUp,
  security: ShieldCheck,
  academy: GraduationCap,
};
const serviceIcons = {
  finance: [Landmark, CreditCard, Shield],
  energy: [PlugZap, Sun, BatteryCharging, ChartNoAxesCombined, Cable],
  technology: [Smartphone, Wifi, Laptop, CalendarCheck, Wrench],
  digital: [Globe, ShoppingCart, ContactRound, Workflow, Sparkles],
  security: [Siren, Cctv],
  academy: [GraduationCap],
};
type Slug = keyof typeof catalog;
function getDivision(slug: string) {
  if (!Object.hasOwn(catalog, slug)) notFound();
  return catalog[slug as Slug];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDivision(slug);
  return { title: `${d.name} | OMNIMPRESA`, description: d.intro };
}
export default async function DivisionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDivision(slug);
  const Icon = icons[slug as Slug];
  const href = `/?divisione=${slug}#contatti`;
  return (
    <main>
      <DivisionHeader />
      <section className="division-detail">
        <div className="detail-copy">
          <p className="eyebrow">
            <span className="detail-icon">
              <Icon aria-hidden="true" />
            </span>
            DIVISIONE {d.name.toUpperCase()}
          </p>
          <h1>
            OMNIMPRESA <em>{d.name}</em>
          </h1>
          <p>{d.intro}</p>
          <p className="partner-label">{d.brand}</p>
          <div className="actions">
            <Link className="button" href={href}>
              <MessageCircle aria-hidden="true" />
              {d.cta}
            </Link>
            <Link className="button light" href="/#divisioni">
              Tutte le divisioni
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="detail-visual">
          <MotionVideo slug={slug} title={d.name} controls />
        </div>
      </section>
      {slug !== "academy" && (
        <section
          className="division-brands"
          aria-label={`Marchi per ${d.name}`}
        >
          <p className="eyebrow">COMPETENZE PER LA TUA IMPRESA</p>
          <PartnerLogos division={slug as Slug} />
        </section>
      )}
      <section
        className={`detail-solutions ${d.items.length === 1 ? "single-solution" : d.items.length === 5 ? "five-solutions" : ""}`}
      >
        <h2>Le soluzioni {d.name} per la tua azienda</h2>
        <div>
          {d.items.map(([title, description], index) => {
            const ServiceIcon = serviceIcons[slug as Slug][index];
            return (
              <article key={title}>
                <span className="solution-icon">
                  <ServiceIcon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={href}>
                  Richiedi informazioni <ArrowRight aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <section className="detail-cta">
        <h2>Partiamo dalle tue esigenze.</h2>
        <p>Un confronto per individuare il prossimo passo della tua impresa.</p>
        <Link className="button light" href={href}>
          <MessageCircle aria-hidden="true" />
          {d.cta}
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
