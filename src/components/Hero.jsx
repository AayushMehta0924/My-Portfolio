import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Aayush_beach.jpg";
import ParticleField from "./ParticleField";
import MagneticButton from "./MagneticButton";

const ROLES = [
  "Cloud Engineer",
  "Data Engineer",
  "AI Engineer",
  "Analytics Lead",
];

const container = (delay) => ({
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.15]);
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.7]);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative pb-4 lg:mb-35">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ParticleField />
      </div>
      <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="flex flex-wrap pt-24">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              style={{ scale: titleScale, transformOrigin: "left center" }}
              className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 bg-clip-text pb-8 text-6xl font-thin tracking-tight text-transparent dark:from-white dark:via-neutral-200 dark:to-neutral-400 lg:mt-16 lg:text-8xl"
            >
              Aayush Mehta
            </motion.h1>

            <motion.div
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="flex h-12 items-center text-3xl tracking-tight"
            >
              <span
                className="animate-shimmer bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent dark:from-pink-300 dark:via-purple-400 dark:to-cyan-300"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="ml-1 inline-block h-7 w-[2px] animate-blink bg-cyan-500/80 dark:bg-cyan-300/80" aria-hidden="true" />
            </motion.div>

            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light italic tracking-tighter text-neutral-700 dark:text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-3"
            >
              <MagneticButton
                as="a"
                href="#contact"
                className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-shadow duration-300 hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.6)]"
              >
                Get in touch
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#projects"
                className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-cyan-500/60 hover:text-cyan-700 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
              >
                See projects
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0, scale: 0.92 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-pink-400/40 via-purple-500/30 to-cyan-400/40 opacity-60 blur-2xl" />
            <motion.img
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              src={profilePic}
              alt="Aayush Mehta"
              className="relative rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
