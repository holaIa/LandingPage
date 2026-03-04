"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Zap, Smartphone, Clock, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Features = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Configuración de animaciones optimizada para móvil
  const animationConfig = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8 },
    viewport: { once: true },
  };

  const features = [
    {
      iconUrl: "/images/3d-emojis/robot_3d.png",
      title: "Gestión de WhatsApp Automatizada",
      description:
        "Agentes de IA que manejan citas, recordatorios y consultas básicas 24/7 a través de WhatsApp.",
      color: "blue",
    },
    {
      iconUrl: "/images/3d-emojis/spiral_calendar_3d.png",
      title: "Sistema de Citas Inteligente",
      description:
        "Programación automática de citas con confirmación, recordatorios y reprogramación inteligente.",
      color: "green",
    },
    {
      iconUrl: "/images/3d-emojis/paciente_3d.png",
      title: "Gestión Completa de Pacientes",
      description:
        "Historial médico, datos personales, tratamientos y seguimiento en una sola plataforma.",
      color: "purple",
    },
    {
      iconUrl: "/images/3d-emojis/file_folder_3d.png",
      title: "Expedientes Médicos Digitales",
      description:
        "Almacenamiento seguro de historiales clínicos, recetas y resultados de laboratorio.",
      color: "indigo",
    },
    {
      iconUrl: "/images/3d-emojis/shield_3d.png",
      title: "Seguridad y Cumplimiento HIPAA",
      description:
        "Cumplimiento total con regulaciones médicas y protección de datos del paciente.",
      color: "red",
    },
    {
      iconUrl: "/images/3d-emojis/bar_chart_3d.png",
      title: "Analytics y Reportes",
      description:
        "Métricas detalladas sobre rendimiento, ocupación y satisfacción del paciente.",
      color: "orange",
    },
  ];

  const get3DColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50/80 border border-blue-100",
      green: "bg-emerald-50/80 border border-emerald-100",
      purple: "bg-purple-50/80 border border-purple-100",
      indigo: "bg-indigo-50/80 border border-indigo-100",
      red: "bg-rose-50/80 border border-rose-100",
      orange: "bg-orange-50/80 border border-orange-100",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="features"
      className="section-padding bg-background-paper mobile-optimized"
    >
      <div className="container-max">
        {/* Section Header */}
        <motion.div {...animationConfig} className="section-header">
          <h2 className="section-title">
            Tu consultorio en <span className="text-primary-500">Piloto Automático</span>
          </h2>
          <p className="section-subtitle">
            MediTeam no solo almacena expedientes. MediTeam responde, agenda, da seguimiento y organiza la información por ti, permitiéndote recuperar horas de tu día.
          </p>
        </motion.div>

        {/* Workflow Section - estilo Heidi Health */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-text-primary mb-4">
              Antes de la consulta
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              Revisa historial, notas y resultados en un solo lugar, sincroniza
              horarios y entra preparado con hallazgos clave.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Historial completo</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Sincronización de horarios</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Hallazgos clave</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-text-primary mb-4">
              Durante la consulta
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              Transcribe visitas en múltiples idiomas, estructura notas a tu
              manera y genera referencias e información al instante.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Transcripción automática</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Notas estructuradas</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Referencias instantáneas</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold text-text-primary mb-4">
              Después de la consulta
            </h3>
            <p className="text-text-secondary text-lg mb-6">
              Envía todo a tu EHR con un clic, aplica códigos y tareas
              automáticamente, y termina tu día a tiempo sin acumulación.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Integración con EHR</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Códigos automáticos</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-text-secondary">Sin acumulación</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{
                duration: isMobile ? 0 : 0.6,
                delay: isMobile ? 0 : index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 border border-primary-100 shadow-[0_4px_20px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col group"
            >
              <motion.div
                variants={{
                  hover: { 
                    scale: 1.05, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }
                }}
                className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-300 transform-gpu mb-6 ${get3DColorClasses(feature.color)} shadow-sm border border-white/50`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={feature.iconUrl} alt={feature.title} className={`w-12 h-12 object-contain drop-shadow-md ${feature.iconUrl.includes("paciente_3d.png") ? "scale-[1.7] transform" : ""}`} />
              </motion.div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium flex-grow">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          {...animationConfig}
          className="bg-primary-50 rounded-3xl p-8 lg:p-12 mt-16 mobile-stable border border-primary-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
                Eficiencia que se paga sola
              </h3>
              <p className="text-lg text-primary-700 font-semibold mb-8 italic">
                Menos trabajo administrativo, más tiempo con tus pacientes.
              </p>
              <div className="space-y-6">
                {[
                  "Ahorro de hasta $8,000 MXN vs personal humano",
                  "Menos carga administrativa para ti y tu equipo",
                  "Atención inmediata 24/7 sin errores",
                  "Generación constante de nuevas citas",
                  "Escalabilidad sin aumentar costos fijos",
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={
                      isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: isMobile ? 0 : 0.5,
                      delay: isMobile ? 0 : index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-success" />
                    </div>
                    <span className="text-text-primary text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Medical Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/doctortable.jpeg"
                  alt="Doctor profesional en su consultorio revisando expedientes médicos"
                  className="w-full h-48 object-cover mobile-stable"
                  width={600}
                  height={192}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">
                    Atención Personalizada
                  </p>
                  <p className="text-xs opacity-90">Cuidado profesional 24/7</p>
                </div>
              </div>

              <div className="bg-background-paper rounded-2xl p-8 shadow-lg mobile-stable border border-background-subtle">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="icon-container bg-primary-50">
                    <Smartphone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-lg">
                      WhatsApp Business
                    </h4>
                    <p className="text-sm text-text-secondary">Integración nativa</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Respuesta automática</span>
                    <Clock className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Gestión de citas</span>
                    <Calendar className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Recordatorios</span>
                    <Zap className="w-5 h-5 text-warning" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
