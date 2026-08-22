"use client";

import { conseils } from "@/lib/conseils";
import Link from "next/link";
import Image from "next/image";

export default function Conseils() {
  return (
    <section className="section" id="conseils" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        
        <h2 style={{ 
          fontSize: "2.5rem", 
          textAlign: "center", 
          color: "var(--navy)", 
          marginBottom: "40px",
          fontWeight: 800 
        }}>
          Conseils d'experts
        </h2>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "24px" 
        }}>
          {conseils.map((conseil) => (
            <Link href={`/conseils/${conseil.slug}`} key={conseil.slug} style={{ textDecoration: "none" }}>
              <div style={{ 
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                height: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                transition: "transform 0.3s",
                boxShadow: "var(--shadow-md)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                
                {/* Background Image */}
                <Image 
                  src={conseil.image} 
                  alt={conseil.title} 
                  fill 
                  style={{ objectFit: "cover", zIndex: 0 }} 
                  unoptimized
                />

                {/* Dark Gradient Overlay for readability */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "70%",
                  background: "linear-gradient(to top, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0) 100%)",
                  zIndex: 1
                }} />

                {/* Text Content */}
                <div style={{ position: "relative", zIndex: 2, padding: "32px" }}>
                  <div style={{ color: "#fff", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 700 }}>
                    — {conseil.date}
                  </div>
                  <h3 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3 }}>
                    {conseil.title}
                  </h3>
                </div>

              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
          <Link href="#conseils" style={{ 
            color: "var(--brand-red)", 
            fontWeight: 700, 
            textDecoration: "none",
            fontSize: "1rem"
          }}>
            Voir tous les conseils d'experts
          </Link>
        </div>

      </div>
    </section>
  );
}
