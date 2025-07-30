"use client";

import { motion } from "framer-motion";
import { Users, Heart, Stethoscope } from "lucide-react";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      {/* Main Image Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        {/* Placeholder Image with CSS */}
        <div
          className="w-full h-[500px] bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 30%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, rgba(255, 255, 255, 0.8) 0%, transparent 50%)
            `,
          }}
        >
          {/* Doctor Silhouette */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-80">
            {/* Doctor's head */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-blue-200"></div>

            {/* Doctor's body */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-white rounded-t-3xl border-4 border-blue-200"></div>

            {/* Doctor's arms */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white rounded-full border-4 border-blue-200"></div>

            {/* Stethoscope */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <Stethoscope className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Child Silhouette */}
          <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 w-32 h-40">
            {/* Child's head */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-green-200"></div>

            {/* Child's body */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-white rounded-t-2xl border-4 border-green-200"></div>

            {/* Teddy bear */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-200 rounded-full border-2 border-amber-300"></div>
          </div>

          {/* Medical equipment */}
          <div className="absolute top-8 right-8">
            <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
          </div>

          {/* Medical chart */}
          <div className="absolute top-24 right-8">
            <div className="w-16 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-blue-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>

      {/* Floating Stats Card */}
      <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Pacientes atendidos</p>
            <p className="text-lg font-bold text-gray-900">10,000+</p>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
        <div className="flex items-center space-x-2">
          <Heart className="w-4 h-4" />
          <span>100% Confiable</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
