"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container-max">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="HolaIA Logo"
                width={60}
                height={24}
                className="w-20 h-15"
              />
              {/* <span className="text-lg font-semibold text-gray-900">
                HolaIA
              </span> */}
            </div>

            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="text-gray-600">
                © {currentYear} HolaIA. Todos los derechos reservados.
              </div>
              <div className="text-sm text-gray-500">
                Hecho con ❤️ por{" "}
                <a
                  href="https://www.anawim.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium"
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
