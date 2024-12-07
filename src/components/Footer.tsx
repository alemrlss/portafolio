import { useDarkMode } from "../contexts/DarkModeContext";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Íconos sociales

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer
      className={`py-4 px-4 relative ${
        darkMode
          ? "bg-primaryBg-dark text-primaryText-dark"
          : "bg-primaryBg-light text-primaryText-light"
      }`}
    >
      {/* Sección de copyright y versión */}
      <div className="border-t pt-2 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Alejandro Morales. Todos los
          derechos reservados. v1.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
