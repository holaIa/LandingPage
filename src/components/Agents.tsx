"use client";

import { motion } from "framer-motion";
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

const Agents = () => {
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
      icon: Calendar,
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
      icon: MessageCircle,
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
      icon: UserCheck,
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
      icon: FileText,
      color: "indigo",
      rating: 4.7,
      conversations: "950+",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      indigo: "bg-indigo-100 text-indigo-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="agents" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            Tu Equipo de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8]">
              {" "}
              Agentes IA
            </span>
          </h2>
          <p className="section-subtitle">
            Agentes especializados que trabajan 24/7 para optimizar cada aspecto
            de tu práctica médica, desde la programación de citas hasta el
            seguimiento post-consulta.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <div className="agents-grid">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Agent Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div
                    className={`icon-container large ${getColorClasses(
                      agent.color
                    )}`}
                  >
                    <agent.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {agent.name}
                    </h3>
                    <p className="text-gray-600 text-lg">{agent.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold text-gray-900">
                    {agent.rating}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {agent.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {agent.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 font-medium">
                    {agent.conversations} conversaciones
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600 font-medium">
                    24/7 disponible
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] rounded-3xl p-8 lg:p-12 text-white mt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                Integración Perfecta con WhatsApp Business
              </h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Nuestros agentes de IA se integran nativamente con WhatsApp
                Business, proporcionando una experiencia fluida y profesional
                para tus pacientes.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">Respuestas instantáneas 24/7</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">
                    Integración con tu CRM existente
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">
                    Escalación automática a humanos
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">
                    Análisis de conversaciones en tiempo real
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Mobile Chat Interface */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="icon-container bg-white/20">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">
                      Dr. Asistente IA
                    </h4>
                    <p className="text-blue-100">En línea • Respondiendo</p>
                  </div>
                </div>

                {/* Chat Interface with Doctor Image */}
                <div className="mt-6 relative">
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    {/* Chat Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            W
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-semibold text-lg">
                            WhatsApp Business
                          </h4>
                          <p className="text-gray-500 text-sm">
                            Dr. Asistente IA • En línea
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-600 text-sm font-medium">
                          Activo
                        </span>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="space-y-4">
                      {/* User Message */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            U
                          </span>
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
                          <p className="text-sm text-gray-800">
                            Hola, necesito agendar una cita para mi hijo Juan
                          </p>
                          <p className="text-xs text-gray-500 mt-1">2:15 PM</p>
                        </div>
                      </div>

                      {/* AI Response */}
                      <div className="flex items-start space-x-3 justify-end">
                        <div className="bg-green-500 rounded-2xl px-4 py-3 max-w-xs">
                          <p className="text-sm text-white font-medium mb-2">
                            ¡Hola! Con gusto te ayudo a agendar la cita para
                            Juan.
                          </p>
                          <p className="text-sm text-white mb-2">
                            ¿Qué día te viene mejor?
                          </p>
                          <div className="space-y-1">
                            <button className="w-full text-left text-xs bg-white/20 rounded-lg px-2 py-1 text-white hover:bg-white/30 transition-colors">
                              📅 Lunes 15 de Enero - 9:00 AM
                            </button>
                            <button className="w-full text-left text-xs bg-white/20 rounded-lg px-2 py-1 text-white hover:bg-white/30 transition-colors">
                              📅 Martes 16 de Enero - 2:00 PM
                            </button>
                            <button className="w-full text-left text-xs bg-white/20 rounded-lg px-2 py-1 text-white hover:bg-white/30 transition-colors">
                              📅 Miércoles 17 de Enero - 10:30 AM
                            </button>
                          </div>
                          <p className="text-xs text-green-100 mt-2">2:16 PM</p>
                        </div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            AI
                          </span>
                        </div>
                      </div>

                      {/* User Response */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            U
                          </span>
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-xs">
                          <p className="text-sm text-gray-800">
                            Perfecto, el lunes 15 a las 9:00 AM me viene muy
                            bien
                          </p>
                          <p className="text-xs text-gray-500 mt-1">2:17 PM</p>
                        </div>
                      </div>
                    </div>

                    {/* Doctor Image in Corner */}
                    <div className="absolute top-4 right-4">
                      <img
                        src="/doctora_mobile.jpeg"
                        alt="Doctora revisando su teléfono"
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
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
