"use client";

import { motion } from "framer-motion";
import {
  Play,
  Maximize2,
  ArrowRight,
  Users,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

const PlatformShowcase = () => {
  const [visibleVideos, setVisibleVideos] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Función para manejar la intersección de videos - optimizada para móvil
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoIndex = parseInt(
            entry.target.getAttribute("data-video-index") || "0"
          );

          if (entry.isIntersecting) {
            // Video está visible
            setVisibleVideos((prev) => new Set(prev).add(videoIndex));

            // Reproducir el video
            const video = entry.target as HTMLVideoElement;
            if (video && video.paused) {
              // En móvil, usar play() con manejo de errores más robusto
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch(() => {
                  // En móvil, si falla el autoplay, mostrar controles
                  if (isMobile) {
                    video.controls = true;
                  }
                });
              }
            }
          } else {
            // Video no está visible
            setVisibleVideos((prev) => {
              const newSet = new Set(prev);
              newSet.delete(videoIndex);
              return newSet;
            });

            // Pausar el video
            const video = entry.target as HTMLVideoElement;
            if (video && !video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        threshold: isMobile ? 0.3 : 0.5, // En móvil, activar con menos visibilidad
        rootMargin: isMobile ? "0px 0px -50px 0px" : "0px 0px -100px 0px", // Margen más pequeño en móvil
      }
    );

    // Observar todos los videos
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        observer.observe(videoRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  // Configuración de animaciones optimizada para móvil
  const animationConfig = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8 },
    viewport: { once: true },
  };

  // Helper to get 3D color backgrounds similar to Features.tsx
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
      image: "/dashboard-metrics.png", // Placeholder - puedes reemplazar con la imagen real
      videoUrl: "/metricasHolaia.mov",
      features: [
        "Métricas de pacientes activos",
        "Análisis de citas y ocupación",
        "Reportes de satisfacción",
        "Indicadores de rendimiento",
      ],
    },
    {
      title: "Chat en Tiempo Real",
      description:
        "Comunícate con pacientes a través de WhatsApp y chat web integrado",
      iconUrl: "/images/3d-emojis/speech_balloon_3d.png",
      color: "blue",
      image: "/chat-interface.png", // Placeholder - puedes reemplazar con la imagen real
      videoUrl: "/chats.mov", // Corregido el nombre del archivo
      features: [
        "Integración con WhatsApp Business",
        "Chat web en tiempo real",
        "Respuestas automáticas con IA",
        "Historial de conversaciones",
      ],
    },
    {
      title: "Gestión de Pacientes",
      description: "Administra expedientes médicos completos de forma digital",
      iconUrl: "/images/3d-emojis/paciente_3d.png",
      color: "purple",
      image: "/patient-management.png", // Placeholder - puedes reemplazar con la imagen real
      videoUrl: "/historial.mov",
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
        {/* Section Header */}
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

        {/* Showcase Items */}
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
              {/* Content */}
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

                {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="https://wa.me/523315128570?text=Hola,%20me%20interesa%20ver%20una%20demo%20de%20MediTeam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Ver Demo
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                    Ampliar
                  </button>
                </div> */}
              </div>

              {/* Visual Content */}
              <div className="flex-1">
                <div className="relative group">
                  {/* Video Player - optimizado para móvil */}
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    data-video-index={index}
                    className="w-full rounded-2xl shadow-lg aspect-video object-cover mobile-video-optimized"
                    controls
                    poster="/dashboard-metrics.png"
                    muted // Importante: los videos deben estar silenciados para autoplay
                    loop // Los videos se repiten automáticamente
                    preload={isMobile ? "metadata" : "auto"} // Optimización para móvil
                    playsInline // Importante para iOS
                  >
                    <source src={item.videoUrl} type="video/mp4" />
                    <source src={item.videoUrl} type="video/quicktime" />
                    Tu navegador no soporta el elemento de video.
                  </video>

                  {/* Overlay for video play button on hover - solo en desktop */}
                  {!isMobile && (
                    <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-white bg-opacity-90 p-4 rounded-full">
                        <Play className="w-8 h-8 text-primary-600 ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Alternative: If you have actual images, you can use this structure */}
                {/* 
                <div className="relative group">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all duration-300">
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </button>
                  </div>
                </div>
                */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal Placeholder */}
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
              {/* <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Ver Casos de Éxito
              </button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
