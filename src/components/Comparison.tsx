"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

const Comparison = () => {
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

  const comparisons = [
    {
      feature: "Ejecución de Tareas",
      crm: "No (Solo almacena)",
      human: "Sí (Variable)",
      mediteam: "Sí (Automatizada)",
      iconUrl: "/images/3d-emojis/sparkles_3d.png",
    },
    {
      feature: "Disponibilidad",
      crm: "24/7 (Pasiva)",
      human: "8-10 horas/día",
      mediteam: "24/7 (Activa)",
      iconUrl: "/images/3d-emojis/robot_3d.png",
    },
    {
      feature: "Tiempo de Respuesta",
      crm: "N/A",
      human: "Minutos a Horas",
      mediteam: "Instantáneo",
      iconUrl: "/images/3d-emojis/alarm_clock_3d.png",
    },
    {
      feature: "Costo Mensual",
      crm: "$500 - $600 MXN",
      human: "$6,000 - $10,000 MXN",
      mediteam: "Basado en consumo",
      iconUrl: "/images/3d-emojis/coin_3d.png",
    },
    {
      feature: "Escalabilidad",
      crm: "Alta",
      human: "Limitada",
      mediteam: "Ilimitada",
      iconUrl: "/images/3d-emojis/rocket_3d.png",
    },
  ];

  return (
    <section id="comparison" className="section-padding bg-background relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary-100/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-100/30 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container-max">
        <motion.div {...animationConfig} className="section-header">
          <h2 className="section-title">
            ¿Por qué elegir un
            <span className="text-primary-500"> Equipo de IA</span> en lugar de un CRM?
          </h2>
          <p className="section-subtitle">
            MediTeam no es solo un lugar para guardar datos. Es un equipo digital que ejecuta el trabajo pesado por ti.
          </p>
        </motion.div>

        <div className="mt-12 lg:mt-20 overflow-x-auto pb-4">
          <div className="min-w-[800px] bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/60 shadow-xl overflow-hidden">
            <table className="w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="p-8 text-left text-xl font-bold text-text-primary">
                    <span className="bg-primary-50 px-4 py-2 rounded-xl text-primary-600 border border-primary-100 italic">Comparativa</span>
                  </th>
                  <th className="p-8 text-center text-lg font-bold text-text-secondary opacity-60">CRM Tradicional</th>
                  <th className="p-8 text-center text-lg font-bold text-text-secondary opacity-60">Recepcionista Humana</th>
                  <th className="p-8 text-center text-lg font-bold relative min-w-[260px]">
                    <div className="absolute inset-x-0 top-0 bottom-0 bg-primary-500/5 border-x border-primary-500/10" />
                    <div className="relative pt-4">
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-primary-400">RECOMENDADO</span>
                      <span className="text-primary-600 text-2xl italic tracking-tight">MediTeam IA</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className="group">
                    <td className="p-6 text-base font-bold text-text-primary pl-10 border-b border-gray-100/30">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.iconUrl} alt={item.feature} className="w-6 h-6 object-contain drop-shadow-sm" />
                        </div>
                        {item.feature}
                      </div>
                    </td>
                    <td className="p-6 text-center text-text-secondary opacity-70 border-b border-gray-100/30">
                      {item.crm.includes("No") ? (
                        <div className="flex items-center justify-center text-red-400">
                          <X className="w-5 h-5 mr-2" /> {item.crm}
                        </div>
                      ) : item.crm}
                    </td>
                    <td className="p-6 text-center text-text-secondary opacity-70 border-b border-gray-100/30">{item.human}</td>
                    <td className="p-6 text-center relative border-b border-gray-100/30 group-last:border-b-0">
                      <div className="absolute inset-y-0 inset-x-0 bg-primary-500/5 border-x border-primary-500/10" />
                      <div className="relative flex items-center justify-center font-bold text-primary-700">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", damping: 10, stiffness: 100, delay: index * 0.1 }}
                          className="mr-2"
                        >
                          <Check className="w-6 h-6 text-success bg-success/10 rounded-full p-1 shadow-sm" />
                        </motion.div>
                        {item.mediteam}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <motion.div
            {...animationConfig}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-10 bg-white rounded-[2.5rem] border border-primary-100 shadow-[0_4px_20px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-blue-50/80 rounded-[1.5rem] flex items-center justify-center shadow-sm border border-white/50 mb-8 group-hover:rotate-6 transition-transform duration-300 transform-gpu">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/3d-emojis/card_file_box_3d.png" alt="Más que un CRM" className="w-12 h-12 object-contain drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary-600 leading-snug">Más que un CRM</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-lg">
              Mientras que un CRM tradicional solo almacena información, MediTeam <span className="text-primary-600 font-bold decoration-primary-200 underline decoration-4 underline-offset-4">ejecuta</span> tareas reales por ti.
            </p>
          </motion.div>

          <motion.div
            {...animationConfig}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-10 bg-white rounded-[2.5rem] border border-primary-100 shadow-[0_4px_20px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group ring-4 ring-primary-50/50"
          >
            <div className="w-20 h-20 bg-indigo-50/80 rounded-[1.5rem] flex items-center justify-center shadow-sm border border-white/50 mb-8 group-hover:scale-110 transition-transform duration-300 transform-gpu">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/3d-emojis/robot_3d.png" alt="Equipo 24/7" className="w-12 h-12 object-contain drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary-600 leading-snug">Equipo 24/7</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-lg">
              Tus 4 agentes de IA trabajan sin descanso, respondiendo mensajes y agendando citas mientras duermes o consultas.
            </p>
          </motion.div>

          <motion.div
            {...animationConfig}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-10 bg-white rounded-[2.5rem] border border-primary-100 shadow-[0_4px_20px_rgba(59,130,246,0.08)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 group"
          >
            <div className="w-20 h-20 bg-emerald-50/80 rounded-[1.5rem] flex items-center justify-center shadow-sm border border-white/50 mb-8 group-hover:-rotate-6 transition-transform duration-300 transform-gpu">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/3d-emojis/coin_3d.png" alt="Valor Económico" className="w-12 h-12 object-contain drop-shadow-md" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary-600 leading-snug">Valor Económico</h3>
            <p className="text-gray-500 font-medium leading-relaxed text-lg">
              Obtén el rendimiento de un equipo administrativo por una <span className="text-emerald-500 font-bold underline decoration-emerald-200 decoration-4 underline-offset-4">fracción del costo</span> de una recepcionista humana.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
