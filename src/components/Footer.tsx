"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-paper border-t border-background-subtle">
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo y Descripción */}
            <div className="space-y-4">
              <Image
                src="/logoName.png"
                alt="MediTeam - CRM Médico con Inteligencia Artificial en Guadalajara, Jalisco"
                width={200}
                height={60}
                className="h-16 w-auto"
              />
              <p className="text-sm text-text-secondary leading-relaxed">
                CRM médico inteligente con 4 agentes de IA que automatizan la gestión de tu consultorio 24/7.
              </p>
            </div>

            {/* Navigation Links for SEO */}
            <nav aria-label="Navegación del pie de página">
              <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">Navegación</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#features" className="hover:text-primary-500 transition-colors">Características</a></li>
                <li><a href="#platform-showcase" className="hover:text-primary-500 transition-colors">Plataforma</a></li>
                <li><a href="#agents" className="hover:text-primary-500 transition-colors">Agentes IA</a></li>
                <li><a href="#pricing" className="hover:text-primary-500 transition-colors">Precios</a></li>
                <li><a href="#faq" className="hover:text-primary-500 transition-colors">Preguntas Frecuentes</a></li>
                <li><a href="#contact" className="hover:text-primary-500 transition-colors">Contacto</a></li>
              </ul>
            </nav>

            {/* NAP - Name, Address, Phone para SEO local */}
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">Contacto</h4>
              <address className="not-italic space-y-2 text-sm text-text-secondary">
                <p itemProp="name" className="font-medium text-text-primary">MediTeam</p>
                <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Zapopan</span>,{" "}
                  <span itemProp="addressRegion">Jalisco</span>,{" "}
                  <span itemProp="addressCountry">México</span>
                </p>
                <p>
                  <a href="tel:+523315128570" itemProp="telephone" className="hover:text-primary-500 transition-colors">
                    +52 33 1512 8570
                  </a>
                </p>
                <p>
                  <a href="mailto:hola@holaia.com" itemProp="email" className="hover:text-primary-500 transition-colors">
                    hola@holaia.com
                  </a>
                </p>
              </address>
              {/* SEO: área de servicio para crawlers */}
              <p className="sr-only">Servicio en Guadalajara, Zapopan, Tlaquepaque, Tonalá y todo Jalisco</p>
            </div>

            {/* Servicios SEO local */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wider">Servicios</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li>CRM Médico con IA</li>
                <li>Agentes de WhatsApp para Médicos</li>
                <li>Gestión de Citas Automatizada</li>
                <li>Expedientes Médicos Digitales</li>
                <li>Software para Clínicas</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-8 border-t border-background-subtle flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-text-secondary text-sm">
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
    </footer>
  );
};

export default Footer;
