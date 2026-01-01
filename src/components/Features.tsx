"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  Users,
  FileText,
  Shield,
  Zap,
  Smartphone,
  BarChart3,
  Clock,
  CheckCircle,
} from "lucide-react";
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

  const featureAnimation = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.6 },
    viewport: { once: true },
  };

  const benefitsAnimation = {
    initial: isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0 : 0.5 },
    viewport: { once: true },
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Gestión de WhatsApp Automatizada",
      description:
        "Agentes de IA que manejan citas, recordatorios y consultas básicas 24/7 a través de WhatsApp.",
      color: "blue",
    },
    {
      icon: Calendar,
      title: "Sistema de Citas Inteligente",
      description:
        "Programación automática de citas con confirmación, recordatorios y reprogramación inteligente.",
      color: "green",
    },
    {
      icon: Users,
      title: "Gestión Completa de Pacientes",
      description:
        "Historial médico, datos personales, tratamientos y seguimiento en una sola plataforma.",
      color: "purple",
    },
    {
      icon: FileText,
      title: "Expedientes Médicos Digitales",
      description:
        "Almacenamiento seguro de historiales clínicos, recetas y resultados de laboratorio.",
      color: "indigo",
    },
    {
      icon: Shield,
      title: "Seguridad y Cumplimiento HIPAA",
      description:
        "Cumplimiento total con regulaciones médicas y protección de datos del paciente.",
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Analytics y Reportes",
      description:
        "Métricas detalladas sobre rendimiento, ocupación y satisfacción del paciente.",
      color: "orange",
    },
  ];

  const benefits = [
    "Reducción del 90% en tiempo de gestión administrativa",
    "Aumento del 40% en la satisfacción del paciente",
    "Disponibilidad 24/7 para atención al paciente",
    "Integración completa con sistemas existentes",
    "Cumplimiento total con regulaciones médicas",
    "Soporte técnico especializado en el sector salud",
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600",
      red: "bg-red-100 text-red-600",
      orange: "bg-orange-100 text-orange-600",
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
            Trabajando con MediTeam
          </h2>
          <p className="section-subtitle">
            Haz que tu próxima consulta sea la mejor. MediTeam te libera de la
            administración para que puedas disfrutar del trabajo, tomar un
            descanso y llegar a casa a tiempo.
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
            <div className="text-4xl font-bold text-text-primary mb-4">
              Antes de la consulta
            </div>
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
            <div className="text-4xl font-bold text-text-primary mb-4">
              Durante la consulta
            </div>
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
            <div className="text-4xl font-bold text-text-primary mb-4">
              Después de la consulta
            </div>
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
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0 : 0.6,
                delay: isMobile ? 0 : index * 0.1,
              }}
              viewport={{ once: true }}
              className="card card-hover mobile-stable"
            >
              <div
                className={`icon-container ${getColorClasses(feature.color)}`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed flex-grow">
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
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">
                Beneficios Tangibles para tu Clínica
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
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
                <img
                  src="/doctortable.jpeg"
                  alt="Doctora profesional examinando a un niño en una consulta médica"
                  className="w-full h-48 object-cover mobile-stable"
                  loading="lazy"
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
