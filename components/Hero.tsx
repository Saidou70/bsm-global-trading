"use client";

import { useState } from "react";

export default function Hero() {
  return (
    <section className="hero" style={{ minHeight: "75vh", background: "url('/images/hero_banner.png') center/cover no-repeat", position: "relative", display: "flex", alignItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 1 }}></div>
      <div className="container" style={{ zIndex: 2, position: "relative" }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Big Text on left/top */}
          <div style={{ color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
            <div className="animate-fade-up" style={{ display: "inline-block", background: "rgba(255,255,255,0.9)", color: "var(--navy)", padding: "8px 24px", borderRadius: "var(--radius-round)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "20px" }}>
              Votre matériel, livré rapidement. Votre projet, facilité.
            </div>
            <h1 className="animate-fade-up delay-100" style={{ fontSize: "3.2rem", lineHeight: 1.1, marginBottom: "16px", maxWidth: "800px" }}>
              Location de matériel professionnel au Maroc — <span style={{ color: "var(--brand-red-light)" }}>Simple, rapide, fiable.</span>
            </h1>
            <p className="animate-fade-up delay-200" style={{ fontSize: "1.2rem", fontWeight: 500, maxWidth: "600px", lineHeight: 1.6 }}>
              Louez facilement du matériel de chantier, des outils, des machines et des équipements adaptés à vos besoins. Service assuré par Ben, disponible partout au Maroc.
            </p>
            <div className="animate-fade-up delay-300 hero__actions" style={{ marginTop: "32px" }}>
              <a href="#materiel" className="btn btn--primary" style={{ padding: "16px 36px", fontSize: "1.1rem" }}>
                Voir le catalogue
              </a>
              <a href="https://wa.me/33641850546" target="_blank" rel="noopener noreferrer" className="btn btn--wa" style={{ padding: "16px 36px", fontSize: "1.1rem", backgroundColor: "var(--wa)", color: "#fff", border: "none" }}>
                Demander un devis WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
