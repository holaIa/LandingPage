"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo MediTeam evita errores en la gestión de citas?",
      answer:
        "Nuestros agentes de IA están entrenados específicamente en el sector médico y utilizan algoritmos avanzados para validar información, confirmar citas y detectar inconsistencias antes de que ocurran errores.",
    },
    {
      question: "¿Qué otras tareas puede optimizar MediTeam?",
      answer:
        "MediTeam puede optimizar la gestión de expedientes médicos, recordatorios de medicamentos, seguimiento post-consulta, encuestas de satisfacción, y la coordinación entre diferentes especialistas.",
    },
    {
      question: "¿La IA de MediTeam aprende sola y evoluciona?",
      answer:
        "Sí, nuestros agentes de IA aprenden continuamente de cada interacción, mejorando sus respuestas y adaptándose a las necesidades específicas de tu clínica y pacientes.",
    },
    {
      question: "¿Se puede personalizar MediTeam para cada clínica?",
      answer:
        "Absolutamente. MediTeam se adapta a las políticas, horarios, especialidades y flujos de trabajo específicos de cada clínica, manteniendo la identidad y procesos únicos de tu práctica médica.",
    },
    {
      question: "¿Cuánto tiempo toma implementar MediTeam?",
      answer:
        "La implementación básica toma 24-48 horas. Para configuraciones más complejas o integraciones personalizadas, el proceso puede extenderse a 1-2 semanas con nuestro equipo de soporte.",
    },
    {
      question: "¿Se puede integrar MediTeam con nuestros sistemas existentes?",
      answer:
        "Sí, MediTeam se integra con la mayoría de sistemas médicos, laboratorios, farmacias y herramientas de gestión. Ofrecemos APIs personalizadas para integraciones específicas.",
    },
    {
      question: "¿Mis pacientes notarán que hablan con una IA?",
      answer:
        "Los agentes de MediTeam están diseñados para sentirse naturales y profesionales. Manejan el 80% de las interacciones comunes (agendar citas, resolver dudas, dar horarios). Cuando una consulta requiere atención personalizada, el agente escala automáticamente a ti o a tu equipo. Los pacientes valoran la respuesta inmediata 24/7.",
    },
    {
      question: "¿Cómo se protegen los datos de mis pacientes?",
      answer:
        "La seguridad es nuestra prioridad. Toda la información está cifrada de extremo a extremo, cumplimos con regulaciones de protección de datos y nuestros servidores cuentan con los más altos estándares de seguridad. Solo tú y tu equipo autorizado tienen acceso a la información clínica.",
    },
    {
      question: "¿MediTeam está disponible en Guadalajara y Zapopan?",
      answer:
        "Sí, MediTeam opera desde Zapopan, Jalisco y brinda servicio a toda la Zona Metropolitana de Guadalajara incluyendo Zapopan, Tlaquepaque, Tonalá y todo el estado de Jalisco. Nuestro equipo de soporte está disponible localmente para implementación y capacitación presencial.",
    },
    {
      question: "¿Qué tipo de médicos y clínicas usan MediTeam en Jalisco?",
      answer:
        "MediTeam es utilizado por médicos generales, especialistas, dentistas, psicólogos y clínicas de múltiples especialidades en Guadalajara, Zapopan y toda la zona metropolitana. Se adapta a cualquier especialidad médica y tamaño de consultorio.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-16 order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white rounded-full text-sm sm:text-base font-bold uppercase tracking-wider">
              FAQs
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Todo lo que Necesitas Saber sobre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                MediTeam
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Descubre cómo MediTeam puede transformar tu práctica médica,
              automatizando procesos clave y mejorando la eficiencia de tu
              clínica con respuestas precisas y personalizadas.
            </p>

            {/* CTA Button */}
            <div className="pt-4 lg:pt-8">
              <a
                href="https://wa.me/523315128570?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20gratuita%20de%20MediTeam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-10 py-3 sm:py-5 bg-white border-2 border-primary-600 text-primary-600 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-primary-50 transition-colors duration-200 group w-full sm:w-auto justify-center"
              >
                <span>Solicitar demo gratuita</span>
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-700 transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Section - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-8 pt-8 lg:pt-16 order-1 lg:order-2"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-10 py-6 sm:py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4 sm:pr-8 leading-relaxed">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 sm:w-7 sm:h-7 text-gray-900" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-7 sm:h-7 text-gray-900" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="px-6 sm:px-10 py-6 sm:py-8">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
