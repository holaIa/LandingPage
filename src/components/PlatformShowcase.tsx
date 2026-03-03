"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PlatformShowcase = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const animationConfig = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8 },
    viewport: { once: true },
  };

  const get3DColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border border-blue-100",
      purple: "bg-purple-50 border border-purple-100",
      orange: "bg-orange-50 border border-orange-100",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const showcaseItems = [
    {
      title: "Dashboard de Métricas",
      description:
        "Visualiza el rendimiento de tu clínica con métricas en tiempo real",
      iconUrl: "/images/3d-emojis/bar_chart_3d.png",
      color: "orange",
      image: "/images/plataforma/dashboard-1.png",
      features: [
        "Métricas de pacientes activos",
        "Análisis de citas y ocupación",
        "Reportes de satisfacción",
        "Indicadores de rendimiento",
      ],
    },
    {
      title: "Agentes de IA y Workflows",
      description:
        "Personaliza agentes inteligentes y automatiza flujos de trabajo en tu clínica",
      iconUrl: "/images/3d-emojis/robot_3d.png",
      color: "blue",
      image: "/images/plataforma/dashboard-4.png",
      features: [
        "Personalización de agentes",
        "Automatización de procesos",
        "Flujos de trabajo a medida",
        "Atención 24/7 con IA",
      ],
    },
    {
      title: "Gestión de Pacientes",
      description: "Administra expedientes médicos completos de forma digital",
      iconUrl: "/images/3d-emojis/paciente_3d.png",
      color: "purple",
      image: "/images/plataforma/dashboard-3.png",
      features: [
        "Historial clínico completo",
        "Información personal y de contacto",
        "Últimas visitas y próximas citas",
        "Estado del paciente en tiempo real",
      ],
    },
  ];

  return (
    <section
      id="platform-showcase"
      className="section-padding bg-white mobile-optimized"
    >
      <div className="container-max">
        <motion.div
          {...animationConfig}
          className="section-header text-center mb-16"
        >
          <h2 className="section-title">
            Conoce Nuestra
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              {" "}
              Plataforma en Acción
            </span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Descubre cómo MediTeam transforma la gestión médica con una interfaz
            intuitiva y funcionalidades avanzadas que optimizan tu práctica
            diaria.
          </p>
        </motion.div>

        <div className="space-y-24">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0 : 0.8,
                delay: isMobile ? 0 : index * 0.2,
              }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-12 items-center mobile-stable ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transform-gpu shadow-sm ${get3DColorClasses(item.color)}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.iconUrl} alt={item.title} className={`w-10 h-10 object-contain drop-shadow-md ${item.iconUrl.includes("paciente_3d.png") ? "scale-[1.7] transform" : ""}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <div className="relative group p-2 bg-gray-50/50 rounded-3xl border border-gray-100 shadow-xl overflow-hidden pointer-events-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-2xl shadow-sm object-cover border border-gray-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...animationConfig} className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres Ver Más?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Solicita una demostración personalizada y descubre cómo MediTeam
              puede transformar tu práctica médica en tan solo 30 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/523315128570?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20personalizada%20de%20MediTeam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                Solicitar Demo Personalizada
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
