import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import CursorBackground from "./components/CursorBackground";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:text-neutral-300">
        <CursorBackground />
        <ScrollProgress />
        <Navbar />

        <main className="container mx-auto px-8 pt-24">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
