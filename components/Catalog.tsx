"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCurrency } from "./CurrencyProvider";
import { catalog } from "@/lib/catalog";
import Image from "next/image";
import Link from "next/link";

const filters = [
  { icon: "🛗", title: "Élévation de personnes" },
  { icon: "🏗️", title: "Manutention & levage" },
  { icon: "⚡", title: "Énergie & électricité" },
  { icon: "🚜", title: "Terrassement" },
  { icon: "🧱", title: "Compactage" },
  { icon: "🔧", title: "Équipement de chantier" },
  { icon: "🏗️", title: "Installations provisoires et sécurité" },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const { formatPrice } = useCurrency();

  const filteredCatalog = catalog.filter((item) => {
    const matchesCategory = activeCategory ? item.category === activeCategory : true;
    const matchesSearch = q 
      ? (item.name.toLowerCase().includes(q.toLowerCase()) || 
         item.category.toLowerCase().includes(q.toLowerCase()) || 
         item.description.toLowerCase().includes(q.toLowerCase()))
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section" id="materiel" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        
        {/* Header and Filters */}
        <div style={{ marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--navy)", textAlign: "center", marginBottom: "40px", textTransform: "uppercase", fontWeight: 800 }}>
            Nos matériels phares
          </h2>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 24px",
                border: activeCategory === null ? "1px solid var(--brand-red)" : "1px solid var(--slate)",
                borderRadius: "99px",
                backgroundColor: activeCategory === null ? "var(--brand-red)" : "transparent",
                color: activeCategory === null ? "#fff" : "var(--navy)",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              Tous
            </button>
            {filters.map((c) => {
              const isActive = activeCategory === c.title;
              return (
                <button
                  key={c.title}
                  onClick={() => setActiveCategory(isActive ? null : c.title)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 24px",
                    border: isActive ? "1px solid var(--brand-red)" : "1px solid var(--slate)",
                    borderRadius: "99px",
                    backgroundColor: isActive ? "var(--brand-red)" : "transparent",
                    color: isActive ? "#fff" : "var(--navy)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  <span style={{ fontSize: "1.2rem", filter: isActive ? "grayscale(100%) brightness(200%)" : "none" }}>{c.icon}</span>
                  {c.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Catalog Grid */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
          <p style={{ fontSize: "0.9rem", color: "var(--navy)", fontWeight: 700 }}>
            *Tarifs et durée de location en TTC par jours de location
          </p>
        </div>

        {filteredCatalog.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", color: "var(--slate)" }}>
            Aucun matériel disponible dans cette catégorie pour le moment.
          </div>
        ) : (
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "24px",
            alignItems: "stretch"
          }} className="catalog-grid">
            
            {filteredCatalog.map((item, idx) => {
              const isFeatured = idx === 0 && filteredCatalog.length > 1; // Only span 2 rows if there are multiple items
              return (
                <Link href={`/location/${item.slug}`} key={item.slug} style={{ 
                  textDecoration: "none", 
                  color: "inherit",
                  gridColumn: isFeatured ? "1 / 2" : "auto",
                  gridRow: isFeatured ? "1 / 3" : "auto",
                  display: "flex" 
                }}>
                  <div style={{ 
                    backgroundColor: "#F3F4F6", 
                    borderRadius: "24px", 
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    transition: "transform 0.3s, box-shadow 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    
                    <div style={{ 
                      position: "relative", 
                      width: "100%", 
                      flex: 1, 
                      minHeight: isFeatured ? "400px" : "200px",
                      marginBottom: "16px"
                    }}>
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        style={{ objectFit: "contain", padding: isFeatured ? "24px" : "16px" }} 
                        unoptimized 
                      />
                    </div>

                    <div style={{ 
                      backgroundColor: "#fff", 
                      borderRadius: "16px", 
                      padding: "24px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
                    }}>
                      <div style={{ fontSize: "0.75rem", color: "var(--brand-red)", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                        Tarif Web
                      </div>
                      <h3 style={{ fontSize: isFeatured ? "1.4rem" : "1.2rem", color: "var(--navy)", marginBottom: "4px", lineHeight: 1.2 }}>
                        {item.name}
                      </h3>
                      <p style={{ color: "var(--slate)", fontSize: "0.85rem", marginBottom: "24px" }}>
                        {item.specs[0].value} • ★ {item.rating}
                      </p>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {item.prices.map((p, pIdx) => {
                          const formatted = formatPrice(p.price, p.unit);
                          return (
                          <div key={p.duration} style={{ 
                            textAlign: "center", 
                            flex: 1,
                            borderRight: pIdx < item.prices.length - 1 ? "1px solid #E5E7EB" : "none"
                          }}>
                            <div style={{ fontSize: "0.7rem", color: "var(--slate)", marginBottom: "4px" }}>{p.duration}</div>
                            <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--navy)" }}>{formatted.price}</div>
                            <div style={{ fontSize: "0.65rem", color: "var(--slate-light)" }}>
                              {formatted.unit}
                            </div>
                          </div>
                          );
                        })}
                      </div>

                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .catalog-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 991px) {
          .catalog-grid a:first-child {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}} />
    </section>
  );
}
