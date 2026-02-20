"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Configuración de animaciones optimizada para móvil
  const animationConfig = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.6 },
  };

  const titleAnimation = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.2 },
  };

  const subtitleAnimation = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.4 },
  };

  const buttonsAnimation = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.6 },
  };

  const statsAnimation = {
    initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.8 },
  };

  const imageAnimation = {
    initial: isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.4 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Elements - más sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-max relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <motion.div
              {...animationConfig}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold border border-primary-100"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              IA Médica de Nueva Generación
            </motion.div>

            {/* Main Heading - Nuevo posicionamiento */}
            <motion.h1
              {...titleAnimation}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-tight"
            >
              4 agentes de <span className="text-primary-500">IA trabajando</span> para tu consultorio 24/7.
            </motion.h1>

            {/* Subtitle - Enfocado en valor */}
            <motion.p
              {...subtitleAnimation}
              className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-2xl leading-relaxed"
            >
              MediTeam te entrega un equipo digital completo que responde, agenda y organiza todo, para que tú solo te encargues de tus pacientes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...buttonsAnimation}
              className="flex flex-col sm:flex-row gap-4 justify-start items-center"
            >
              <a
                href="https://wa.me/523315128570?text=Hola,%20me%20interesa%20activar%20mis%204%20agentes%20de%20IA%20de%20MediTeam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center font-bold"
              >
                <span>Activa tus 4 agentes de IA</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Quick Benefits - estilo Heidi */}
            <motion.div
              {...statsAnimation}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">Sin tarjeta de crédito</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">Configuración en minutos</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-sm font-medium">Soporte 24/7</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div {...imageAnimation} className="relative mt-8 lg:mt-0">
            {/* Medical Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/medica_nene.jpeg"
                alt="Doctora profesional examinando a un niño en una consulta médica"
                className="w-full h-auto object-cover mobile-stable"
                style={{ minHeight: "400px" }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Floating Stats Card - más sutil */}
            <div className="absolute -bottom-6 -left-6 bg-background-paper rounded-xl p-4 shadow-lg border border-background-subtle mobile-stable hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-text-muted font-medium">
                    Pacientes atendidos
                  </p>
                  <p className="text-lg font-bold text-text-primary">
                    10,000+
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - estilo Heidi Health */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 1 }}
          className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-text-primary mb-2">
              90%
            </div>
            <p className="text-text-secondary text-lg">
              Reducción en tiempo de gestión
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-text-primary mb-2">
              24/7
            </div>
            <p className="text-text-secondary text-lg">
              Atención automática disponible
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-text-primary mb-2">
              500+
            </div>
            <p className="text-text-secondary text-lg">
              Clínicas confían en nosotros
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
