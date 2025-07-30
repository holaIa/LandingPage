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
import HeroImage from "./HeroImage";

const HeroWithPlaceholder = () => {
  return (
    <section
      id="home"
      className="hero-section bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      {/* Background Elements */}
      <div className="background-blob"></div>
      <div className="background-blob"></div>
      <div className="background-blob"></div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 text-base font-semibold mb-8 shadow-sm"
            >
              <Zap className="w-5 h-5 mr-3" />
              Revoluciona tu práctica médica con IA
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              CRM Médico Inteligente con
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] block">
                Agentes de IA
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
            >
              Automatiza la gestión de citas por WhatsApp, optimiza la atención
              al paciente y aumenta la eficiencia de tu clínica con agentes de
              IA especializados en el sector médico.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-start items-center mb-16"
            >
              <a href="#demo" className="btn-primary text-lg px-8 py-4">
                <span>Solicitar Demo Gratis</span>
                <ArrowRight className="w-6 h-6" />
              </a>
              <button className="btn-secondary text-lg px-8 py-4">
                <Play className="w-6 h-6" />
                <span>Ver Video Demo</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="stats-grid"
            >
              <div className="text-center">
                <div className="icon-container bg-blue-100 mx-auto">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">90%</h3>
                <p className="text-gray-600 text-lg">
                  Reducción en tiempo de gestión
                </p>
              </div>
              <div className="text-center">
                <div className="icon-container bg-green-100 mx-auto">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">24/7</h3>
                <p className="text-gray-600 text-lg">
                  Atención automática disponible
                </p>
              </div>
              <div className="text-center">
                <div className="icon-container bg-purple-100 mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">500+</h3>
                <p className="text-gray-600 text-lg">
                  Clínicas confían en nosotros
                </p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Component */}
          <HeroImage />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroWithPlaceholder;
