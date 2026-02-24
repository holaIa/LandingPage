"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, FileText, CheckCircle, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const ClinicalSummaryFeature = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const animationConfig = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8 },
    viewport: { once: true },
  };

  const featureHighlights = [
    {
      iconUrl: "/images/3d-emojis/sparkles_3d.png",
      title: "IA Adaptada a tu Especialidad",
      description: "Analizamos el historial con el enfoque clínico exacto que tu perfil requiere.",
    },
    {
      iconUrl: "/images/3d-emojis/file_folder_3d.png",
      title: "Unificación Completa",
      description: "Integramos el contexto de todas las consultas previas para una visión 360° del paciente.",
    },
    {
      iconUrl: "/images/3d-emojis/alarm_clock_3d.png",
      title: "Ahorro de Tiempo de Revisión",
      description: "Entra a cada cita con la información más relevante ya procesada y lista para analizar.",
    },
  ];

  return (
    <section id="clinical-summary" className="section-padding bg-gradient-to-b from-primary-50 to-white mobile-optimized relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-200/30 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Main Visual/Mockup Context */}
          <motion.div 
             initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: isMobile ? 0 : 0.8 }}
             viewport={{ once: true }}
             className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100">
                <div className="bg-primary-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Brain className="text-white w-6 h-6" />
                    <h3 className="text-white font-semibold text-lg">Resumen Inteligente de IA</h3>
                  </div>
                  <span className="bg-primary-500 text-white text-xs px-2 py-1 rounded-full font-medium">Generado en segundos</span>
                </div>
                
                <div className="p-6 md:p-8 space-y-6">
                  {/* Mock content loading feeling */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Paciente</p>
                        <p className="text-lg font-bold text-gray-800">Ana García</p>
                      </div>
                      <p className="text-sm text-primary-600 font-medium">Cardiología</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Sparkles className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                        <p className="text-gray-700 leading-relaxed font-medium">
                          <span className="bg-primary-50 text-primary-700 px-1 rounded">Evolución</span>: Paciente femenina de 45 años, presenta mejoría en control de la presión arterial (120/80 mmHg). Disminución de episodios de taquicardia según Holter reciente.
                        </p>
                      </div>
                    </div>
                    
                    {/* Skeleton lines to complete the mockup */}
                    <div className="space-y-2 mt-4 opacity-50">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating element 1 */}
              <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.6 }}
                 viewport={{ once: true }}
                 className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">15+ Consultas Anteriores</p>
                  <p className="text-xs text-gray-500">Unificadas y analizadas</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
             initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: isMobile ? 0 : 0.8 }}
             viewport={{ once: true }}
             className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>Innovación a tu Medida</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                La Inteligencia Artificial que <span className="text-primary-600">realmente necesitas</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                No te damos una IA genérica. Nos encargamos de que tengas una herramienta que trabaje por ti, analizando el contexto completo de tus pacientes y extrayendo las piezas de información clave <span className="font-semibold text-gray-800">específicas para tu especialidad médica</span>.
              </p>
              <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                Mantente siempre a la vanguardia, entrando a tu consulta con una visión clara forjada por la síntesis de todo el conocimiento previo.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              {featureHighlights.map((feature, index) => (
                <div key={index} className="flex gap-4 items-center bg-white p-4 rounded-[1.5rem] border border-primary-100 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.12)] transition-shadow duration-300 group">
                  <div className="w-14 h-14 bg-primary-50/80 rounded-[1.25rem] border border-primary-100 flex-shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feature.iconUrl} alt={feature.title} className="w-8 h-8 object-contain drop-shadow-md" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-600">{feature.title}</h4>
                    <p className="text-gray-500 font-medium text-sm md:text-base mt-1 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

             <div className="pt-4">
              {/* <a
                href="#contact" // Link to the section where they can schedule demo/contact
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
              >
                Actualiza tu consultorio hoy
              </a> */}
            </div>

            {/* Added Quote Section */}
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl border border-primary-500/30 relative overflow-hidden"
            >
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                <Brain className="w-32 h-32 -mt-8 -mr-8 text-white" />
              </div>
              <div className="relative z-10 flex gap-4 items-start">
               <div className="hidden sm:block mt-1">
                 <div className="text-4xl text-primary-200 font-serif leading-none opacity-80">"</div>
               </div>
               <div>
                  <p className="text-xl md:text-2xl font-bold text-white leading-snug italic">
                    La inteligencia artificial no va a reemplazar al médico, pero sí al que no la utiliza.
                  </p>
               </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalSummaryFeature;
