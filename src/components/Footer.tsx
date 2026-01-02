"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-paper border-t border-background-subtle">
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logoName.png"
                alt="MediTeam Logo"
                width={200}
                height={60}
                className="h-16 w-auto"
              />
            </div>

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
