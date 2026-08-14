import { getProductBySlug, catalog } from "@/lib/catalog";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";
import ProductPricing from "@/components/ProductPricing";
import Link from "next/link";

export function generateStaticParams() {
  return catalog.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#f8fafc", minHeight: "80vh", padding: "40px 0" }}>
        <div className="container">
          
          <div style={{ marginBottom: "24px" }}>
            <Link href="/" style={{ color: "var(--brand-red)", textDecoration: "none", fontWeight: 600 }}>
              ← Retour au catalogue
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px", backgroundColor: "#fff", padding: "40px", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
            
            {/* Left Col: Image */}
            <div style={{ position: "relative", width: "100%", height: "400px", backgroundColor: "#fff", border: "1px solid var(--line)", borderRadius: "12px" }}>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                style={{ objectFit: "contain", padding: "24px" }} 
                unoptimized 
              />
            </div>

            {/* Right Col: Info */}
            <div>
              <div style={{ color: "var(--slate-light)", textTransform: "uppercase", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px", marginBottom: "8px" }}>
                {product.category}
              </div>
              <h1 style={{ fontSize: "2.4rem", color: "var(--navy)", marginBottom: "16px", lineHeight: 1.2 }}>
                {product.name}
              </h1>
              <div style={{ color: "var(--brand-red)", fontWeight: 700, marginBottom: "24px", fontSize: "1.1rem" }}>
                ★ {product.rating} / 5
              </div>
              <p style={{ color: "var(--slate)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "32px" }}>
                {product.description}
              </p>

              {/* Pricing Grid */}
              <ProductPricing prices={product.prices} />

              <a 
                href={`https://wa.me/33641850546?text=Bonjour, je souhaite un devis pour la location du matériel : ${product.name}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn--wa" 
                style={{ width: "100%", textAlign: "center", display: "block", fontSize: "1.2rem", padding: "16px" }}
              >
                Vérifier la disponibilité (WhatsApp)
              </a>
            </div>

          </div>

          {/* Details & Specs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px", marginTop: "40px" }}>
            
            <div style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
              <h2 style={{ fontSize: "1.8rem", color: "var(--navy)", marginBottom: "24px" }}>Description détaillée</h2>
              <p style={{ color: "var(--slate)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                {product.longDescription}
              </p>
            </div>

            <div style={{ backgroundColor: "#fff", padding: "40px", borderRadius: "16px", boxShadow: "var(--shadow-sm)" }}>
              <h2 style={{ fontSize: "1.8rem", color: "var(--navy)", marginBottom: "24px" }}>Caractéristiques techniques</h2>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} style={{ borderBottom: i === product.specs.length - 1 ? "none" : "1px solid var(--line)" }}>
                      <td style={{ padding: "16px 0", color: "var(--slate)", fontWeight: 600 }}>{spec.label}</td>
                      <td style={{ padding: "16px 0", color: "var(--navy)", textAlign: "right" }}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
