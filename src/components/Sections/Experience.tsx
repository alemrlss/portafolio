import { useDarkMode } from "../../contexts/DarkModeContext";

function Experience() {
  const { darkMode } = useDarkMode();

  return (
    <section
      id="experiencia"
      className={`py-16 pt-24 px-4 relative ${
        darkMode
          ? "bg-primaryBg-dark text-primaryText-dark"
          : "bg-primaryBg-light text-primaryText-light"
      } transition-all duration-300`}
    >
      {/* Contenido principal de la sección */}
      <div className="max-w-screen-lg mx-auto relative z-10">
        <h2
          className={`text-4xl font-semibold ${
            darkMode ? "text-accent-blueDark" : "text-accent-blueLight"
          } mb-12 text-center`}
        >
          Experiencia
        </h2>

        {/* Contenedor principal con línea vertical */}
        <div className="relative">
          {/* Línea vertical continua */}
          <div
            style={{ width: "1px" }} // Ajusta aquí el grosor exacto
            className={`absolute top-1 left-12 h-full ${
              darkMode ? "bg-accent-blueDark" : "bg-accent-blueLight"
            }`}
          />

          {/* Experiencia 1 */}
          <div className="relative pl-16 mb-12">
            {/* Bola */}
            <div
              className={`absolute top-1 left-10 w-4 h-4 rounded-full ${
                darkMode ? "bg-accent-blueDark" : "bg-accent-blueLight"
              }`}
            ></div>
            {/* Contenido */}
            <div className="">
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-accent-blueDark" : "text-accent-blueLight"
                }`}
              >
                Software Enginner
              </h3>
              <p className="text-sm text-gray-500">Agosto 2024 - Actualidad</p>
              <p className="text-lg mt-2">
                Ingeniero de Software Full Stack y Especialista en IT
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>
                  Desarrollé y mantuve un sistema de gestión interna para la
                  generación de contratos, reportes y estadísticas, logrando
                  mejorar en un 70% el proceso de matriculación de alumnos.
                </li>
                <li>
                  Desarrollé múltiples landing pages optimizadas para la
                  generación de leads, abarcando diversos temas y módulos de la
                  empresa.
                </li>
                <li>
                  Implementé pasarelas de pago en sitios web para negocios
                  variados, como plataformas de cursos y servicios, lo que
                  mejoró significativamente los procesos de cobro y facturación.
                </li>
              </ul>
            </div>
          </div>

          {/* Experiencia 2 */}
          <div className="relative pl-16 mb-12">
            {/* Bola */}
            <div
              className={`absolute top-1 left-10 w-4 h-4 rounded-full ${
                darkMode ? "bg-accent-blueDark" : "bg-accent-blueLight"
              }`}
            ></div>
            {/* Contenido */}
            <div className="">
              <h3
                className={`text-xl font-semibold ${
                  darkMode ? "text-accent-blueDark" : "text-accent-blueLight"
                }`}
              >
                Desarrollador Backend - PsRockola
              </h3>
              <p className="text-sm text-gray-500">
                Enero 2024 - Septiembre 2024
              </p>
              <p className="text-lg mt-2">
                Desarrollo y mantenimiento de una plataforma como servicio(PAAS)
                para la gestión de multimedia en establecimientos.
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>
                  Implementé un sistema de filtrado dinámico para optimizar la
                  búsqueda y selección de los usuarios.
                </li>
                <li>
                  Introduje la integración de Stripe como pasarela de pago,
                  permitiendo a los usuarios adquirir membresías mensuales de
                  manera segura y eficiente mediante webhooks.
                </li>
                <li>
                  Coordiné la revisión y optimización de la estructura de la
                  base de datos, logrando una mejora del 40% en su eficiencia y
                  rendimiento.
                </li>
                <li>
                  Desarrolle un modulo de generacion de codigos qr para la venta
                  y adquision de creditos dentro de la plataforma.
                </li>
                <li>
                  Desarrolle un modulo de billetera virtual para comercializar
                  entre usuarios dentro de la plataforma.
                </li>
              </ul>
            </div>
          </div>

          {/* Experiencia 3 */}
          <div className="relative pl-16  ">
            {/* Bola */}
            <div
              className={`absolute top-1 left-10 w-4 h-4 rounded-full ${
                darkMode ? "bg-accent-blueDark" : "bg-accent-blueLight"
              }`}
            ></div>
            {/* Contenido */}
            <div className="">
              <p
                className={`text-xl font-semibold ${
                  darkMode ? "text-accent-blueDark" : "text-accent-blueLight"
                }`}
              >
                Full Stack Developer - VenSalud
              </p>
              <p className="text-sm text-gray-500">
                Junio 2023 - Diciembre 2023
              </p>
              <p className="text-lg mt-2">
              Desarrollo y mantenimiento de aplicaci web enfocadas en equipos medicos, informes y reparaciones. 

              
              </p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>
                Desarrolle junto al equipo de desarrollo nuevas funcionalidades
                para el sistema de informes y seguimiento de los equipos.
                </li>
                <li>
                  Optimice el proceso de generacion de informes y reduccion de
                  errores en un 90% con un nuevo sistema.
                </li>
                <li>
                  Mejore la experiencia de usuario con una nueva interfaz.
                </li>
                <li>
                  Junto al equipo, Mejore la búsqueda y filtrado de los equipos
                  médicos en un 80% con un sistema de búsqueda dinámica.
                </li>
              </ul>
            </div>
            {/* Bola */}
            <div
              className={`absolute  left-10 w-4 h-4 rounded-full ${
                darkMode ? "bg-accent-blueDark" : "bg-accent-blueLight"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
