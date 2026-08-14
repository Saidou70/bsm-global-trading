import { getConseilBySlug, conseils } from "@/lib/conseils";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";
import Link from "next/link";

export function generateStaticParams() {
  return conseils.map((conseil) => ({
    slug: conseil.slug,
  }));
}

export default async function ConseilPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const conseil = getConseilBySlug(resolvedParams.slug);

  if (!conseil) {
    notFound();
  }

  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#f8fafc", minHeight: "80vh", padding: "40px 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          
          <div style={{ marginBottom: "24px" }}>
            <Link href="/#conseils" style={{ color: "var(--brand-red)", textDecoration: "none", fontWeight: 600 }}>
              ← Retour aux conseils
            </Link>
          </div>

          <div style={{ backgroundColor: "#fff", borderRadius: "24px", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
            
            <div style={{ position: "relative", width: "100%", height: "clamp(200px, 40vw, 400px)" }}>
              <Image 
                src={conseil.image} 
                alt={conseil.title} 
                fill 
                style={{ objectFit: "cover" }} 
                unoptimized 
              />
            </div>

            <div style={{ padding: "clamp(24px, 5vw, 40px)" }}>
              <div style={{ color: "var(--slate)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", fontWeight: 700 }}>
                Publié le {conseil.date}
              </div>
              <h1 style={{ fontSize: "2.5rem", color: "var(--navy)", marginBottom: "32px", lineHeight: 1.2 }}>
                {conseil.title}
              </h1>
              
              <div style={{ fontSize: "1.1rem", color: "var(--slate)", lineHeight: 1.8 }}>
                {conseil.content}
              </div>

              <div style={{ marginTop: "40px", paddingTop: "40px", borderTop: "1px solid var(--line)", textAlign: "center" }}>
                <p style={{ color: "var(--navy)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px" }}>
                  Vous avez un projet nécessitant ce matériel ?
                </p>
                <a 
                  href="https://wa.me/33641850546?text=Bonjour, je souhaite un devis suite à la lecture du conseil : " 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--wa" 
                >
                  Contactez-nous sur WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
