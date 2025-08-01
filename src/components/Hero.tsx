"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Calendar,
  Users,
  Zap,
  ArrowRight,
  Play,
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

  const scrollAnimation = {
    initial: isMobile ? { opacity: 1 } : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: isMobile ? 0 : 1, delay: isMobile ? 0 : 1.2 },
  };

  return (
    <section
      id="home"
      className="hero-section bg-gradient-to-br from-blue-50 via-white to-purple-50 mobile-optimized"
    >
      {/* Background Elements */}
      <div className="background-blob"></div>
      <div className="background-blob"></div>
      <div className="background-blob"></div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left">
            {/* Badge */}
            <motion.div
              {...animationConfig}
              className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-blue-100 text-blue-800 text-sm sm:text-base font-semibold mb-6 sm:mb-8 shadow-sm"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Revoluciona tu práctica médica con IA
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              {...titleAnimation}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
            >
              CRM Médico Inteligente con
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] block">
                Agentes de IA
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...subtitleAnimation}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-2xl leading-relaxed"
            >
              Automatiza la gestión de citas por WhatsApp, optimiza la atención
              al paciente y aumenta la eficiencia de tu clínica con agentes de
              IA especializados en el sector médico.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...buttonsAnimation}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start items-center mb-12 sm:mb-16"
            >
              <a
                href="https://wa.me/523315128570?text=Hola,%20me%20interesa%20solicitar%20una%20demo%20gratis%20de%20HolaIA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                <span>Solicitar Demo Gratis</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...statsAnimation} className="stats-grid">
              <div className="text-center">
                <div className="icon-container bg-blue-100 mx-auto">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  90%
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Reducción en tiempo de gestión
                </p>
              </div>
              <div className="text-center">
                <div className="icon-container bg-green-100 mx-auto">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  24/7
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Atención automática disponible
                </p>
              </div>
              <div className="text-center">
                <div className="icon-container bg-purple-100 mx-auto">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                  500+
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Clínicas confían en nosotros
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image and Chat Preview */}
          <motion.div {...imageAnimation} className="relative mt-8 lg:mt-0">
            {/* Medical Image */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-6 sm:mb-8">
              <img
                src="/medica_nene.jpeg"
                alt="Doctora profesional examinando a un niño en una consulta médica"
                className="w-full h-auto object-cover mobile-stable"
                style={{ minHeight: "250px" }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <p className="text-base sm:text-lg font-semibold">
                  Atención Personalizada
                </p>
                <p className="text-xs sm:text-sm opacity-90">
                  Cuidado profesional con IA
                </p>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg mobile-stable">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Pacientes atendidos
                  </p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">
                    10,000+
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        {...scrollAnimation}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
