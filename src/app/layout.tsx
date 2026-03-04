import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileOptimizer from "@/components/MobileOptimizer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mediteam.app"),
  title:
    "MediTeam - CRM Médico con IA para Médicos en Guadalajara y Zapopan | Jalisco",
  description:
    "CRM médico inteligente con 4 agentes de IA para clínicas y consultorios en Guadalajara, Zapopan y Jalisco. Automatiza citas por WhatsApp, gestiona expedientes médicos digitales y optimiza tu práctica médica 24/7. Software médico líder en la Zona Metropolitana de Guadalajara.",
  keywords:
    "CRM médico Guadalajara, software médico Zapopan, agentes IA médicos Jalisco, gestión clínica Guadalajara, citas médicas WhatsApp Zapopan, expediente médico digital Jalisco, automatización médica Guadalajara, software para doctores Guadalajara, CRM para clínicas Zapopan, inteligencia artificial médica Jalisco, MediTeam, gestión de consultorio Guadalajara, sistema de citas médicas Zapopan, WhatsApp médico Guadalajara, software para médicos Jalisco",
  authors: [{ name: "MediTeam", url: "https://mediteam.app" }],
  creator: "MediTeam",
  publisher: "MediTeam",
  category: "Medical Software",
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
    title:
      "MediTeam - CRM Médico con IA para Médicos en Guadalajara y Zapopan",
    description:
      "4 agentes de IA trabajando para tu consultorio 24/7 en Guadalajara, Zapopan y toda la Zona Metropolitana de Jalisco. Automatiza citas, gestiona pacientes y optimiza tu práctica médica.",
    url: "https://mediteam.app",
    siteName: "MediTeam",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: "/medica_nene.jpeg",
        width: 800,
        height: 600,
        alt: "MediTeam - CRM Médico con Inteligencia Artificial para consultorios en Guadalajara, Jalisco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "MediTeam - CRM Médico con IA | Guadalajara, Zapopan, Jalisco",
    description:
      "4 agentes de IA trabajando para tu consultorio 24/7. El software médico más inteligente de Guadalajara y Zapopan.",
    images: ["/medica_nene.jpeg"],
  },
  alternates: {
    canonical: "https://mediteam.app",
  },
  other: {
    "geo.region": "MX-JAL",
    "geo.placename": "Guadalajara, Zapopan, Jalisco, México",
    "geo.position": "20.6597;-103.3496",
    ICBM: "20.6597, -103.3496",
    "content-language": "es-MX",
  },
};

// JSON-LD Structured Data - SoftwareApplication
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MediTeam",
  applicationCategory: "HealthApplication",
  description:
    "CRM médico inteligente con 4 agentes de IA especializados para clínicas y consultorios en Guadalajara, Zapopan y Jalisco. Automatiza citas, gestión de pacientes y seguimiento post-consulta vía WhatsApp.",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "9900",
    priceCurrency: "MXN",
    description: "Costo de implementación único",
  },
  provider: {
    "@type": "Organization",
    name: "MediTeam",
    url: "https://mediteam.app",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "500",
    bestRating: "5",
  },
};

// JSON-LD - LocalBusiness para SEO local en Guadalajara/Zapopan
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "MediTeam - CRM Médico con IA",
  description:
    "Software CRM médico con inteligencia artificial para clínicas y consultorios en Guadalajara, Zapopan y Jalisco. 4 agentes de IA que automatizan la gestión de tu consultorio 24/7.",
  url: "https://mediteam.app",
  telephone: "+523315128570",
  email: "hola@holaia.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zapopan",
    addressRegion: "Jalisco",
    addressCountry: "MX",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.7214",
    longitude: "-103.3842",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Guadalajara",
      containedInPlace: {
        "@type": "State",
        name: "Jalisco",
      },
    },
    {
      "@type": "City",
      name: "Zapopan",
      containedInPlace: {
        "@type": "State",
        name: "Jalisco",
      },
    },
    {
      "@type": "City",
      name: "Tlaquepaque",
      containedInPlace: {
        "@type": "State",
        name: "Jalisco",
      },
    },
    {
      "@type": "City",
      name: "Tonalá",
      containedInPlace: {
        "@type": "State",
        name: "Jalisco",
      },
    },
    {
      "@type": "State",
      name: "Jalisco",
      containedInPlace: {
        "@type": "Country",
        name: "México",
      },
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  image: "https://mediteam.app/logoName.png",
  sameAs: ["https://wa.me/523315128570"],
};

// JSON-LD - FAQPage Schema
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cómo MediTeam evita errores en la gestión de citas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nuestros agentes de IA están entrenados específicamente en el sector médico y utilizan algoritmos avanzados para validar información, confirmar citas y detectar inconsistencias antes de que ocurran errores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué otras tareas puede optimizar MediTeam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MediTeam puede optimizar la gestión de expedientes médicos, recordatorios de medicamentos, seguimiento post-consulta, encuestas de satisfacción, y la coordinación entre diferentes especialistas.",
      },
    },
    {
      "@type": "Question",
      name: "¿La IA de MediTeam aprende sola y evoluciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, nuestros agentes de IA aprenden continuamente de cada interacción, mejorando sus respuestas y adaptándose a las necesidades específicas de tu clínica y pacientes.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede personalizar MediTeam para cada clínica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutamente. MediTeam se adapta a las políticas, horarios, especialidades y flujos de trabajo específicos de cada clínica, manteniendo la identidad y procesos únicos de tu práctica médica.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma implementar MediTeam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La implementación básica toma 24-48 horas. Para configuraciones más complejas o integraciones personalizadas, el proceso puede extenderse a 1-2 semanas con nuestro equipo de soporte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se puede integrar MediTeam con nuestros sistemas existentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, MediTeam se integra con la mayoría de sistemas médicos, laboratorios, farmacias y herramientas de gestión. Ofrecemos APIs personalizadas para integraciones específicas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Mis pacientes notarán que hablan con una IA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los agentes de MediTeam están diseñados para sentirse naturales y profesionales. Manejan el 80% de las interacciones comunes. Cuando una consulta requiere atención personalizada, el agente escala automáticamente a ti o a tu equipo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo se protegen los datos de mis pacientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toda la información está cifrada de extremo a extremo, cumplimos con regulaciones de protección de datos y nuestros servidores cuentan con los más altos estándares de seguridad. Solo tú y tu equipo autorizado tienen acceso a la información clínica.",
      },
    },
    {
      "@type": "Question",
      name: "¿MediTeam está disponible en Guadalajara y Zapopan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, MediTeam opera desde Zapopan, Jalisco y brinda servicio a toda la Zona Metropolitana de Guadalajara incluyendo Zapopan, Tlaquepaque, Tonalá y todo el estado de Jalisco. Nuestro equipo de soporte está disponible localmente para implementación y capacitación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tipo de médicos y clínicas usan MediTeam en Jalisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MediTeam es utilizado por médicos generales, especialistas, dentistas, psicólogos y clínicas de múltiples especialidades en Guadalajara, Zapopan y toda la zona metropolitana. Se adapta a cualquier especialidad médica.",
      },
    },
  ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        <MobileOptimizer>{children}</MobileOptimizer>
      </body>
    </html>
  );
}
