import { useDarkMode } from "../contexts/DarkModeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import logoDark from "../assets/logo/logo-dark.png";
import logo from "../assets/logo/logo.png";

function Navbar() {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex items-center justify-between px-4 sm:px-52 py-3 ${
        darkMode
          ? "bg-primaryBg-dark/60 text-primaryText-dark backdrop-blur-sm" // Fondo oscuro transparente con blur
          : "bg-primaryBg-light/60 text-primaryText-light backdrop-blur-sm" // Fondo claro transparente con blur
      } shadow-md fixed w-full z-50 top-0 left-0 transition-all duration-300`}
    >
      {/* Sección izquierda: Logo + Links */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div>
          {darkMode ? (
            <img
              src={logo}
              alt="Logo Oscuro"
              className="h-12 w-auto"
            />
          ) : (
            <img
              src={logoDark}
              alt="Logo Claro"
              className="h-12 w-auto"
            />
          )}
        </div>

        {/* Enlaces de navegación */}
        <div className="hidden sm:flex space-x-6">
          <a href="#sobre-mi" className="hover:text-accent-blueDark">
            Sobre Mi
          </a>
          <a href="#experiencia" className="hover:text-accent-blueDark">
            Experiencia
          </a>
          <a href="#proyectos" className="hover:text-accent-blueDark">
            Proyectos
          </a>
        </div>

        {/* Enlaces solo en móviles (Sobre Mi y Experiencia) */}
        <div className="sm:hidden flex space-x-6">
          <a href="#sobre-mi" className="hover:text-accent-blueDark">
            Sobre Mi
          </a>
          <a href="#experiencia" className="hover:text-accent-blueDark">
            Experiencia
          </a>
        </div>
      </div>

      {/* Sección derecha: Switch de modo oscuro */}
      <div className="flex items-center">
        <DarkModeSwitch
          checked={!darkMode}
          onChange={toggleDarkMode}
          size={28}
          moonColor="blue"
          sunColor="yellow"
        />
      </div>
    </nav>
  );
}

export default Navbar;
