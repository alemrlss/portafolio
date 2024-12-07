import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  Container,
  ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Cargar la versión slim para eficiencia
import { useDarkMode } from "../contexts/DarkModeContext";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);

  const { darkMode } = useDarkMode();

  // Solo se ejecuta una vez cuando la aplicación inicia
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Cargar el motor slim
    }).then(() => {
      setInit(true); // Establecer el estado cuando la inicialización esté completa
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container); // Puedes ver el contenedor de partículas en la consola
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "transparent" }, // Fondo transparente
      },
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push", // Efecto de clic
          },
          onHover: {
            enable: false,
            mode: "repulse", // Efecto de hover
          },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: `${darkMode ? "#ffffff" : "#000000"}` },
        links: {
          color: `${darkMode ? "#ffffff" : "#000000"}`,
          distance: 150,
          enable: false,
          opacity: 1,
          width: 20,
        },
        move: {
          direction: MoveDirection.left,
          enable: true,
          outModes: { default: OutMode.out },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 50,
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 2, max: 8 } },
        zIndex: {
          value: -1, // Aseguramos que las partículas estén detrás del contenido
        },
      },
      detectRetina: true,
    }),
    [darkMode]
  );

  if (init) {
    return (
      <>
        {/* Contenedor de partículas con posición absoluta */}
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            width: "100%", // Abarcar todo el ancho
            height: "100%", // Abarcar toda la altura
            zIndex: 1, // Aseguramos que las partículas estén detrás del contenido
          }}
        />
      </>
    );
  }

  return <></>; // Mostrar nada mientras no se haya inicializado
};

export default ParticlesBackground;
