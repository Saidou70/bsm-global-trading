import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Catalog from "@/components/Catalog";
import Features from "@/components/Features";
import Conseils from "@/components/Conseils";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Suspense fallback={<div style={{ textAlign: "center", padding: "100px", color: "var(--slate)" }}>Chargement du catalogue...</div>}>
          <Catalog />
        </Suspense>
        <Features />
        <Conseils />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
