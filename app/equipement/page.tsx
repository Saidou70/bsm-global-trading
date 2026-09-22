import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";

import Image from "next/image";

export const metadata = {
  title: "Équipement de Protection (EPI) - BSM",
  description: "Équipements de sécurité individuelle pour chantiers et industrie.",
};

const equipments = [
  { id: 1, name: "Casque de sécurité", src: "/images/epi/casque.jpg", desc: "Protection indispensable contre les chutes d'objets." },
  { id: 2, name: "Protection auditive", src: "/images/epi/protection_auditive.jpg", desc: "Casques anti-bruit pour environnements sonores intenses." },
  { id: 3, name: "Lunettes de protection", src: "/images/epi/lunettes.jpg", desc: "Protège les yeux contre les projections et poussières." },
  { id: 4, name: "Masque respiratoire", src: "/images/epi/masque.jpg", desc: "Filtration de l'air contre les particules toxiques." },
  { id: 5, name: "Gilet haute visibilité", src: "/images/epi/gilet.jpg", desc: "Assure d'être vu de jour comme de nuit sur le chantier." },
  { id: 6, name: "Gants de sécurité", src: "/images/epi/gants.jpg", desc: "Protection des mains contre les coupures et l'abrasion." },
  { id: 7, name: "Harnais antichute", src: "/images/epi/harnais.jpg", desc: "Sécurité maximale pour les travaux en hauteur." },
  { id: 8, name: "Chaussures de sécurité", src: "/images/epi/chaussures.jpg", desc: "Bottes renforcées pour protéger les pieds et éviter les glissades." },
  { id: 9, name: "Combinaison de travail", src: "/images/epi/combinaison.jpg", desc: "Vêtement de protection intégral résistant pour les environnements salissants." },
  { id: 10, name: "Vêtements de pluie", src: "/images/epi/pluie.jpg", desc: "Imperméables haute visibilité pour travailler au sec lors des intempéries." },
];

export default function EquipementPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px", paddingBottom: "80px", minHeight: "100vh", backgroundColor: "var(--bg)" }}>
        <style>{`
          .epi-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-top: 50px;
          }
          .epi-card {
            background-color: var(--bg-alt);
            border: 1px solid var(--line);
            border-radius: 16px;
            padding: 24px;
            display: flex;
            align-items: flex-start;
            gap: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          }
          .epi-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(230, 57, 70, 0.1);
            border-color: rgba(230, 57, 70, 0.2);
          }
          .epi-icon {
            font-size: 2.5rem;
            background: rgba(230, 57, 70, 0.1);
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            flex-shrink: 0;
          }
          .epi-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--brand-red);
            margin-bottom: 8px;
          }
          .epi-desc {
            font-size: 0.95rem;
            color: var(--text);
            line-height: 1.5;
          }
        `}</style>
        
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "var(--brand-red)", fontWeight: 800 }}>
              Équipement de Sécurité Industrielle
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--slate)", lineHeight: 1.6 }}>
              La sécurité sur les chantiers est notre priorité absolue. Nous proposons une gamme complète d'Équipements de Protection Individuelle (EPI) pour assurer la sécurité totale de vos équipes.
            </p>
          </div>

          <div className="epi-grid">
            {equipments.map((item) => (
              <div key={item.id} className="epi-card">
                <div style={{ position: 'relative', width: '100px', height: '100px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src={item.src} alt={item.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 className="epi-title">{item.name}</h3>
                  <p className="epi-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: "80px", 
            padding: "50px", 
            backgroundColor: "var(--brand-red)", 
            borderRadius: "24px",
            textAlign: "center",
            color: "#fff",
            boxShadow: "0 10px 40px rgba(230, 57, 70, 0.25)"
          }}>
            <h2 style={{ fontSize: "2.2rem", marginBottom: "20px", fontWeight: 700 }}>Besoin d'équiper vos équipes ?</h2>
            <p style={{ fontSize: "1.15rem", opacity: 0.95, marginBottom: "35px", maxWidth: "600px", margin: "0 auto 35px auto" }}>
              Contactez-nous pour toute demande de devis sur notre gamme de protection individuelle.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+33649842162" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 36px",
                backgroundColor: "#fff",
                color: "var(--brand-red)",
                borderRadius: "99px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1.1rem",
                transition: "transform 0.2s"
              }}>
                📞 Nous appeler
              </a>
              <a href="https://wa.me/33649842162" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 36px",
                backgroundColor: "#25D366",
                color: "#fff",
                borderRadius: "99px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1.1rem",
                transition: "transform 0.2s"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
