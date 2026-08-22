"use client";

export default function Features() {
  return (
    <section className="section" id="services" style={{ backgroundColor: "#FAFCFF" }}>
      <div className="container">
        
        {/* Support block */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "2.4rem", color: "var(--navy)", marginBottom: "16px" }}>
            Nos équipes à votre service
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--slate)" }}>
            Nos conseillers sont à votre écoute pour répondre à vos questions,<br />dans vos agences, par téléphone ou en ligne
          </p>
        </div>



        {/* Benefits block */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--navy)" }}>
            Avec BSM, exigez plus de la location
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          
          <div style={{ backgroundColor: "#fff", border: "1px solid var(--line)", borderRadius: "16px", padding: "32px" }}>
            <div style={{ color: "var(--brand-red)", fontSize: "2rem", marginBottom: "16px" }}>⏳</div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--navy)", marginBottom: "12px" }}>Louez comme vous le souhaitez</h3>
            <p style={{ color: "var(--slate)", fontSize: "0.95rem" }}>Location courte ou longue durée, livraison ou retrait, modalité de paiement : c'est vous qui choisissez.</p>
          </div>

          <div style={{ backgroundColor: "#fff", border: "1px solid var(--line)", borderRadius: "16px", padding: "32px" }}>
            <div style={{ color: "var(--brand-red)", fontSize: "2rem", marginBottom: "16px" }}>💻</div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--navy)", marginBottom: "12px" }}>Pilotez toutes vos locations</h3>
            <p style={{ color: "var(--slate)", fontSize: "0.95rem" }}>Réservation et gestion en ligne : vous avez la main sur vos locations dans votre espace client.</p>
          </div>

          <div style={{ backgroundColor: "#fff", border: "1px solid var(--line)", borderRadius: "16px", padding: "32px" }}>
            <div style={{ color: "var(--brand-red)", fontSize: "2rem", marginBottom: "16px" }}>🎯</div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--navy)", marginBottom: "12px" }}>Concentrez-vous sur l'essentiel</h3>
            <p style={{ color: "var(--slate)", fontSize: "0.95rem" }}>Conseils de choix et assistance dédiée : nos équipes sont mobilisées pour vous simplifier la location.</p>
          </div>

          <div style={{ backgroundColor: "#fff", border: "1px solid var(--line)", borderRadius: "16px", padding: "32px" }}>
            <div style={{ color: "var(--brand-red)", fontSize: "2rem", marginBottom: "16px" }}>🌱</div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--navy)", marginBottom: "12px" }}>Protégez votre environnement</h3>
            <p style={{ color: "var(--slate)", fontSize: "0.95rem" }}>Matériels à faibles émissions et sécurité renforcée : engageons-nous pour l'environnement.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
