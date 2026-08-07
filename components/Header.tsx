"use client";

import { useState, useEffect } from "react";
import { company } from "@/lib/data";

const links = [
  { href: "#materiel", label: "Matériel" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span>📍 {company.zone} — Livraison sur chantier</span>
          </div>
          <div className="topbar__right">
            {company.contacts.map((c, i) => (
              <span key={c.tel} style={{ display: "inline-flex", gap: 10 }}>
                {i > 0 && <span className="topbar__sep">|</span>}
                <a href={`tel:${c.tel}`}>☎ {c.phone} — {c.name}</a>
              </span>
            ))}
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? " scrolled" : ""}`} id="top">
        <div className="container header__inner">
          <a href="#top" className="brand">
            <span className="brand__mark">BSM</span>
            <span className="brand__text">
              <strong>Global Trading</strong>
              <small>{company.tagline}</small>
            </span>
          </a>
          <nav className={`nav${open ? " open" : ""}`}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#devis"
              className="btn btn--primary btn--sm"
              onClick={() => setOpen(false)}
            >
              Devis gratuit
            </a>
          </nav>
          <button
            className="nav__toggle"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
