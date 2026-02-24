"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Individual",
      description: "Ideal para médicos independientes",
      price: "Paga lo que uses",
      period: "",
      features: [
        "Los 4 agentes de IA activados",
        "WhatsApp Business dedicado",
        "Sin renta mensual fija",
        "Acceso a todas las funciones",
        "Soporte estándar",
        "Paga solo consumo real",
      ],
      popular: false,
      iconUrl: "/images/3d-emojis/high_voltage_3d.png",
      color: "blue",
    },
    {
      name: "Consultorio",
      description: "Para consultorios con alto volumen",
      price: "Escalable",
      period: "",
      features: [
        "Los 4 agentes de IA activados",
        "WhatsApp Business dedicado",
        "Analítica de rendimiento",
        "Soporte prioritario",
        "Reportes mensuales de ahorro",
        "Mejores tasas por volumen",
      ],
      popular: true,
      iconUrl: "/images/3d-emojis/star_3d.png",
      color: "purple",
    },
    {
      name: "Clínicas / Grupos",
      description: "Soluciones para múltiples doctores",
      price: "Personalizado",
      period: "",
      features: [
        "Múltiples números de WhatsApp",
        "Dashboard administrativo",
        "Integración con EHR/HIS",
        "Account Manager dedicado",
        "Capacitación de personal",
        "SLA garantizado",
      ],
      popular: false,
      iconUrl: "/images/3d-emojis/crown_3d.png",
      color: "gold",
    },
  ];

  const get3DColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50/80 border border-blue-100",
      purple: "bg-purple-50/80 border border-purple-100",
      gold: "bg-yellow-50/80 border border-yellow-100",
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
            Precios <span className="text-primary-500">Transparentes</span>
          </h2>
          <p className="section-subtitle">
            Sin funciones bloqueadas. Sin contratos forzosos. Sin sorpresas.
            Tus 4 agentes de IA están listos para trabajar desde el primer día.
          </p>
          <div className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-primary-50 text-primary-700 font-semibold border border-primary-100">
            Costo de implementación único: $9,900 MXN
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="pricing-grid mb-20 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-full ${
                plan.popular ? "ring-4 ring-primary-500 scale-105 z-10" : "opacity-90 hover:opacity-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl">
                    Sugerido
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8 w-full flex flex-col items-center">
                <div
                  className={`w-24 h-24 rounded-[1.75rem] flex items-center justify-center shadow-sm border border-white/50 mb-8 transform-gpu transition-transform hover:scale-110 duration-300 ${get3DColorClasses(
                    plan.color
                  )}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={plan.iconUrl} alt={plan.name} className="w-14 h-14 object-contain drop-shadow-md" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-lg">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-10 w-full">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-4 text-text-secondary italic">
                  Solo pagas por mensajes de WhatsApp y uso de IA
                </p>
              </div>

              {/* Features */}
              <div className="space-y-5 mb-12 flex-grow text-left w-full">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0">
                      <Check className="w-6 h-6 text-success" />
                    </div>
                    <span className="text-gray-700 text-lg leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/523315128570?text=Hola,%20me%20interesa%20activar%20mi%20equipo%20de%20IA%20con%20el%20plan%20${plan.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-5 px-8 rounded-2xl font-bold transition-all duration-300 text-xl text-center ${
                  plan.popular
                    ? "bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105 shadow-xl"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.popular ? "Activar ahora" : "Elegir plan"}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pricing Concept Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-4xl p-10 lg:p-16 border border-primary-100 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-text-primary mb-6">
              ¿Por qué pagar solo por lo que usas?
            </h3>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              A diferencia de otros CRMs que te cobran por funciones que no ocupas, en MediTeam creemos en la transparencia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp Profesional</h4>
                  <p className="text-text-secondary">Paga solo por los mensajes enviados y recibidos por tus agentes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Inteligencia Artificial</h4>
                  <p className="text-text-secondary">El costo escala con el volumen de interacciones y tareas ejecutadas.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-primary-200">
              <p className="text-primary-800 font-bold text-lg">
                "Con MediTeam, tu inversión siempre es proporcional al crecimiento de tu consultorio."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
