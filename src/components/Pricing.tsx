"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Gift, Sparkles, TrendingUp, ShieldCheck, Users } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Esencial",
      description: "Para el doctor independiente que quiere empezar a automatizar",
      priceMonthly: 1299,
      priceAnnual: 1083,
      features: [
        "2 Agentes IA (WhatsApp + Agenda)",
        "200 conversaciones WhatsApp/mes",
        "100 citas gestionadas por IA/mes",
        "Confirmación automática de citas",
        "Expediente digital básico",
        "1 número WhatsApp",
        "1 doctor incluido",
        "Soporte por email",
      ],
      extra: "Conversación extra: $5 MXN",
      popular: false,
      iconUrl: "/images/3d-emojis/high_voltage_3d.png",
      color: "blue",
      cta: "Comenzar ahora",
    },
    {
      name: "Profesional",
      description: "Para el consultorio que quiere el equipo completo de IA",
      priceMonthly: 2499,
      priceAnnual: 2083,
      features: [
        "4 Agentes IA completos",
        "500 conversaciones WhatsApp/mes",
        "Citas ilimitadas",
        "200 notas clínicas con IA/mes",
        "Resúmenes clínicos automáticos",
        "Seguimiento post-consulta",
        "Transcripción de consultas",
        "Dashboard analytics",
        "Hasta 2 doctores incluidos",
        "Soporte prioritario (chat)",
      ],
      extra: "Doctor adicional: $699/mes | Conv. extra: $4 MXN",
      popular: true,
      iconUrl: "/images/3d-emojis/star_3d.png",
      color: "purple",
      cta: "Activar ahora",
    },
    {
      name: "Clínica",
      description: "Para clínicas y grupos médicos con múltiples doctores",
      priceMonthly: 4499,
      priceAnnual: 3749,
      features: [
        "4 Agentes IA completos",
        "2,000 conversaciones WhatsApp/mes",
        "Citas y notas clínicas ilimitadas",
        "Hasta 5 doctores incluidos",
        "Hasta 3 números WhatsApp",
        "Dashboard administrativo multi-doctor",
        "Reportes de rendimiento",
        "Workflows personalizados",
        "Integración EHR",
        "Soporte prioritario (teléfono + chat)",
      ],
      extra: "Doctor adicional: $499/mes | Conv. extra: $3 MXN",
      popular: false,
      iconUrl: "/images/3d-emojis/crown_3d.png",
      color: "gold",
      cta: "Elegir plan",
    },
    {
      name: "Enterprise",
      description: "Para hospitales y redes de clínicas",
      priceMonthly: 0,
      priceAnnual: 0,
      features: [
        "Doctores y conversaciones ilimitadas",
        "SSO y seguridad enterprise",
        "SLA garantizado (99.9% uptime)",
        "Gerente de cuenta dedicado",
        "Entrenamiento presencial del equipo",
        "API abierta para integraciones",
        "Números WhatsApp ilimitados",
        "Soporte 24/7 dedicado",
      ],
      extra: "",
      popular: false,
      iconUrl: "/images/3d-emojis/hospital_3d.png",
      color: "green",
      cta: "Contactar ventas",
    },
  ];

  const get3DColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "bg-blue-50/80 border border-blue-100",
      purple: "bg-purple-50/80 border border-purple-100",
      gold: "bg-yellow-50/80 border border-yellow-100",
      green: "bg-emerald-50/80 border border-emerald-100",
    };
    return colors[color] || colors.blue;
  };

  const savingsPercent = 17;

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
            Precios <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">Transparentes</span>
          </h2>
          <p className="section-subtitle">
            Sin costo de setup. Sin contratos forzosos. Sin sorpresas.
            <br />
            Tus agentes de IA están listos para trabajar desde el primer día.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className={`text-lg font-semibold transition-colors ${
                !isAnnual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-primary-600" : "bg-gray-300"
              }`}
              aria-label="Alternar entre precio mensual y anual"
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-lg font-semibold transition-colors ${
                isAnnual ? "text-gray-900" : "text-gray-400"
              }`}
            >
              Anual
            </span>
            <AnimatePresence>
              {isAnnual && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="inline-flex flex-shrink-0 items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-bold ml-2"
                >
                  <Gift className="w-4 h-4" />
                  2 meses gratis
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Early Adopter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-center text-white shadow-lg mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <div className="p-3 bg-white/10 rounded-full">
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </div>
          <div>
            <p className="text-xl font-bold">
              Early Adopter: 30% de descuento los primeros 3 meses
            </p>
            <p className="text-primary-100 text-sm mt-1">
              Oferta exclusiva y limitada para los primeros 100 consultorios
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20 items-stretch mt-12 md:mt-16">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const isEnterprise = plan.priceMonthly === 0;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-full ${
                  plan.popular
                    ? "ring-4 ring-primary-500 scale-[1.03] z-10 lg:-translate-y-2 border border-primary-100"
                    : "border border-gray-100 opacity-95 hover:opacity-100"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl whitespace-nowrap uppercase tracking-wider">
                      Recomendado
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6 w-full flex flex-col items-center">
                  <div
                    className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-sm mb-6 transform-gpu transition-transform hover:scale-110 duration-300 ${get3DColorClasses(
                      plan.color
                    )}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={plan.iconUrl}
                      alt={plan.name}
                      className="w-12 h-12 object-contain drop-shadow-md"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 w-full flex flex-col justify-center h-28">
                  {isEnterprise ? (
                    <>
                      <span className="text-3xl font-extrabold text-gray-900">
                        Personalizado
                      </span>
                      <p className="mt-2 text-gray-500 text-sm">
                        A la medida de tu organización
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-lg text-gray-400">$</span>
                        <span className="text-4xl font-extrabold text-gray-900">
                          {price.toLocaleString("es-MX")}
                        </span>
                      </div>
                      <div className="flex justify-center flex-col mt-1">
                        <span className="text-gray-500 text-sm font-medium">
                          MXN/mes {isAnnual ? "facturado anual" : ""}
                        </span>
                        {isAnnual && (
                          <span className="text-green-600 text-sm font-semibold mt-1">
                            Ahorras {savingsPercent}%
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3.5 mb-8 flex-grow text-left w-full border-t border-gray-50 pt-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-primary-500" />
                      </div>
                      <span className="text-gray-600 text-sm leading-snug font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Extra costs */}
                {plan.extra && (
                  <p className="text-xs text-gray-400 mb-6 w-full text-center border-t border-gray-100 pt-4">
                    {plan.extra}
                  </p>
                )}

                {/* CTA Button */}
                <a
                  href={
                    isEnterprise
                      ? `https://wa.me/523315128570?text=Hola,%20me%20interesa%20el%20plan%20Enterprise%20para%20mi%20organización`
                      : `https://wa.me/523315128570?text=Hola,%20me%20interesa%20activar%20el%20plan%20${plan.name}%20${isAnnual ? "anual" : "mensual"}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 text-base text-center ${
                    plan.popular
                      ? "bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105 shadow-xl"
                      : isEnterprise
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : "bg-primary-50 text-primary-700 hover:bg-primary-100 hover:-translate-y-1"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
          className="bg-primary-50 rounded-[2.5rem] p-10 lg:p-16 border border-primary-100 overflow-hidden relative"
        >
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                 La IA es una inversión, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">no un gasto</span>
               </h3>
               <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                 MediTeam automatiza el trabajo que normalmente te costaría más de $12,000 MXN mensuales, trabajando 24/7 sin descansos ni errores.
               </p>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               {/* Competitor 1 */}
               <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center">
                  <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/3d-emojis/telephone_receiver_3d.png" alt="Recepcionista" className="w-8 h-8 object-contain drop-shadow-sm" />
                  </div>
                  <p className="text-lg font-bold text-gray-800 mb-2">Recepcionista</p>
                  <p className="text-3xl font-bold text-red-500 line-through mb-2">
                    $10,000<span className="text-base text-gray-400">/mes</span>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-2">
                    Horario limitado, festivos, vacaciones e incapacidades.
                  </p>
               </div>

               {/* Competitor 2 */}
               <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 flex flex-col items-center">
                  <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/3d-emojis/spiral_calendar_3d.png" alt="Software" className="w-8 h-8 object-contain drop-shadow-sm" />
                  </div>
                  <p className="text-lg font-bold text-gray-800 mb-2">Software + IA</p>
                  <p className="text-3xl font-bold text-red-500 line-through mb-2">
                    $1,400<span className="text-base text-gray-400">/mes</span>
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-2">
                    Sin respuestas en WhatsApp, sin automatización integral real.
                  </p>
               </div>

               {/* MediTeam */}
               <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-center shadow-xl ring-4 ring-primary-100 flex flex-col items-center text-white transform md:-translate-y-2">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/3d-emojis/star_3d.png" alt="MediTeam" className="w-10 h-10 object-contain drop-shadow-md" />
                  </div>
                  <p className="text-lg font-bold text-white mb-2">
                    MediTeam Profesional
                  </p>
                  <p className="text-4xl font-extrabold text-white mb-2">
                    $2,499<span className="text-base font-medium text-primary-200">/mes</span>
                  </p>
                  <p className="text-sm text-primary-100 leading-relaxed mt-2 font-medium">
                    4 agentes IA respondiendo y agendando todo el año, 24/7.
                  </p>
               </div>
            </div>

            {/* Guarantees Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
               <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                  <div className="p-3 bg-green-50 rounded-xl">
                     <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-gray-900">Cancelación libre</p>
                     <p className="text-xs text-gray-500">Sin plazos forzosos</p>
                  </div>
               </div>
               
               <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                  <div className="p-3 bg-purple-50 rounded-xl">
                     <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-gray-900">Retorno Inmediato</p>
                     <p className="text-xs text-gray-500">Se paga con 1-2 citas extra</p>
                  </div>
               </div>

               <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm border border-gray-50">
                  <div className="p-3 bg-blue-50 rounded-xl">
                     <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-gray-900">Referidos</p>
                     <p className="text-xs text-gray-500">1 mes gratis por referido</p>
                  </div>
               </div>
            </div>

            <div className="pt-8 border-t border-primary-200 text-center">
              <p className="text-primary-800 font-bold text-xl mb-2">
                Con solo 1-2 citas extra al mes, MediTeam se paga solo.
              </p>
              <p className="text-sm text-primary-700">
                Inicia con <span className="font-bold underline">14 días de prueba gratis</span>. Sin tarjeta de crédito.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
