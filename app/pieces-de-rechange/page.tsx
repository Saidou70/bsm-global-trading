import fs from "fs";
import path from "path";
import Image from "next/image";

export const metadata = {
  title: "Pièces de Rechange - BSM",
  description: "Découvrez notre catalogue de pièces de rechange",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";

export default function PiecesDeRechangePage() {
  const piecesDir = path.join(process.cwd(), "public", "piece de rechange");
  
  let images: string[] = [];
  try {
    const files = fs.readdirSync(piecesDir).sort();
    images = files
      .filter((file) => file.match(/\.(jpg|jpeg|png|gif|webp)$/i))
      .map((file) => `/piece de rechange/${file}`);
  } catch (error) {
    console.error("Error reading pieces de rechange directory", error);
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh" }}>
        <style>{`
          .piece-card-page {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            background-color: var(--bg-alt);
            aspect-ratio: 1;
            border: 1px solid var(--line);
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            cursor: pointer;
          }
          .piece-card-page:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(230, 57, 70, 0.15);
            border-color: rgba(230, 57, 70, 0.3);
          }
          .piece-card-page img {
            transition: transform 0.5s ease !important;
          }
          .piece-card-page:hover img {
            transform: scale(1.08);
          }
        `}</style>
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--brand-red)" }}>Pièces de Rechange</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: "3rem" }}>
            Explorez notre sélection de pièces de rechange de haute qualité.
          </p>

          {images.length > 0 ? (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
              gap: "32px" 
            }}>
              {images.map((imgSrc, index) => {
                // Noms et descriptions génériques (à modifier selon les vraies pièces)
                const pieceDetails = [
                  { name: "Filtre à air industriel", description: "Filtre de haute qualité pour engins de chantier." },
                  { name: "Pompe hydraulique", description: "Pompe de rechange résistante pour pelleteuses." },
                  { name: "Courroie de transmission", description: "Courroie renforcée pour une durabilité maximale." },
                  { name: "Démarreur 24V", description: "Démarreur puissant pour gros équipements." },
                  { name: "Alternateur", description: "Alternateur robuste assurant une charge constante." },
                  { name: "Kit de joints", description: "Kit complet de joints pour vérins." },
                  { name: "Vérin de direction", description: "Vérin de direction haute pression." },
                  { name: "Disque de frein", description: "Disque de frein renforcé pour sécurité." },
                  { name: "Roulement à billes", description: "Roulement de précision industriel." },
                  { name: "Axe d'articulation", description: "Axe traité pour une résistance extrême." },
                  { name: "Injecteur diesel", description: "Injecteur de précision pour moteur thermique." },
                ];
                
                const detail = pieceDetails[index] || { name: `Pièce N°${index + 1}`, description: "Pièce de rechange certifiée d'origine." };

                return (
                  <div key={index} className="piece-card-page" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
                      <Image 
                        src={imgSrc} 
                        alt={detail.name} 
                        fill 
                        style={{ objectFit: "cover" }} 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-alt)' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-title, #222)', fontWeight: 700 }}>
                        {detail.name}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--slate)', margin: 0, lineHeight: 1.5 }}>
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Aucune pièce de rechange n'est disponible pour le moment.</p>
          )}

          <div style={{ 
            marginTop: "80px", 
            padding: "40px", 
            backgroundColor: "var(--brand-red)", 
            borderRadius: "16px",
            textAlign: "center",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(230, 57, 70, 0.2)"
          }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "15px" }}>Pour tous autres besoins, contactez-nous</h2>
            <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "25px", maxWidth: "600px", margin: "0 auto 25px auto" }}>
              Vous ne trouvez pas la pièce que vous cherchez ? Nous avons certainement ce qu'il vous faut en stock ou sur commande.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+33649842162" style={{
                display: "inline-block",
                padding: "12px 30px",
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
                gap: "8px",
                padding: "12px 30px",
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
                Message WhatsApp
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
