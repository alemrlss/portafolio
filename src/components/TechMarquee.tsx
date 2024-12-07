import Marquee from "react-fast-marquee";
import { useDarkMode } from "../contexts/DarkModeContext";
import { FaReact, FaNodeJs, FaDocker, FaGithub } from "react-icons/fa";
import { SiNestjs, SiMysql, SiPostgresql, SiMongodb } from "react-icons/si";
import { SiJavascript, SiTypescript, SiGit } from "react-icons/si";

function TechMarquee() {
  const { darkMode } = useDarkMode();

  // Lista de tecnologías sin categorizar, todo al lado de todo
  const technologies = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "NestJS", icon: <SiNestjs /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <Marquee
      gradient={false}
      style={{ margin: "0px" }}
      speed={40}
      autoFill
      direction="left"
      className={`py-8 ${
        darkMode
          ? "bg-primaryBg-dark text-primaryText-dark"
          : "bg-primaryBg-light text-primaryText-light"
      } border-t border-b border-opacity-20`}
    >
      <div className="flex items-center text-xl font-semibold ">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="mr-2 text-2xl">{tech.icon}</span> {tech.name}
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default TechMarquee;
