import vensaludImg from "../assets/vensalud.png";
import proreforImg from "../assets/prorefor2.png";
import esmeramanagerImg from "../assets/esmeramg.png";
import psrockolaImg from "../assets/ventasrockola.jpg";
import cursoUnasImg from "../assets/unass.png";
import troveTradersImg from "../assets/trovetraders.jpg";

const projectsData = [
  {
    title: "Esmera Manager",
    description:
      "Plataforma de gestión empresarial que optimiza matriculación y procesos internos de manera eficiente.",
    projectLink: null, // Cambia esta URL si el proyecto tiene enlace
    type: "Full Stack", // Tipo del proyecto: "Full Stack", "Frontend", "Backend"
    images: [esmeramanagerImg, esmeramanagerImg],
    technologies: [
      "Typescript",
      "ReactJS",
      "NodeJS",
      "NestJS",
      "PostgreSQL",
      "TailwindCSS",
      "JWT",
    ],
  },
  {
    title: "ProRefor",
    description:
      "Pagina web que muestra servicios de reformas y construccion. Con formularios para captacion de clientes potenciales  ",
    projectLink: "https://prorefor.com", // Cambia esta URL si el proyecto tiene enlace
    type: "Frontend", // Tipo del proyecto: "Full Stack", "Frontend", "Backend"
    images: [proreforImg, proreforImg],
    technologies: ["Typescript", "ReactJS", "TailwindCSS", "MUI", "Frontend"],
  },
  {
    title: "PS Rockola",
    description:
      "Plataforma para la Gestión de Contenido Multimedia en Establecimientos con Reproducción de Video y Música. ",
    projectLink: null, // Cambia esta URL si el proyecto tiene enlace
    type: "Full Stack", // Tipo del proyecto: "Full Stack", "Frontend", "Backend"
    images: [psrockolaImg, psrockolaImg],
    technologies: [
      "Typescript",
      "NodeJS",
      "NestJS",
      "ReactJS",
      "TailwindCSS",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    title: "Cursos Uñas Madrid",
    description:
      "Pagina web que proporciona información sobre cursos de uñas y permite la compra online del curso mediante pasarela de pago stripe.",
    projectLink: "https://xn--cursosuasmadrid-4qb.com/", // Cambia esta URL si el proyecto tiene enlace
    type: "Full Stack", // Tipo del proyecto: "Full Stack", "Frontend", "Backend"
    images: [cursoUnasImg, cursoUnasImg],
    technologies: [
      "Typescript",
      "ReactJS",
      "TailwindCSS",
      "MUI",
      "NestJS",
      "Stripe",
    ],
  },
  {
    title: "Vensalud",
    description:
      "Desarrollo de panel administrativo web enfocado en el control de equipos médicos, generación de informes y reparaciones.",
    projectLink: null, // Cambia esta URL si el proyecto tiene enlace
    type: "Backend", // Tipo del proyecto: "Full Stack", "Frontend", "Backend"
    images: [vensaludImg, vensaludImg],
    technologies: ["Javascript", "NextJS", "NodeJS", "NestJS", "MongoDB"],
  },
  {
    title: "TroveTraders",
    description:
      "Aplicación anti-fraude para la comercialización de objetos coleccionables con fines educativos, asegurando transacciones seguras.",
    projectLink: null, // Cambia esta URL si el proyecto tiene enlace
    type: "Full Stack", // Tipo del proyecto: "Full Stack", "Frontend", "Backend"
    images: [troveTradersImg, troveTradersImg],
    technologies: [
      "Typescript",
      "NestJS",
      "NodeJS",
      "ReactJS",
      "MongoDB",
      "WebSockets",
    ],
  },
];

export default projectsData;
