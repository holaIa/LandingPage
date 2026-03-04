"use client";

import { motion } from "framer-motion";
import { Mic, FileText, CheckCircle, Brain, Sparkles, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const ClinicalNotesFeature = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const highlights = [
    {
      iconUrl: "/images/3d-emojis/speech_balloon_3d.png",
      title: "Graba tu Consulta",
      description: "Activa el micr\u00f3fono y olvida el teclado. Habla con tu paciente como siempre.",
    },
    {
      iconUrl: "/images/3d-emojis/sparkles_3d.png",
      title: "IA Transcribe y Estructura",
      description: "La IA convierte la conversaci\u00f3n en una nota cl\u00ednica profesional con todos los campos.",
    },
    {
      iconUrl: "/images/3d-emojis/file_folder_3d.png",
      title: "Revisa y Aplica",
      description: "Verifica la nota generada, edita lo que necesites y aplica al expediente con un clic.",
    },
  ];

  return (
    <section
      id="clinical-notes"
      className="section-padding bg-gradient-to-b from-white to-primary-50 mobile-optimized relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary-100/40 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary-200/30 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container-max">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0 : 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
                <Mic className="w-4 h-4" />
                <span>Notas Cl\u00ednicas con IA</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Dicta tu consulta,{" "}
                <span className="text-primary-600">la IA escribe la nota</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Deja de teclear durante tus consultas. Nuestra IA escucha la
                conversaci\u00f3n con tu paciente y genera autom\u00e1ticamente una{" "}
                <span className="font-semibold text-gray-800">
                  nota cl\u00ednica estructurada
                </span>{" "}
                con motivo de consulta, diagn\u00f3sticos, tratamiento,
                medicamentos y m\u00e1s.
              </p>
              <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                T\u00fa solo revisas, editas si es necesario, y listo. El expediente
                se llena solo.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              {highlights.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={
                    isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: isMobile ? 0 : 0.5,
                    delay: isMobile ? 0 : index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-center bg-white p-4 rounded-[1.5rem] border border-primary-100 shadow-[0_4px_15px_rgba(59,130,246,0.06)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.12)] transition-shadow duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary-50/80 rounded-[1.25rem] border border-primary-100 flex-shrink-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={feature.iconUrl}
                      alt={feature.title}
                      className="w-8 h-8 object-contain drop-shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-600">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 font-medium text-sm md:text-base mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Mockup */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0 : 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Main Card - Note preview */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mic className="text-white w-6 h-6" />
                    <h3 className="text-white font-semibold text-lg">
                      Nota Cl\u00ednica con IA
                    </h3>
                  </div>
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Generada en segundos
                  </span>
                </div>

                <div className="p-6 md:p-8 space-y-5">
                  {/* Motivo de consulta */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                        Motivo de consulta
                      </span>
                      <span className="bg-primary-100 text-primary-700 text-[10px] px-1.5 py-0.5 rounded font-semibold">
                        IA
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Paciente femenina de 32 a\u00f1os acude por dolor epig\u00e1strico
                      de 3 d\u00edas de evoluci\u00f3n, tipo ardoroso, que se intensifica
                      despu\u00e9s de comer.
                    </p>
                  </div>

                  {/* Diagnostico */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                        Diagn\u00f3stico
                      </span>
                      <span className="bg-primary-100 text-primary-700 text-[10px] px-1.5 py-0.5 rounded font-semibold">
                        IA
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Gastritis aguda (K29.1) - Presuntivo
                    </p>
                  </div>

                  {/* Tratamiento */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                        Tratamiento
                      </span>
                      <span className="bg-primary-100 text-primary-700 text-[10px] px-1.5 py-0.5 rounded font-semibold">
                        IA
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Omeprazol 20mg c/12h por 14 d\u00edas. Dieta blanda. Evitar
                      irritantes, caf\u00e9 y alcohol.
                    </p>
                  </div>

                  {/* Skeleton lines */}
                  <div className="space-y-2 mt-2 opacity-40">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/5"></div>
                  </div>
                </div>
              </div>

              {/* Floating badge - time saved */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    5 min ahorrados
                  </p>
                  <p className="text-xs text-gray-500">por cada consulta</p>
                </div>
              </motion.div>

              {/* Floating badge - accuracy */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 md:-right-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2"
              >
                <div className="bg-primary-100 p-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                </div>
                <p className="text-sm font-bold text-gray-800">~90% precisi\u00f3n</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalNotesFeature;
