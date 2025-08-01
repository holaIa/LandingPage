"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    clinic: "",
    patients: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Crear mensaje personalizado para WhatsApp
    const message = `Hola, me interesa solicitar una demo gratis de HolaIA

*Información de contacto:*
• Nombre: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Clínica: ${formData.clinic}
• Número de pacientes: ${formData.patients}
${formData.message ? `• Mensaje: ${formData.message}` : ""}

¿Podrían contactarme para agendar una demo?`;

    // Codificar el mensaje para la URL de WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/523315128570?text=${encodedMessage}`;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
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
            ¿Listo para Revolucionar tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8]">
              {" "}
              Práctica Médica?
            </span>
          </h2>
          <p className="section-subtitle">
            Contáctanos hoy mismo y descubre cómo HolaIA puede transformar la
            gestión de tu clínica con la potencia de la inteligencia artificial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Solicita tu Demo Gratis
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                    placeholder="Tu apellido"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="clinic"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Nombre de la Clínica
                </label>
                <input
                  type="text"
                  id="clinic"
                  name="clinic"
                  value={formData.clinic}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="Nombre de tu clínica"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="patients"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Número de Pacientes
                </label>
                <select
                  id="patients"
                  name="patients"
                  value={formData.patients}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="1-100">1 - 100 pacientes</option>
                  <option value="101-500">101 - 500 pacientes</option>
                  <option value="501-1000">501 - 1,000 pacientes</option>
                  <option value="1001-5000">1,001 - 5,000 pacientes</option>
                  <option value="5000+">Más de 5,000 pacientes</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
                  placeholder="Cuéntanos sobre tus necesidades específicas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 flex items-center justify-center"
              >
                <Send className="w-6 h-6" />
                <span>Enviar por WhatsApp</span>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Información de Contacto
              </h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="icon-container bg-blue-100">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Email
                    </h4>
                    <p className="text-gray-600 text-lg">hola@holaia.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="icon-container bg-green-100">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      WhatsApp
                    </h4>
                    <p className="text-gray-600 text-lg">+52 33 1512 8570</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="icon-container bg-purple-100">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Oficina
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Zapopan, Jalisco, México
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="icon-container bg-orange-100">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">
                      Horario de Atención
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Lun - Vie: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 text-white">
              <div className="flex items-center space-x-6 mb-6">
                <div className="icon-container bg-white/20">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">¿Prefieres WhatsApp?</h4>
                  <p className="text-green-100 text-lg">
                    Chatea con nosotros directamente
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/523315128570?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20HolaIA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-green-600 font-semibold py-4 px-6 rounded-xl hover:bg-green-50 transition-colors duration-200 text-lg block text-center"
              >
                Chatear por WhatsApp
              </a>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                ¿Por qué Elegir HolaIA?
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    Implementación en 24 horas
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    Soporte técnico especializado
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    Capacitación gratuita del equipo
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">
                    Garantía de satisfacción
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
