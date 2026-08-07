import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Categories from "@/components/Categories";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <Pricing />
        <Features />
        <About />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
