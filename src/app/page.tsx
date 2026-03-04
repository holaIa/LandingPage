import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import Features from "@/components/Features";
import ClinicalSummaryFeature from "@/components/ClinicalSummaryFeature";
import Platform from "@/components/Platform";
import PlatformShowcase from "@/components/PlatformShowcase";
import MobileAppShowcase from "@/components/MobileAppShowcase";
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
      <Agents />
      <ClinicalSummaryFeature />
      <Comparison />
      <PlatformShowcase />
      <MobileAppShowcase />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
