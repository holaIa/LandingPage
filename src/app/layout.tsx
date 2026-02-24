import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileOptimizer from "@/components/MobileOptimizer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mediteam.mx"),
  title: "MediTeam - CRM Médico Inteligente con Agentes de IA",
  description:
    "Revoluciona la gestión de tu clínica médica con nuestro CRM inteligente. Automatiza citas por WhatsApp, gestiona pacientes y optimiza tu práctica médica con 4 agentes de IA especializados 24/7.",
  keywords:
    "CRM médico, agentes IA, WhatsApp médico, citas médicas, gestión clínica, automatización médica, expediente médico digital, software médico, MediTeam",
  authors: [{ name: "MediTeam" }],
  creator: "MediTeam",
  publisher: "MediTeam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MediTeam - CRM Médico Inteligente con Agentes de IA",
    description:
      "4 agentes de IA trabajando para tu consultorio 24/7. Automatiza citas, gestiona pacientes y optimiza tu práctica médica.",
    url: "https://mediteam.mx",
    siteName: "MediTeam",
    type: "website",
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediTeam - CRM Médico Inteligente con Agentes de IA",
    description:
      "4 agentes de IA trabajando para tu consultorio 24/7. Automatiza citas, gestiona pacientes y optimiza tu práctica médica.",
  },
  alternates: {
    canonical: "https://mediteam.mx",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MediTeam",
  applicationCategory: "HealthApplication",
  description:
    "CRM médico inteligente con 4 agentes de IA especializados que automatizan citas, gestión de pacientes y seguimiento post-consulta vía WhatsApp.",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "MXN",
  },
  provider: {
    "@type": "Organization",
    name: "MediTeam",
    url: "https://mediteam.mx",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <MobileOptimizer>{children}</MobileOptimizer>
      </body>
    </html>
  );
}
