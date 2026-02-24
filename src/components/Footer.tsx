"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-paper border-t border-background-subtle">
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logoName.png"
                alt="MediTeam - CRM Médico Inteligente con Agentes de IA"
                width={200}
                height={60}
                className="h-16 w-auto"
              />
            </div>

            {/* Navigation Links for SEO */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
                <li><a href="#features" className="hover:text-primary-500 transition-colors">Características</a></li>
                <li><a href="#platform-showcase" className="hover:text-primary-500 transition-colors">Plataforma</a></li>
                <li><a href="#agents" className="hover:text-primary-500 transition-colors">Agentes IA</a></li>
                <li><a href="#pricing" className="hover:text-primary-500 transition-colors">Precios</a></li>
                <li><a href="#contact" className="hover:text-primary-500 transition-colors">Contacto</a></li>
              </ul>
            </nav>

            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="text-text-secondary">
                © {currentYear} MediTeam. Todos los derechos reservados.
              </div>
              <div className="text-sm text-text-muted">
                Hecho con ❤️ por{" "}
                <a
                  href="https://www.anawim.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  Anawim
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
