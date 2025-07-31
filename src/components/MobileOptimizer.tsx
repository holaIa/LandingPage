"use client";

import { useEffect } from "react";
import {
  optimizeScroll,
  shouldReduceMotion,
} from "@/utils/mobileOptimizations";

interface MobileOptimizerProps {
  children: React.ReactNode;
}

const MobileOptimizer = ({ children }: MobileOptimizerProps) => {
  useEffect(() => {
    // Aplicar optimizaciones de scroll
    optimizeScroll();

    // Deshabilitar animaciones si el usuario prefiere movimiento reducido
    if (shouldReduceMotion()) {
      document.documentElement.classList.add("prefers-reduced-motion");
    }

    // Prevenir zoom en dispositivos móviles
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchstart", preventZoom, { passive: false });

    // Limpiar al desmontar
    return () => {
      document.removeEventListener("touchstart", preventZoom);
      document.documentElement.classList.remove("prefers-reduced-motion");
    };
  }, []);

  return <>{children}</>;
};

export default MobileOptimizer;
