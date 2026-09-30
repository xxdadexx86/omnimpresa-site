import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link href="/" className="footer-brand" aria-label="OMNIMPRESA home">
        <span className="brand-logo" />
      </Link>
      <p>
        Servizi integrati per aziende.
        <br />
        Un solo interlocutore per il prossimo passo.
      </p>
      <div className="footer-links">
        <Link href="/#contatti">Contatti</Link>
        <Link href="/privacy">Privacy · bozza</Link>
        <Link href="/cookie">Cookie · bozza</Link>
      </div>
    </footer>
  );
}
