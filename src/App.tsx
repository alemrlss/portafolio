import { DarkModeProvider } from "./contexts/DarkModeContext"; // Importa el proveedor
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/Sections/AboutMe";
import Experience from "./components/Sections/Experience";
import ParticlesBackground from "./components/ParticlesBackground";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Sections/Projects";


function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen font-sans scroll-smooth">
        {/* El fondo de partículas se coloca dentro de esta sección */}
        <ParticlesBackground />
        <Navbar />
        <main className="scroll-smooth">
          <AboutMe />
          <TechMarquee />
          <Experience />
          <Projects />
        </main>
      </div>
      <Footer />
    </DarkModeProvider>
  );
}

export default App;
