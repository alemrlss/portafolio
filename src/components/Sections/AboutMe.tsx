import TypingEffect from "react-typing-effect";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useDarkMode } from "../../contexts/DarkModeContext";
import imgProfile from "../../../public/perfil.png";
import { motion } from "framer-motion"; // Importar framer-motion

function AboutMe() {
  const { darkMode } = useDarkMode();

  // Configuración de la animación de subrayado
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.5 } },
  };

  return (
    <section
      id="sobre-mi"
      className={`py-16 md:py-32 px-4 ${
        darkMode
          ? "bg-primaryBg-dark text-primaryText-dark"
          : "bg-primaryBg-light text-primaryText-light"
      } transition-all duration-300`}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:grid md:grid-cols-4 gap-8">
        {/* Columna 2 (Imagen de perfil en dispositivos móviles) */}
        <div className="flex md:col-span-1 items-center justify-center flex-col my-8 md:mb-0">
          <div className="relative">
            <img
              src={imgProfile}
              alt="Foto de perfil"
              className={`w-48 h-48 md:h-64 md:w-64 rounded-full border-4 ${
                darkMode ? "border-white" : "border-gray-400"
              } shadow-lg`}
            />
          </div>

          {/* Redes sociales debajo de la foto de perfil */}
          <div className="mt-4 flex space-x-6">
            <a
              href="https://github.com/alemrlss"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "text-white" : "text-gray-600"} hover:${
                darkMode ? "text-gray-900" : "text-black"
              } transition-all duration-300 ease-in-out`}
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alemrlss"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "text-white" : "text-gray-600"} hover:${
                darkMode ? "text-gray-200" : "text-black"
              } transition-all duration-300 ease-in-out`}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://wa.me/+34676017218"
              target="_blank"
              rel="noopener noreferrer"
              className={`${darkMode ? "text-white" : "text-gray-600"} hover:${
                darkMode ? "text-gray-200" : "text-[#3B82F6]"
              } transition-all duration-300 ease-in-out`}
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Columna 1 (Texto con el efecto de escribir y borrar) */}
        <div className="md:col-span-3 p-4 relative z-10 bg-transparent">
          <h3 className="text-3xl md:text-2xl font-semibold mb-2 md:mb-2">
            Alejandro Morales
          </h3>
          <h2
            className={`text-3xl md:text-5xl font-semibold mb-2 md:mb-4 ${
              darkMode ? "text-accent-blueDark" : "text-accent-blueLight"
            }`}
          >
            <TypingEffect
              text={["Backend Developer", "FullStack Developer"]}
              speed={75}
              eraseDelay={1500}
              eraseSpeed={75}
              typingDelay={150}
              className="text-2xl md:text-4xl"
            />
          </h2>

          <p className="text-base md:text-lg mb-4 font-bold">
            Ingeniero en Software con más de 3 años de experiencia,
            especializado en el desarrollo de soluciones backend utilizando {""}
            <span className="relative inline-block">
              {" "}
              JavaScript
              <motion.div
                className={`absolute bottom-1 left-0 h-[7px] opacity-60 -z-20 ${
                  darkMode ? "bg-blue-400" : "bg-blue-400"
                }`}
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
              />
            </span>
            , {""}
            <span className="relative inline-block">
              {" "}
              TypeScript
              <motion.div
                className={`absolute bottom-1 left-0 h-[7px] opacity-60 -z-20 ${
                  darkMode ? "bg-blue-400" : "bg-blue-400"
                }`}
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
              />
            </span>
            {" y "}
            <span className="relative inline-block">
              Node.js
              <motion.div
                className={`absolute bottom-1 left-0 h-[7px] opacity-60 -z-20 ${
                  darkMode ? "bg-blue-400" : "bg-blue-400"
                }`}
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
              />
            </span>
            . Me apasiona enfrentar nuevos desafíos y siempre busco implementar
            soluciones eficientes y escalables.
          </p>

          <p
            className={`text-lg md:text-xl italic mt-2 md:mt-4 mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Building the future, one stack at a time 🚀
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="/path/to/your/cv.pdf"
              download
              className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-all text-sm md:text-base"
            >
              <FaDownload className="mr-2" /> Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
