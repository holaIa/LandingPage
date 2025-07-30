import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
