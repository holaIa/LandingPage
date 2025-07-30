"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  MessageCircle,
  Users,
  Calendar,
  Search,
  Bell,
  Eye,
  Phone,
  Mail,
  Clock,
  Plus,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Grid,
  UserPlus,
  UserCheck,
  FileText,
} from "lucide-react";

const PlatformScreenshots = () => {
  const screenshots = [
    {
      title: "Dashboard de Pacientes",
      subtitle: "Historial Clínico de Pacientes",
      description:
        "Gestiona y consulta el historial médico completo de tus pacientes",
      type: "patients",
      stats: "8 Pacientes registrados",
      activeTab: "Pacientes",
    },
    {
      title: "Calendario de Citas",
      subtitle: "Calendario de Citas",
      description: "Gestiona y visualiza todas las citas médicas",
      type: "appointments",
      activeTab: "Citas",
    },
    {
      title: "Chat del Agente",
      subtitle: "Chat del Agente",
      description: "Comunicación en tiempo real con pacientes",
      type: "chat",
      activeTab: "Chat",
    },
  ];

  const renderSidebar = (activeTab: string) => (
    <div className="w-64 bg-blue-50 h-full p-4 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-blue-900">HolaIA</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2">
        {[
          { name: "Dashboard", icon: Grid, active: false },
          {
            name: "Pacientes",
            icon: UserPlus,
            active: activeTab === "Pacientes",
          },
          { name: "Usuarios", icon: UserCheck, active: false },
          { name: "Citas", icon: Calendar, active: activeTab === "Citas" },
          { name: "Chat", icon: MessageCircle, active: activeTab === "Chat" },
          { name: "Configuración", icon: Settings, active: false },
        ].map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              item.active
                ? "bg-blue-600 text-white"
                : "text-blue-900 hover:bg-blue-100"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Logout */}
      <div className="flex items-center gap-3 px-3 py-2 text-blue-900 hover:bg-blue-100 rounded-lg cursor-pointer">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Cerrar sesión</span>
      </div>
    </div>
  );

  const renderPatientsDashboard = () => (
    <div className="flex-1 bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">
          Historial Clínico de Pacientes
        </h1>
        <p className="text-blue-100 mb-4">
          Gestiona y consulta el historial médico completo de tus pacientes
        </p>
        <div className="text-right">
          <div className="text-3xl font-bold">8</div>
          <div className="text-blue-100">Pacientes registrados</div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por nombre, email o teléfono..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>Todos los pacientes</option>
        </select>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Nuevo Paciente
        </button>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <div className="grid grid-cols-7 gap-4 text-sm font-medium">
            <div>Paciente</div>
            <div>Contacto</div>
            <div>Información Personal</div>
            <div>Última Visita</div>
            <div>Próxima Cita</div>
            <div>Estado</div>
            <div>Acciones</div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {[
            {
              name: "María González López",
              insurance: "Seguro Popular",
              phone: "+52 55 1234 5678",
              email: "maria.gonzalez@email.com",
              age: "40 años",
              gender: "Femenino • O+",
              lastVisit: "14/01/2024",
              nextAppointment: "19/02/2024",
              status: "Activo",
            },
            {
              name: "Carlos Rodríguez Martínez",
              insurance: "IMSS",
              phone: "+52 55 2345 6789",
              email: "carlos.rodriguez@email.com",
              age: "47 años",
              gender: "Masculino • A+",
              lastVisit: "09/01/2024",
              nextAppointment: "14/02/2024",
              status: "Activo",
            },
            {
              name: "Ana Patricia Silva",
              insurance: "Particular",
              phone: "+52 55 3456 7890",
              email: "ana.silva@email.com",
              age: "32 años",
              gender: "Femenino • B-",
              lastVisit: "07/01/2024",
              nextAppointment: "Sin cita programada",
              status: "Activo",
            },
          ].map((patient, index) => (
            <div key={index} className="p-4 hover:bg-gray-50">
              <div className="grid grid-cols-7 gap-4 items-center text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {patient.name}
                    </div>
                    <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full inline-block">
                      {patient.insurance}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-gray-900">
                    <Phone className="w-3 h-3" />
                    {patient.phone}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Mail className="w-3 h-3" />
                    {patient.email}
                  </div>
                </div>
                <div>
                  <div className="text-gray-900">{patient.age}</div>
                  <div className="text-gray-600">{patient.gender}</div>
                </div>
                <div className="text-gray-600">{patient.lastVisit}</div>
                <div>
                  <div className="text-gray-900">{patient.nextAppointment}</div>
                  {patient.nextAppointment !== "Sin cita programada" && (
                    <div className="text-xs text-gray-500">Próxima cita</div>
                  )}
                </div>
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      patient.status === "Activo"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {patient.status}
                  </span>
                </div>
                <div>
                  <Eye className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppointmentsCalendar = () => (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Calendario de Citas
            </h1>
            <p className="text-gray-600">
              Gestiona y visualiza todas las citas médicas
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Nueva Cita
          </button>
        </div>

        {/* Calendar Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Día
            </button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Semana
            </button>
            <button className="px-4 py-2 text-blue-600 bg-blue-50 rounded-lg border-b-2 border-blue-600">
              Mes
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-medium text-gray-900">julio 2025</span>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg">
              <Calendar className="w-4 h-4" />
              Hoy
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1">
          {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
            <div
              key={day}
              className="p-3 text-center text-sm font-medium text-gray-500 bg-gray-50"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: 21 }, (_, i) => (
            <div
              key={i + 1}
              className={`p-3 text-center text-sm border border-gray-200 min-h-[60px] flex items-center justify-center ${
                i + 1 === 9 ? "bg-blue-50 border-blue-200" : ""
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderChatInterface = () => (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="bg-white rounded-xl h-full flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-200 p-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Conversaciones
          </h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar conversaciones..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>

          <div className="space-y-3">
            {[
              {
                phone: "+5512345678",
                source: "Whatsapp",
                time: "08:23",
                unread: 1,
                active: true,
              },
              {
                phone: "+5512345679",
                source: "Web",
                time: "08:23",
                unread: 0,
                active: true,
              },
              {
                phone: "+5512345680",
                source: "Whatsapp",
                time: "07:23",
                unread: 0,
                active: true,
              },
            ].map((conv, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  index === 0
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    {conv.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full text-xs text-white flex items-center justify-center">
                        {conv.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {conv.phone}
                    </div>
                    <div className="text-sm text-gray-500">{conv.source}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{conv.time}</div>
                    <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full mt-1">
                      active
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">+5512345678</div>
                <div className="text-sm text-gray-500">Whatsapp</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                <p className="text-sm">
                  Hola doctor, ¿cuáles son los horarios de atención?
                </p>
                <p className="text-xs text-blue-100 mt-1">07:23</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 p-3 rounded-lg max-w-xs">
                <p className="text-sm">
                  Hola! Los horarios de atención son de Lunes a Viernes de 9:00
                  AM a 6:00 PM. ¿Te gustaría agendar una cita?
                </p>
                <p className="text-xs text-gray-500 mt-1">07:25</p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-blue-600 text-white p-3 rounded-lg max-w-xs">
                <p className="text-sm">
                  Sí, me gustaría agendar para mañana a las 10:00 AM
                </p>
                <p className="text-xs text-blue-100 mt-1">08:23</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreenshot = (screenshot: any) => {
    const renderContent = () => {
      switch (screenshot.type) {
        case "patients":
          return renderPatientsDashboard();
        case "appointments":
          return renderAppointmentsCalendar();
        case "chat":
          return renderChatInterface();
        default:
          return null;
      }
    };

    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        {/* Browser Header */}
        <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <span className="text-sm text-gray-600">
              HolaIA - {screenshot.title}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex h-96">
          {renderSidebar(screenshot.activeTab)}
          {renderContent()}
        </div>
      </div>
    );
  };

  return (
    <section
      id="platform-screenshots"
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
            Interfaz
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8]">
              {" "}
              Profesional y Moderna
            </span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Descubre cómo se ve y funciona nuestra plataforma con estas capturas
            de pantalla que muestran las principales funcionalidades de HolaIA.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {renderScreenshot(screenshot)}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Te Gusta Lo Que Ves?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Estas son solo algunas de las funcionalidades de HolaIA. Solicita
              una demostración personalizada para ver todo el potencial de
              nuestra plataforma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Solicitar Demo Gratuita
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Explorar Más Funciones
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformScreenshots;
