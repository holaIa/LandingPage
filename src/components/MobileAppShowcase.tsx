"use client";

import { motion } from "framer-motion";
import { Smartphone, Calendar, Bell, ClipboardList } from "lucide-react";
import { useEffect, useState } from "react";

import { Antigravity } from "./animations/Antigravity";

const MobileAppShowcase = () => {
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

  const appFeatures = [
    {
      title: "Tu Consultorio en el Bolsillo",
      description: "Lleva el control de tu práctica médica a donde vayas con nuestra app móvil nativa.",
      iconUrl: "/images/3d-emojis/telephone_receiver_3d.png",
      color: "blue",
      image: "/images/plataforma/app-1.png",
    },
    {
      title: "Notificaciones Inteligentes",
      description: "Mantente alerta a mensajes importantes de tus pacientes o actualizaciones del equipo de trabajo.",
      iconUrl: "/images/3d-emojis/sparkles_3d.png",
      color: "orange",
      image: "/images/plataforma/app-2.png",
    },
    {
      title: "Gestión de Citas",
      description: "Visualiza tu agenda diaria, reprograma citas y recibe notificaciones de nuevos pacientes.",
      iconUrl: "/images/3d-emojis/spiral_calendar_3d.png",
      color: "purple",
      image: "/images/plataforma/app-3.png",
    },
    {
      title: "Expedientes Accesibles",
      description: "Consulta el historial clínico de tus pacientes en cualquier momento, incluso fuera del consultorio.",
      iconUrl: "/images/3d-emojis/card_file_box_3d.png",
      color: "blue",
      image: "/images/plataforma/app-4.png",
    }
  ];

  return (
    <section id="mobile-app" className="section-padding bg-gray-50 mobile-optimized overflow-hidden">
      <div className="container-max">
        <motion.div {...animationConfig} className="section-header text-center mb-16">
          <h2 className="section-title">
            Descubre Nuestra
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              {" "}App Móvil
            </span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Porque sabemos que los médicos necesitan flexibilidad. Una app diseñada para mantenerte conectado con tus pacientes sin importar dónde estés.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {appFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0 : 0.6,
                delay: isMobile ? 0 : index * 0.15,
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <Antigravity delayIndex={index} parallaxSpeed={0.15}>
                <div className="relative w-full max-w-[280px] mx-auto aspect-[1/2.16] rounded-[3rem] p-3 shadow-2xl bg-white border-4 border-gray-100 flex items-center justify-center">
                  <div className="absolute top-0 w-32 h-6 bg-white rounded-b-3xl z-10 hidden sm:block"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover rounded-[2.25rem] relative z-0 border border-gray-100" 
                  />
                </div>
              </Antigravity>
              <div className="space-y-3 pt-4">
                <Antigravity delayIndex={index + 10} parallaxSpeed={0.1}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-${feature.color}-50 border border-${feature.color}-100 shadow-sm`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={feature.iconUrl} alt={feature.title} className="w-10 h-10 object-contain drop-shadow-md" />
                  </div>
                </Antigravity>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppShowcase;
