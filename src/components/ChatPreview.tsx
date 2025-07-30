"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, CheckCircle } from "lucide-react";

const ChatPreview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative"
    >
      {/* Mobile Device Frame */}
      <div className="relative mx-auto w-80 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Dr. Asistente IA</h3>
                <p className="text-blue-100 text-sm">En línea • Respondiendo</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-4 space-y-4 bg-gray-50 h-64 overflow-y-auto">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white rounded-2xl px-4 py-2 max-w-xs">
                <p className="text-sm">
                  Ayudame a prepararme para la proxima visita de Juan
                </p>
                <p className="text-xs text-blue-100 mt-1">5:25 PM</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-4 py-2 max-w-xs shadow-sm">
                <p className="text-sm text-gray-800 font-medium mb-2">
                  Para esta consulta ten en cuenta:
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>
                    • Controlar su peso, ya que en la última consulta no subió
                  </li>
                  <li>
                    • Consultar sobre su apetito, no estaba comiendo carnes
                    rojas
                  </li>
                  <li>
                    • Si sigue despertándose en las noches cada 90 minutos
                  </li>
                  <li>
                    • Salud de la madre, comentó que estaba con una hemorragia
                  </li>
                </ul>
                <p className="text-xs text-gray-400 mt-2">5:27 PM</p>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-4 py-2 shadow-sm">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                <p className="text-sm text-gray-500">Escribe un mensaje...</p>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Home Button */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
      </div>

      {/* Floating Stats */}
      <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>24/7 Activo</span>
        </div>
      </div>

      {/* Connection Status */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Conectado</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatPreview;
