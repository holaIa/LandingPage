"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  MessageCircle,
  Users,
  Calendar,
  Eye,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Activity,
  FileText,
  Search,
  Bell,
  Settings,
} from "lucide-react";

const Platform = () => {
  const platformFeatures = [
    {
      title: "Dashboard de Métricas",
      description:
        "Visualiza el rendimiento de tu clínica con métricas en tiempo real",
      icon: BarChart3,
      color: "blue",
      stats: [
        { label: "Pacientes Activos", value: "1,247", change: "+12%" },
        { label: "Citas Hoy", value: "23", change: "+5%" },
        { label: "Satisfacción", value: "98%", change: "+2%" },
      ],
    },
    {
      title: "Chat en Tiempo Real",
      description:
        "Comunícate con pacientes a través de WhatsApp y chat web integrado",
      icon: MessageCircle,
      color: "green",
      features: [
        "Integración con WhatsApp Business",
        "Chat web en tiempo real",
        "Respuestas automáticas con IA",
        "Historial de conversaciones",
      ],
    },
    {
      title: "Expedientes de Pacientes",
      description: "Gestión completa del historial médico digital",
      icon: Users,
      color: "purple",
      features: [
        "Historial clínico completo",
        "Información personal y de contacto",
        "Últimas visitas y próximas citas",
        "Estado del paciente en tiempo real",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="platform"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header text-center mb-16"
        >
          <h2 className="section-title">
            Descubre Nuestra
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8]">
              {" "}
              Plataforma Completa
            </span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Una solución integral que combina gestión de pacientes, comunicación
            en tiempo real y análisis de métricas para optimizar tu práctica
            médica.
          </p>
        </motion.div>

        {/* Platform Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`inline-flex p-3 rounded-xl ${getColorClasses(
                  feature.color
                )} mb-6`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              {feature.stats && (
                <div className="space-y-3">
                  {feature.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600">
                        {stat.label}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">
                          {stat.value}
                        </span>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {feature.features && (
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Platform Screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Interfaz Intuitiva y Profesional
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Dashboard Screenshot */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500 ml-2">
                    Dashboard - Historial Clínico
                  </span>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="font-bold text-gray-900">
                        Historial Clínico de Pacientes
                      </h4>
                      <p className="text-sm text-gray-600">
                        Gestiona y consulta el historial médico completo
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">8</div>
                      <div className="text-sm text-gray-600">
                        Pacientes registrados
                      </div>
                    </div>
                  </div>

                  {/* Search and Filters */}
                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 bg-gray-50 rounded-lg p-3 flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">
                        Buscar por nombre, email o teléfono...
                      </span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      + Nuevo Paciente
                    </button>
                  </div>

                  {/* Patient Table Preview */}
                  <div className="space-y-3">
                    {[
                      {
                        name: "María González López",
                        contact: "+52 55 1234 5678",
                        status: "Activo",
                        lastVisit: "14/01/2024",
                      },
                      {
                        name: "Carlos Rodríguez Martínez",
                        contact: "+52 55 2345 6789",
                        status: "Activo",
                        lastVisit: "09/01/2024",
                      },
                      {
                        name: "Ana Patricia Silva",
                        contact: "+52 55 3456 7890",
                        status: "Activo",
                        lastVisit: "07/01/2024",
                      },
                    ].map((patient, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">
                              {patient.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {patient.contact}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600">
                            {patient.lastVisit}
                          </span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            {patient.status}
                          </span>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Screenshot */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500 ml-2">
                    Chat del Agente
                  </span>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-bold text-gray-900">Chat del Agente</h4>
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4 text-gray-400" />
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Conversations List */}
                    <div className="col-span-1 space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center relative">
                            <Phone className="w-4 h-4 text-green-600" />
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full text-xs text-white flex items-center justify-center">
                              1
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">
                              +5512345678
                            </div>
                            <div className="text-xs text-gray-500">
                              WhatsApp
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">08:23</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          active
                        </span>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">
                              +5512345679
                            </div>
                            <div className="text-xs text-gray-500">Web</div>
                          </div>
                          <span className="text-xs text-gray-500">08:23</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          active
                        </span>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="col-span-2 space-y-3">
                      <div className="bg-blue-100 rounded-lg p-3 ml-8">
                        <p className="text-sm text-gray-900">
                          Hola doctor, ¿cuáles son los horarios de atención?
                        </p>
                        <span className="text-xs text-gray-500">07:23</span>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-3 mr-8">
                        <p className="text-sm text-gray-900">
                          Hola! Los horarios de atención son de Lunes a Viernes
                          de 9:00 AM a 6:00 PM. ¿Te gustaría agendar una cita?
                        </p>
                        <span className="text-xs text-gray-500">07:25</span>
                      </div>

                      <div className="bg-blue-100 rounded-lg p-3 ml-8">
                        <p className="text-sm text-gray-900">
                          Sí, me gustaría agendar para mañana a las 10:00 AM
                        </p>
                        <span className="text-xs text-gray-500">08:23</span>
                      </div>

                      <div className="flex items-center gap-2 mt-4">
                        <input
                          type="text"
                          placeholder="Escribe un mensaje..."
                          className="flex-1 bg-gray-50 rounded-lg px-3 py-2 text-sm border border-gray-200"
                        />
                        <button className="bg-blue-600 text-white p-2 rounded-lg">
                          <MessageCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para Revolucionar tu Práctica Médica?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Únete a cientos de profesionales de la salud que ya confían en
            HolaIA para optimizar su gestión y mejorar la atención al paciente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/523315128570?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20gratuita%20de%20HolaIA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Solicitar Demo Gratuita
            </a>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Ver Más Características
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;
