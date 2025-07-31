// Utilidades para optimizaciones móviles

// Extender la interfaz CSSStyleDeclaration para incluir propiedades webkit
interface ExtendedCSSStyleDeclaration extends CSSStyleDeclaration {
  webkitOverflowScrolling?: string;
}

export const mobileAnimationConfig = (isMobile: boolean) => ({
  initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: isMobile ? 0 : 0.6 },
});

export const mobileViewAnimationConfig = (isMobile: boolean) => ({
  initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: isMobile ? 0 : 0.8 },
  viewport: { once: true },
});

export const mobileStaggerAnimationConfig = (
  isMobile: boolean,
  index: number
) => ({
  initial: isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: isMobile ? 0 : 0.6,
    delay: isMobile ? 0 : index * 0.1,
  },
  viewport: { once: true },
});

// Configuración para videos optimizada para móvil
export const mobileVideoConfig = (isMobile: boolean) => ({
  preload: isMobile ? "metadata" : "auto",
  playsInline: true,
  muted: true,
  loop: true,
  controls: true,
});

// Clases CSS para optimización móvil
export const mobileClasses = {
  container: "mobile-optimized",
  stable: "mobile-stable",
  smooth: "mobile-smooth",
  noAnimations: "mobile-no-animations",
};

// Detectar si el dispositivo es móvil
export const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768;
};

// Detectar si el dispositivo es iOS
export const isIOS = () => {
  if (typeof window === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent);
};

// Detectar si el dispositivo es Android
export const isAndroid = () => {
  if (typeof window === "undefined") return false;
  return /Android/.test(navigator.userAgent);
};

// Optimizar scroll para móvil
export const optimizeScroll = () => {
  if (typeof window === "undefined") return;

  // Prevenir scroll horizontal
  document.body.style.overflowX = "hidden";

  // Mejorar rendimiento de scroll en iOS
  if (isIOS()) {
    const extendedStyle = document.body.style as ExtendedCSSStyleDeclaration;
    extendedStyle.webkitOverflowScrolling = "touch";
  }
};

// Deshabilitar animaciones en dispositivos que prefieren movimiento reducido
export const shouldReduceMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
