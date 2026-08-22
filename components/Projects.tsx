"use client";

export default function Projects() {
  return (
    <section className="section" style={{ backgroundColor: "#fff", paddingBottom: "40px" }}>
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--navy)", marginBottom: "8px" }}>
            Tous les projets travaux
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--slate)" }}>
            Une entrée simple pour vous guider vers le bon matériel selon votre besoin.
          </p>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          
          <a href="#interieur" style={{
            display: "block",
            padding: "32px",
            border: "1px solid var(--line)",
            borderRadius: "16px",
            textDecoration: "none",
            color: "inherit",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--brand-red)";
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--line)";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <h3 style={{ fontSize: "1.4rem", color: "var(--navy)", marginBottom: "12px" }}>Travaux intérieurs</h3>
            <p style={{ color: "var(--slate)", marginBottom: "24px", lineHeight: 1.5 }}>
              Peinture, sols, ponçage, nettoyage, rénovation ou démolition légère.
            </p>
            <span style={{ color: "var(--slate-light)", fontWeight: 600, fontSize: "0.95rem" }}>Voir les travaux intérieurs</span>
          </a>

          <a href="#exterieur" style={{
            display: "block",
            padding: "32px",
            border: "1px solid var(--line)",
            borderRadius: "16px",
            textDecoration: "none",
            color: "inherit",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--brand-red)";
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--line)";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <h3 style={{ fontSize: "1.4rem", color: "var(--navy)", marginBottom: "12px" }}>Travaux extérieurs</h3>
            <p style={{ color: "var(--slate)", marginBottom: "24px", lineHeight: 1.5 }}>
              Jardin, piscine, façade, toiture, terrassement ou nettoyage extérieur.
            </p>
            <span style={{ color: "var(--slate-light)", fontWeight: 600, fontSize: "0.95rem" }}>Voir les travaux extérieurs</span>
          </a>

        </div>
      </div>
    </section>
  );
}
