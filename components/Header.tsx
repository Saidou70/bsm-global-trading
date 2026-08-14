"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrency } from "./CurrencyProvider";
import { company } from "@/lib/data";

const links = [
  { href: "#materiel", label: "Location" },
  { href: "#tarifs", label: "Vente" },
  { href: "#services", label: "Services" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { currency, setCurrency } = useCurrency();

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
        <div className="container topbar__inner" style={{ padding: "8px 0" }}>
          <div className="topbar__left" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a href="tel:+33649842162" style={{ fontWeight: 600 }}>Tel : <span style={{ color: "var(--brand-red)" }}>+33 6 49 84 21 62</span> (Mr ben)</a>
            <span className="topbar__sep">|</span>
            <a href="tel:0033641850546" style={{ fontWeight: 600 }}>Tel : <span style={{ color: "var(--brand-red)" }}>0033641850546</span> (Mr hannane Samir)</a>
            <span className="topbar__sep">|</span>
            <a href="#support">Accessible gratuitement</a>
            <span className="topbar__sep">|</span>
            <a href="#agence">Trouver une agence</a>
          </div>
          <div className="topbar__right" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <div style={{ 
              display: "flex", 
              backgroundColor: "rgba(255, 255, 255, 0.1)", 
              borderRadius: "99px", 
              padding: "4px", 
              gap: "4px" 
            }}>
              <button 
                onClick={() => setCurrency("EUR")} 
                style={{ 
                  padding: "4px 12px", 
                  borderRadius: "99px", 
                  border: "none", 
                  fontSize: "0.85rem", 
                  fontWeight: 600,
                  cursor: "pointer",
                  backgroundColor: currency === "EUR" ? "var(--brand-red)" : "transparent",
                  color: currency === "EUR" ? "#fff" : "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}>
                🇪🇺 EUR
              </button>
              <button 
                onClick={() => setCurrency("MAD")} 
                style={{ 
                  padding: "4px 12px", 
                  borderRadius: "99px", 
                  border: "none", 
                  fontSize: "0.85rem", 
                  fontWeight: 600,
                  cursor: "pointer",
                  backgroundColor: currency === "MAD" ? "var(--brand-red)" : "transparent",
                  color: currency === "MAD" ? "#fff" : "rgba(255, 255, 255, 0.7)",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}>
                🇲🇦 MAD
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? " scrolled" : ""}`} id="top" style={{ padding: "10px 0" }}>
        <div className="container header__inner" style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          
          <a href="#top" className="brand" style={{ gap: "10px" }}>
            <span className="brand__mark" style={{ fontSize: "1.8rem", padding: "10px 16px" }}>BSM</span>
          </a>

          <nav className={`nav${open ? " open" : ""}`} style={{ flex: 1, gap: "24px" }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: "1.1rem", textTransform: "uppercase", fontWeight: 700 }}>
                {l.label}
              </a>
            ))}
            
            <form onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                router.push(`/?q=${encodeURIComponent(searchQuery.trim())}#materiel`);
              } else {
                router.push(`/#materiel`);
              }
              setOpen(false);
            }} style={{ flex: 1, position: "relative", marginLeft: "20px" }}>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Que recherchez-vous ?" 
                style={{ 
                  width: "100%", 
                  padding: "12px 20px", 
                  borderRadius: "99px", 
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--bg-alt)",
                  outline: "none"
                }} 
              />
              <button type="submit" style={{ 
                position: "absolute", 
                right: "6px", 
                top: "6px", 
                bottom: "6px", 
                backgroundColor: "var(--brand-red)", 
                color: "#fff", 
                border: "none", 
                borderRadius: "50%", 
                width: "36px",
                height: "36px",
                display: "grid",
                placeItems: "center",
                cursor: "pointer"
              }}>
                🔍
              </button>
            </form>
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
