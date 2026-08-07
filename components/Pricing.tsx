"use client";

import { useState } from "react";
import { pricing, RATE_DH_PER_EUR } from "@/lib/data";
import Image from "next/image";

type Mode = "both" | "dh" | "eur";

function eur(dh: number) {
  return Math.round(dh / RATE_DH_PER_EUR);
}

function formatDH(dh: number) {
  return dh.toLocaleString("fr-FR");
}

export default function Pricing() {
  const [mode, setMode] = useState<Mode>("both");

  return (
    <section className="section section--alt" id="tarifs">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Nos tarifs</span>
          <h2>Location à la journée — DH &amp; €</h2>
          <p>
            Tarifs indicatifs de location journalière (hors transport et
            carburant). Dégressifs à la semaine et au mois. Devis personnalisé
            sur simple demande.
          </p>
        </div>

        <div className="pricing-head">
          <div className="toggle" role="group" aria-label="Devise">
            <button
              className={mode === "both" ? "active" : ""}
              onClick={() => setMode("both")}
            >
              DH &amp; €
            </button>
            <button
              className={mode === "dh" ? "active" : ""}
              onClick={() => setMode("dh")}
            >
              DH
            </button>
            <button
              className={mode === "eur" ? "active" : ""}
              onClick={() => setMode("eur")}
            >
              €
            </button>
          </div>
        </div>

        <div className="pricing">
          {pricing.map((group, i) => (
            <div className={`price-card animate-fade-up delay-${(i % 3 + 1) * 100}`} key={group.title}>
              <div className="price-card__media" style={{ position: "relative" }}>
                <Image src={`/images/${group.art}.png`} alt={group.title} fill style={{ objectFit: "cover" }} />
              </div>
              <h3>
                {group.icon} {group.title}
              </h3>
              <ul className="price-list">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <b>
                      {mode !== "eur" && <>{formatDH(item.dh)} DH</>}
                      {mode === "both" && <i>≈ {eur(item.dh)} €</i>}
                      {mode === "eur" && <>{eur(item.dh)} €</>}
                    </b>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          💡 Taux de conversion indicatif : 1&nbsp;€ ≈ {RATE_DH_PER_EUR}&nbsp;DH.
          Les prix affichés sont indicatifs et peuvent varier selon la durée, le
          modèle exact et le lieu de livraison.
        </p>
        <div className="pricing__cta">
          <a href="#devis" className="btn btn--primary btn--lg">
            Obtenir un devis précis
          </a>
        </div>
      </div>
    </section>
  );
}
