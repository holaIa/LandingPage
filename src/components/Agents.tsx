"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  Calendar,
  UserCheck,
  FileText,
  Phone,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const Agents = () => {
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

  const agentAnimation = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.6 },
    viewport: { once: true },
  };

  const agents = [
    {
      name: "Dr. Asistente",
      role: "Asistente de Citas",
      description:
        "Maneja la programación y reprogramación de citas médicas de forma inteligente.",
      features: [
        "Programación automática de citas",
        "Confirmación y recordatorios",
        "Reprogramación inteligente",
        "Gestión de horarios disponibles",
      ],
      iconUrl: "/images/3d-emojis/spiral_calendar_3d.png",
      color: "blue",
      rating: 4.9,
      conversations: "2,500+",
    },
    {
      name: "Dr. Recepcionista",
      role: "Atención al Paciente",
      description:
        "Responde consultas básicas y orienta a los pacientes sobre servicios médicos.",
      features: [
        "Respuestas a consultas frecuentes",
        "Información sobre servicios",
        "Orientación médica básica",
        "Derivación a especialistas",
      ],
      iconUrl: "/images/3d-emojis/community_3d.png",
      color: "green",
      rating: 4.8,
      conversations: "3,200+",
    },
    {
      name: "Dr. Seguimiento",
      role: "Seguimiento Post-Consulta",
      description:
        "Realiza seguimiento de tratamientos y recordatorios de medicamentos.",
      features: [
        "Recordatorios de medicamentos",
        "Seguimiento de tratamientos",
        "Encuestas de satisfacción",
        "Coordinación de seguimientos",
      ],
      iconUrl: "/images/3d-emojis/handshake_3d.png",
      color: "purple",
      rating: 4.9,
      conversations: "1,800+",
    },
    {
      name: "Dr. Expediente",
      role: "Gestión de Expedientes",
      description:
        "Organiza y mantiene actualizados los expedientes médicos digitales.",
      features: [
        "Actualización de historiales",
        "Gestión de recetas",
        "Resultados de laboratorio",
        "Documentación médica",
      ],
      iconUrl: "/images/3d-emojis/file_folder_3d.png",
      color: "indigo",
      rating: 4.7,
      conversations: "950+",
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
      id="agents"
      className="section-padding bg-gray-50 mobile-optimized"
    >
      <div className="container-max">
        {/* Section Header */}
        <motion.div {...animationConfig} className="section-header">
          <h2 className="section-title">
            Tu Equipo de
            <span className="text-primary-500"> 4 Agentes de IA</span>
          </h2>
          <p className="section-subtitle">
            MediTeam no es un chatbot aislado. Es un equipo coordinado de agentes especializados que trabajan juntos para que tu consultorio nunca se detenga.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="agents-grid">
          {[
            {
              name: "Agente de Atención al Paciente",
              role: "WhatsApp 24/7",
              description:
                "Tu primera línea de contacto. Responde dudas, da horarios y servicios de forma instantánea.",
              features: [
                "Responde mensajes por WhatsApp",
                "Atiende dudas frecuentes",
                "Info de horarios, ubicación y servicios",
                "Funciona 24/7 sin descanso",
              ],
              iconUrl: "/images/3d-emojis/community_3d.png",
              color: "blue",
            },
            {
              name: "Agente de Agenda y Citas",
              role: "Gestión de Calendario",
              description:
                "Se encarga de llenar tu agenda y asegurar que los pacientes lleguen a su consulta.",
              features: [
                "Agenda, confirma y reprograma",
                "Reduce cancelaciones y no-shows",
                "Coordina tu disponibilidad",
                "Automatiza recordatorios",
              ],
              iconUrl: "/images/3d-emojis/spiral_calendar_3d.png",
              color: "green",
            },
            {
              name: "Agente Clínico / de Expediente",
              role: "Organización Médica",
              description:
                "Mantiene tu información clínica organizada y lista para la siguiente consulta.",
              features: [
                "Organiza el historial del paciente",
                "Resume info clínica automáticamente",
                "Apoyo en notas post-consulta",
                "Centraliza la información médica",
              ],
              iconUrl: "/images/3d-emojis/file_folder_3d.png",
              color: "indigo",
            },
            {
              name: "Agente de Seguimiento y Relación",
              role: "Fidelización",
              description:
                "Mantiene el contacto con el paciente después de la consulta para mejorar la adherencia.",
              features: [
                "Seguimiento post-consulta",
                "Envía recordatorios y recomendaciones",
                "Mantiene el contacto constante",
                "Mejora adherencia y recurrencia",
              ],
              iconUrl: "/images/3d-emojis/handshake_3d.png",
              color: "purple",
            },
          ].map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              transition={{
                duration: isMobile ? 0 : 0.6,
                delay: isMobile ? 0 : index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 border border-primary-100 shadow-[0_4px_20px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col group font-sans"
            >
              {/* Agent Header */}
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div className="flex flex-col space-y-4">
                  <motion.div
                    variants={{
                      hover: { 
                        scale: 1.05, 
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                      }
                    }}
                    className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center transition-all duration-300 transform-gpu ${get3DColorClasses(agent.color)} shadow-sm border border-white/50`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={agent.iconUrl} alt={agent.name} className="w-12 h-12 object-contain drop-shadow-md" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1 leading-snug">
                      {agent.name}
                    </h3>
                    <p className="text-gray-500 text-lg font-medium">
                      {agent.role}
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  <span className="text-base sm:text-lg font-semibold text-gray-900">
                    {agent.rating}
                  </span>
                </div> */}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                {agent.description}
              </p>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {agent.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3 sm:space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 sm:pt-6 border-t border-gray-100 space-y-2 sm:space-y-0">
                {/* <div className="flex items-center space-x-2 sm:space-x-3">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">
                    {agent.conversations} conversaciones
                  </span>
                </div> */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  <span className="text-gray-600 font-medium text-sm sm:text-base">
                    24/7 disponible
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Section */}
        <motion.div
          {...animationConfig}
          className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-3xl p-6 sm:p-8 lg:p-12 text-white mt-12 sm:mt-16 mobile-stable"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
                Integración Perfecta con WhatsApp Business
              </h3>
              <p className="text-primary-100 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Nuestros agentes de IA se integran nativamente con WhatsApp
                Business, proporcionando una experiencia fluida y profesional
                para tus pacientes.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0" />
                  <span className="text-base sm:text-lg">
                    Respuestas instantáneas 24/7
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0" />
                  <span className="text-base sm:text-lg">
                    Integración con tu CRM existente
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0" />
                  <span className="text-base sm:text-lg">
                    Escalación automática a humanos
                  </span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0" />
                  <span className="text-base sm:text-lg">
                    Análisis de conversaciones en tiempo real
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Mobile Chat Interface - Optimizado para móvil */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 mobile-stable">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="icon-container bg-white/20">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base sm:text-lg">
                      Dr. Asistente IA
                    </h4>
                    <p className="text-primary-100 text-sm">
                      En línea • Respondiendo
                    </p>
                  </div>
                </div>

                {/* Chat Interface with Doctor Image - Optimizado para móvil */}
                <div className="mt-4 sm:mt-6 relative">
                  <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mobile-stable">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">
                            W
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-semibold text-base sm:text-lg">
                            WhatsApp Business
                          </h4>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            Dr. Asistente IA • En línea
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-600 text-xs sm:text-sm font-medium">
                          Activo
                        </span>
                      </div>
                    </div>

                    {/* Chat Messages - Optimizado para móvil */}
                    <div className="space-y-3 sm:space-y-4">
                      {/* User Message */}
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            U
                          </span>
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 max-w-[200px] sm:max-w-xs">
                          <p className="text-xs sm:text-sm text-gray-800">
                            Hola, necesito agendar una cita para mi hijo Juan
                          </p>
                          <p className="text-xs text-gray-500 mt-1">2:15 PM</p>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex items-start space-x-2 sm:space-x-3 justify-end">
                        <div className="bg-green-500 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 max-w-[200px] sm:max-w-xs">
                          <p className="text-xs sm:text-sm text-white font-medium mb-2">
                            ¡Hola! Con gusto te ayudo a agendar la cita para
                            Juan.
                          </p>
                          <p className="text-xs sm:text-sm text-white mb-2">
                            ¿Qué día te viene mejor?
                          </p>
                          <div className="space-y-1">
                            <button className="w-full text-left text-xs bg-white/20 rounded-lg px-2 py-1 text-white hover:bg-white/30 transition-colors">
                              📅 Lunes 15 - 9:00 AM
                            </button>
                            <button className="w-full text-left text-xs bg-white/20 rounded-lg px-2 py-1 text-white hover:bg-white/30 transition-colors">
                              📅 Martes 16 - 2:00 PM
                            </button>
                            <button className="w-full text-left text-xs bg-white/20 rounded-lg px-2 py-1 text-white hover:bg-white/30 transition-colors">
                              📅 Miércoles 17 - 10:30 AM
                            </button>
                          </div>
                          <p className="text-xs text-green-100 mt-2">2:16 PM</p>
                        </div>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            AI
                          </span>
                        </div>
                      </div>

                      {/* User Response */}
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            U
                          </span>
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 max-w-[200px] sm:max-w-xs">
                          <p className="text-xs sm:text-sm text-gray-800">
                            Perfecto, el lunes 15 a las 9:00 AM me viene muy
                            bien
                          </p>
                          <p className="text-xs text-gray-500 mt-1">2:17 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* Doctor Image in Corner - Optimizado para móvil */}
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                      <Image
                        src="/doctora_mobile.jpeg"
                        alt="Doctora revisando su teléfono con la app de MediTeam"
                        className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full object-cover border-2 sm:border-4 border-white shadow-lg mobile-stable"
                        width={80}
                        height={80}
                        sizes="80px"
                      />
                    </div>
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

export default Agents;
