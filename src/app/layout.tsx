import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileOptimizer from "@/components/MobileOptimizer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HolaIA - CRM Médico Inteligente con Agentes de IA",
  description:
    "Revoluciona la gestión de tu clínica médica con nuestro CRM inteligente. Automatiza citas por WhatsApp, gestiona pacientes y optimiza tu práctica médica con agentes de IA especializados.",
  keywords:
    "CRM médico, agentes IA, WhatsApp, citas médicas, gestión clínica, automatización médica",
  authors: [{ name: "HolaIA Team" }],
  openGraph: {
    title: "HolaIA - CRM Médico Inteligente",
    description:
      "Revoluciona la gestión de tu clínica médica con agentes de IA",
    type: "website",
    locale: "es_ES",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
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
        {/* Meta tags adicionales para optimización móvil */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <MobileOptimizer>{children}</MobileOptimizer>
      </body>
    </html>
  );
}
