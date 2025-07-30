import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import PlatformShowcase from "@/components/PlatformShowcase";
import PlatformScreenshots from "@/components/PlatformScreenshots";
import Agents from "@/components/Agents";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      {/* <Platform /> */}
      <PlatformShowcase />
      {/* <PlatformScreenshots /> */}
      <Agents />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
