"use client";

export default function AgencyMap() {
  return (
    <section className="section" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <h2 style={{ fontSize: "2rem", color: "var(--navy)", marginBottom: "32px", textAlign: "center" }}>
          Vous cherchez une agence près de chez vous ?
        </h2>

        <div style={{ 
          position: "relative",
          width: "100%",
          height: "500px",
          backgroundColor: "#E2E8F0",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Paris,France&zoom=11&size=1200x500&maptype=roadmap&style=feature:all|element:labels.text.fill|color:0x333333&style=feature:water|element:geometry|color:0xc8d7d4&style=feature:landscape|element:geometry|color:0xf5f5f2&style=feature:poi|element:geometry|color:0xdfd2ae')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid var(--line)"
        }}>
          
          <div style={{ 
            position: "absolute", 
            top: "24px", 
            right: "24px", 
            width: "360px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden"
          }}>
            <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid var(--line)", padding: "12px 16px" }}>
              <input type="text" placeholder="Ville, code postal, ..." style={{ flex: 1, border: "none", outline: "none", fontSize: "1rem" }} />
              <button style={{ background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer" }}>🔍</button>
            </div>
            
            <div style={{ maxHeight: "300px", overflowY: "auto", padding: "16px" }}>
              <h4 style={{ fontSize: "0.9rem", color: "var(--navy)", marginBottom: "16px" }}>26 résultats trouvés</h4>
              
              <div style={{ marginBottom: "20px" }}>
                <h5 style={{ fontSize: "1.1rem", color: "var(--brand-red)", marginBottom: "4px" }}>BSM City République</h5>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem", margin: 0 }}>121 Boulevard Richard Lenoir, 75011 Paris</p>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem", margin: 0 }}>+33 1 55 28 93 35</p>
                <p style={{ color: "var(--slate-light)", fontSize: "0.85rem", marginTop: "4px" }}>📍 2.64 Km</p>
              </div>

              <div>
                <h5 style={{ fontSize: "1.1rem", color: "var(--brand-red)", marginBottom: "4px" }}>BSM City Auriol</h5>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem", margin: 0 }}>120, boulevard Vincent Auriol, 75013 Paris</p>
                <p style={{ color: "var(--slate)", fontSize: "0.9rem", margin: 0 }}>+33 1 87 02 81 36</p>
                <p style={{ color: "var(--slate-light)", fontSize: "0.85rem", marginTop: "4px" }}>📍 4.28 Km</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
