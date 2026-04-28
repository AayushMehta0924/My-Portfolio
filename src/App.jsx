import { ThemeProvider } from "./context/ThemeContext";
import { SoundProvider } from "./context/SoundContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CursorBackground from "./components/CursorBackground";
import CustomCursor from "./components/CustomCursor";
import SectionDots from "./components/SectionDots";
import BackToTop from "./components/BackToTop";
import LoadingSplash from "./components/LoadingSplash";
import SectionDivider from "./components/SectionDivider";
import PromptBar from "./components/PromptBar";

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
