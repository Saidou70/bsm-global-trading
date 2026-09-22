import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export default function PiecesRechangePreview() {
  const piecesDir = path.join(process.cwd(), "public", "piece de rechange");
  
  let images: string[] = [];
  try {
    const files = fs.readdirSync(piecesDir);
    images = files
      .filter((file) => file.match(/\.(jpg|jpeg|png|gif|webp)$/i))
      .map((file) => `/piece de rechange/${file}`);
  } catch (error) {
    console.error("Error reading pieces de rechange directory", error);
  }

  if (images.length === 0) return null;

  return (
    <section className="section bg-light" style={{ padding: "80px 0", backgroundColor: "var(--bg-alt)" }}>
      <style>{`
        .piece-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          aspect-ratio: 1;
          border: 1px solid var(--line);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
        }
        .piece-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(230, 57, 70, 0.15);
          border-color: rgba(230, 57, 70, 0.3);
        }
        .piece-card img {
          transition: transform 0.5s ease !important;
        }
        .piece-card:hover img {
          transform: scale(1.05);
        }
      `}</style>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div>
            <h2 className="section__title" style={{ marginBottom: "10px" }}>Pièces de Rechange</h2>
            <p style={{ color: "var(--text)", fontSize: "1.1rem" }}>Découvrez notre stock de pièces détachées pour vos équipements.</p>
          </div>
          <Link href="/pieces-de-rechange" style={{
            display: "inline-block",
            padding: "10px 24px",
            backgroundColor: "var(--brand-red)",
            color: "#fff",
            borderRadius: "99px",
            fontWeight: 600,
            textDecoration: "none"
          }}>
            Voir tout
          </Link>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "24px" 
        }}>
          {images.map((imgSrc, index) => (
            <div key={index} className="piece-card">
              <Image 
                src={imgSrc} 
                alt={`Pièce de rechange aperçu ${index + 1}`} 
                fill 
                style={{ objectFit: "cover" }} 
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
