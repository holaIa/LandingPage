"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar la transparencia - optimizado para móvil
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Inicio", href: "#home" },
    { name: "Características", href: "#features" },
    { name: "Plataforma", href: "#platform-showcase" },
    { name: "Agentes IA", href: "#agents" },
    { name: "Precios", href: "#pricing" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mobile-stable ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-200/50"
          : "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="HolaIA Logo"
              width={60}
              height={24}
              className="w-20 h-15"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-600 hover:text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-600 hover:text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Iniciar Sesión
            </a>
            <a
              href="#demo"
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled
                ? "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md mobile-stable">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="#contact"
                  className="block text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Iniciar Sesión
                </a>
                <a
                  href="#demo"
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
