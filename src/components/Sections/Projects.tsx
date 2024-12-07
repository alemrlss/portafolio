import { useDarkMode } from "../../contexts/DarkModeContext";
import projectsData from "../../data/projectsData";
import {
  FaExternalLinkAlt,
  FaLock,
  FaDesktop,
  FaDatabase,
  FaCodeBranch,
} from "react-icons/fa";

function Projects() {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="proyectos"
      className={`py-16 pt-24 px-8 md:px-16 lg:px-32 xl:px-14 mx-auto relative ${
        darkMode
          ? "bg-primaryBg-dark text-primaryText-dark"
          : "bg-primaryBg-light text-primaryText-light"
      } transition-colors duration-300`}
    >
      <h2
        className={`text-4xl font-semibold ${
          darkMode ? "text-accent-blueDark" : "text-accent-blueLight"
        } mb-12 text-center`}
      >
        Proyectos
      </h2>

      {/* Contenedor principal de los proyectos */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative max-w-sm w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            {/* Imagen del Proyecto */}
            <div className="w-full h-64 rounded-t-lg overflow-hidden mb-4">
              <img
                src={project.images[0]}
                alt={project.title}
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            {/* Información del Proyecto */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                {/* Nombre del Proyecto */}
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                {/* Enlace al proyecto o ícono de privado */}
                {project.projectLink ? (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 hover:text-blue-600"
                    title="Ver Proyecto"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                ) : (
                  <FaLock
                    className="w-5 h-5 text-red-500"
                    title="Proyecto privado"
                  />
                )}
              </div>

              {/* Descripción del Proyecto */}
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tipo de proyecto */}
              <div className="flex items-center gap-2 mb-4">
                {project.type === "Frontend" && (
                  <div className="flex items-center space-x-1">
                    <FaDesktop className="text-blue-500" />
                    <span className="text-xs sm:text-sm font-semibold bg-blue-200 dark:bg-blue-700 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-md">
                      Frontend
                    </span>
                  </div>
                )}
                {project.type === "Backend" && (
                  <div className="flex items-center space-x-1">
                    <FaDatabase className="text-green-500" />
                    <span className="text-xs sm:text-sm font-semibold bg-green-200 dark:bg-green-700 text-green-700 dark:text-green-200 px-3 py-1 rounded-md">
                      Backend
                    </span>
                  </div>
                )}
                {project.type === "Full Stack" && (
                  <div className="flex items-center space-x-1">
                    <FaCodeBranch className="text-purple-500" />
                    <span className="text-xs sm:text-sm font-semibold bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-md">
                      Full Stack
                    </span>
                  </div>
                )}
              </div>

              {/* Tecnologías utilizadas */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
