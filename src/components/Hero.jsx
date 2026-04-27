import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aayushProfilePic.png";
import ParticleField from "./ParticleField";

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
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0.2]);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative border-b border-neutral-900 pb-4 lg:mb-35">
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
              className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text pb-8 text-6xl font-thin tracking-tight text-transparent lg:mt-16 lg:text-8xl"
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
                className="animate-shimmer bg-gradient-to-r from-pink-300 via-purple-400 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent"
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
              <span className="ml-1 inline-block h-7 w-[2px] animate-blink bg-cyan-300/80" aria-hidden="true" />
            </motion.div>

            <motion.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light italic tracking-tighter text-neutral-300"
            >
              {HERO_CONTENT}
            </motion.p>
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
              className="relative rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
