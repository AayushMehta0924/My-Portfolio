import { ThemeProvider } from "./context/ThemeContext";
import { SoundProvider } from "./context/SoundContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Technologies from "./components/sections/Technologies";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorBackground from "./components/ui/CursorBackground";
import CustomCursor from "./components/ui/CustomCursor";
import SectionDots from "./components/ui/SectionDots";
import BackToTop from "./components/ui/BackToTop";
import LoadingSplash from "./components/ui/LoadingSplash";
import SectionDivider from "./components/ui/SectionDivider";
import PromptBar from "./components/ui/PromptBar";

const App = () => {
  return (
    <ThemeProvider>
      <SoundProvider>
        <LoadingSplash />
        <div className="relative overflow-x-hidden text-neutral-700 antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:text-neutral-300">
          <CursorBackground />
          <ScrollProgress />
          <CustomCursor />
          <SectionDots />
          <BackToTop />
          <Navbar />
          <PromptBar />

          <main className="container mx-auto px-8 pt-24">
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Technologies />
            <SectionDivider />
            <Experience />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Contact />
          </main>
          <Footer />
        </div>
      </SoundProvider>
    </ThemeProvider>
  );
};

export default App;
