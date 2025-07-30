"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      description: "Perfecto para consultorios pequeños",
      price: "$1,499",
      period: "/mes",
      features: [
        "Hasta 1,500 mensajes por mes",
        "1 Agente IA (Dr. Asistente)",
        "Gestión básica de citas",
        "Integración WhatsApp",
        "Soporte por email",
        "Reportes básicos",
      ],
      popular: false,
      icon: Zap,
      color: "blue",
    },
    {
      name: "Profesional",
      description: "Ideal para clínicas medianas",
      price: "$2,999",
      period: "/mes",
      features: [
        "Hasta 5,000 mensajes por mes",
        "3 Agentes IA especializados",
        "Gestión avanzada de citas",
        "Expedientes médicos digitales",
        "Dominio personalizado",
        "Soporte prioritario",
        "Analytics completos",
        "Recordatorios automáticos",
      ],
      popular: true,
      icon: Star,
      color: "purple",
    },
    {
      name: "Enterprise",
      description: "Para hospitales y grandes clínicas",
      price: "$6,999",
      period: "/mes",
      features: [
        "Hasta 10,000 mensajes por mes",
        "Todos los agentes IA",
        "Personalización completa",
        "API personalizada",
        "Soporte 24/7 dedicado",
        "Dominio personalizado",
        "Implementación personalizada",
        "Capacitación del equipo",
      ],
      popular: false,
      icon: Crown,
      color: "gold",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      gold: "bg-yellow-100 text-yellow-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="pricing" className="section-padding bg-white">
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
            Planes Adaptados a tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8]">
              {" "}
              Práctica Médica
            </span>
          </h2>
          <p className="section-subtitle">
            Elige el plan que mejor se adapte a las necesidades de tu clínica.
            Todos incluyen soporte técnico especializado y actualizaciones
            gratuitas.
          </p>
        </motion.div>

        {/* Pricing Cards - Top Row */}
        <div className="pricing-grid mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "ring-4 ring-purple-500 scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-12">
                <div
                  className={`icon-container large ${getColorClasses(
                    plan.color
                  )} mx-auto mb-8`}
                >
                  <plan.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-xl">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-12">
                <div className="flex items-baseline justify-center">
                  <span className="text-6xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-3 text-2xl">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-6 mb-12">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-5 px-8 rounded-2xl font-semibold transition-all duration-300 text-xl ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 shadow-xl"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.popular ? "Comenzar Ahora" : "Seleccionar Plan"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Custom Plan Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 lg:p-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-gray-600 text-xl mb-12 leading-relaxed">
              Si tu clínica tiene necesidades específicas, podemos crear un plan
              personalizado que se adapte perfectamente a tus requerimientos.
            </p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <Check className="w-8 h-8 text-green-600" />
                <span className="text-gray-700 text-xl">
                  Implementación personalizada
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <Check className="w-8 h-8 text-green-600" />
                <span className="text-gray-700 text-xl">
                  Integración con sistemas existentes
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <Check className="w-8 h-8 text-green-600" />
                <span className="text-gray-700 text-xl">
                  Capacitación del equipo
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <Check className="w-8 h-8 text-green-600" />
                <span className="text-gray-700 text-xl">
                  Soporte técnico dedicado
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Custom Plan CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="bg-white rounded-3xl p-12 shadow-xl text-center w-full max-w-lg">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">
                Plan Personalizado
              </h4>
              <p className="text-gray-600 mb-12 text-xl leading-relaxed">
                Contáctanos para discutir tus necesidades específicas
              </p>
              <button className="btn-primary w-full text-xl py-6">
                Solicitar Cotización
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
