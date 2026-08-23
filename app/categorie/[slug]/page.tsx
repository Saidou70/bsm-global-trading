import { catalog } from "@/lib/catalog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";

// Formatter function (simplified, always shows MAD on server component)
const formatPrice = (priceMad: number, unit: string) => {
  return { price: `${priceMad} Dhs`, unit };
};

export function generateStaticParams() {
  return [
    { slug: "travaux-interieur" },
    { slug: "travaux-exterieur" },
    { slug: "equipements" }
  ];
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Mapping slug to actual category string in catalog
  let categoryName = "";
  let categoryTitle = "";
  let categoryDesc = "";
  
  if (slug === "travaux-interieur") {
    categoryName = "Travaux intérieur";
    categoryTitle = "Travaux intérieurs";
    categoryDesc = "Peinture, sols, ponçage, nettoyage, rénovation ou démolition légère.";
  } else if (slug === "equipements") {
    categoryName = "Équipement de chantier";
    categoryTitle = "Équipements";
    categoryDesc = "Outils, machines et équipements divers pour faciliter vos chantiers.";
  } else if (slug === "travaux-exterieur") {
    categoryName = "Travaux extérieur";
    categoryTitle = "Travaux extérieurs";
    categoryDesc = "Jardin, piscine, façade, toiture, terrassement ou nettoyage extérieur.";
  } else {
    notFound();
  }

  let products = [];
  if (slug === "travaux-interieur") {
    products = catalog.filter(p => p.category === "Travaux intérieur");
  } else if (slug === "equipements") {
    products = catalog.filter(p => p.category === "Équipement de chantier");
  } else if (slug === "travaux-exterieur") {
    products = catalog.filter(p => p.category !== "Travaux intérieur" && p.category !== "Équipement de chantier");
  }

  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#f8fafc", minHeight: "80vh", padding: "40px 0" }}>
        <div className="container">
          
          <div style={{ marginBottom: "24px" }}>
            <Link href="/" style={{ color: "var(--brand-red)", textDecoration: "none", fontWeight: 600 }}>
              ← Retour à l'accueil
            </Link>
          </div>

          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <h1 style={{ fontSize: "2.8rem", color: "var(--navy)", marginBottom: "16px", textTransform: "uppercase", fontWeight: 800 }}>
              {categoryTitle}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--slate)", maxWidth: "700px", margin: "0 auto" }}>
              {categoryDesc}
            </p>
          </div>

          {products.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "var(--slate)", backgroundColor: "#fff", borderRadius: "16px" }}>
              Aucun matériel disponible dans cette catégorie pour le moment.
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: "24px",
              alignItems: "stretch"
            }}>
              {products.map((item) => (
                <Link href={`/location/${item.slug}`} key={item.slug} className="category-card" style={{ 
                  textDecoration: "none", 
                  color: "inherit",
                  display: "flex" 
                }}>
                  <div style={{ 
                    backgroundColor: "#fff", 
                    borderRadius: "24px", 
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    border: "1px solid var(--line)"
                  }}>
                    
                    <div style={{ 
                      position: "relative", 
                      width: "100%", 
                      flex: 1, 
                      minHeight: "250px",
                      backgroundColor: "#F9FAFB",
                      borderRadius: "16px",
                      marginBottom: "16px"
                    }}>
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 300px"
                        style={{ objectFit: "contain", padding: "24px" }} 
                        unoptimized 
                      />
                    </div>

                    <div style={{ padding: "8px" }}>
                      <div style={{ fontSize: "0.75rem", color: "var(--brand-red)", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                        Tarif Web
                      </div>
                      <h3 style={{ fontSize: "1.25rem", color: "var(--navy)", marginBottom: "8px", lineHeight: 1.2, textTransform: "uppercase", fontWeight: 800 }}>
                        {item.name}
                      </h3>
                      <p style={{ color: "var(--slate)", fontSize: "0.9rem", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
                        {item.specs[0].value} <span style={{ color: "var(--line)" }}>•</span> <span style={{ color: "var(--brand-red)" }}>★ {item.rating}</span>
                      </p>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                        {item.prices.map((p, pIdx) => {
                          const formatted = formatPrice(p.price, p.unit);
                          return (
                          <div key={p.duration} style={{ 
                            textAlign: "center", 
                            flex: 1,
                            borderRight: pIdx < item.prices.length - 1 ? "1px solid var(--line)" : "none"
                          }}>
                            <div style={{ fontSize: "0.75rem", color: "var(--slate)", marginBottom: "4px" }}>{p.duration}</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)" }}>{formatted.price}</div>
                            <div style={{ fontSize: "0.7rem", color: "var(--slate-light)" }}>
                              {formatted.unit}
                            </div>
                          </div>
                          );
                        })}
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
        <style dangerouslySetInnerHTML={{__html: `
          .category-card > div {
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .category-card:hover > div {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
          }
        `}} />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
