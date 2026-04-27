import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

const ParticleField = () => {
  const [ready, setReady] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  const linkColor = theme === "dark" ? "#7c7ec6" : "#0ea5e9";
  const dotColor = theme === "dark" ? "#a5b4fc" : "#0284c7";

  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 55, density: { enable: true, area: 900 } },
          color: { value: dotColor },
          opacity: { value: 0.45 },
          size: { value: { min: 1, max: 2.5 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" },
            random: true,
          },
          links: {
            enable: true,
            distance: 130,
            color: linkColor,
            opacity: 0.25,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.55 } },
          },
        },
      }}
    />
  );
};

export default ParticleField;
