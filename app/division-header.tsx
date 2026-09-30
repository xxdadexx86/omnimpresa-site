"use client";
import { useState } from "react";
import Link from "next/link";
export function DivisionHeader() {
  const [open, setOpen] = useState(false);
  return <header className="topbar"><Link className="brand brand-lockup" href="/" aria-label="OMNIMPRESA home"><span className="brand-logo" /></Link>
    <button className="hamb" onClick={() => setOpen(!open)} aria-label={open ? "Chiudi menu" : "Apri menu"} aria-expanded={open}>☰</button>
    <nav className={open ? "open" : ""}>{[["Home", "/"], ["Divisioni", "/#divisioni"], ["Settori", "/#settori"], ["Come lavoriamo", "/#metodo"], ["Chi siamo", "/#chi-siamo"], ["Contatti", "/#contatti"]].map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav>
    <Link className="button header-cta" href="/#contatti">Richiedi analisi</Link></header>;
}
