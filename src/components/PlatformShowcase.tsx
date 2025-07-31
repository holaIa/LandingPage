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
                playPromise.catch((error) => {
                  console.log("Error reproduciendo video:", error);
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

  const showcaseItems = [
    {
      title: "Dashboard de Métricas",
      description:
        "Visualiza el rendimiento de tu clínica con métricas en tiempo real",
      icon: BarChart3,
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
      icon: MessageCircle,
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
      icon: Users,
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8]">
              {" "}
              Plataforma en Acción
            </span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Descubre cómo HolaIA transforma la gestión médica con una interfaz
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
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Ver Demo
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                    Ampliar
                  </button>
                </div>
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
                        <Play className="w-8 h-8 text-blue-600 ml-1" />
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
                      <Play className="w-8 h-8 text-blue-600 ml-1" />
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres Ver Más?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Solicita una demostración personalizada y descubre cómo HolaIA
              puede transformar tu práctica médica en tan solo 30 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Solicitar Demo Personalizada
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Ver Casos de Éxito
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformShowcase;
