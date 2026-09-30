"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  ["Home", "#home"],
  ["Divisioni", "#divisioni"],
  ["Settori", "#settori"],
  ["Come lavoriamo", "#metodo"],
  ["Chi siamo", "#chi-siamo"],
  ["Contatti", "#contatti"],
];

export function DivisionHeader({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const navId = useId();
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 901px)");
    const onResize = () => {
      if (wide.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="topbar">
      <Link
        className="brand brand-lockup"
        href={home ? "#home" : "/"}
        aria-label="OMNIMPRESA home"
      >
        <span className="brand-logo" />
      </Link>
      <button
        ref={toggle}
        className="hamb"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Chiudi menu" : "Apri menu"}
        aria-expanded={open}
        aria-controls={navId}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav
        id={navId}
        aria-label="Navigazione principale"
        className={open ? "open" : ""}
      >
        {navigation.map(([label, hash]) => (
          <Link
            key={label}
            href={home ? hash : hash === "#home" ? "/" : `/${hash}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        className="button header-cta"
        href={home ? "#contatti" : "/#contatti"}
      >
        Richiedi analisi
      </Link>
    </header>
  );
}
