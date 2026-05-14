import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FaPlane } from "react-icons/fa";
import { EXPERIENCES } from "../../constants";
import SectionWatermark from "../ui/SectionWatermark";

const MilestoneDot = ({ index, total, scrollYProgress }) => {
  const threshold = (index + 0.5) / total;
  const scale = useTransform(scrollYProgress, [threshold - 0.05, threshold], [1, 1.6]);
  const opacity = useTransform(scrollYProgress, [threshold - 0.05, threshold], [0.5, 1]);
  const glow = useTransform(
    scrollYProgress,
    [threshold - 0.05, threshold],
    ["0 0 0px rgba(236,72,153,0)", "0 0 14px rgba(236,72,153,0.7)"]
  );

  return (
    <motion.span
      style={{ scale, opacity, boxShadow: glow }}
      className="block h-3 w-3 rounded-full bg-gradient-to-br from-pink-400 to-cyan-400 ring-4 ring-white dark:ring-neutral-950"
    />
  );
};

const Experience = () => {
  const ref = useRef(null);
  const planeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });
  const planeY = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const planeTop = useTransform(planeY, [0, 1], ["0%", "100%"]);
  const fillHeight = useTransform(planeY, [0, 1], ["0%", "100%"]);
  const planeWobble = useTransform(planeY, [0, 0.5, 1], [85, 95, 85]);

  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const sx = useSpring(magnetX, { stiffness: 250, damping: 18 });
  const sy = useSpring(magnetY, { stiffness: 250, damping: 18 });

  useEffect(() => {
    const onMove = (e) => {
      const el = planeRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        const k = (120 - dist) / 120;
        magnetX.set(dx * 0.35 * k);
        magnetY.set(dy * 0.35 * k);
      } else {
        magnetX.set(0);
        magnetY.set(0);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [magnetX, magnetY]);

  return (
    <section id="experience" className="relative pb-12 pt-16 scroll-mt-24">
      <SectionWatermark>Career</SectionWatermark>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="my-12 text-center text-4xl text-neutral-900 dark:text-neutral-100"
      >
        Experience
      </motion.h2>

      <div ref={ref} className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-300 dark:bg-neutral-800/80 md:left-1/2" />
        <motion.div
          style={{ height: fillHeight }}
          className="absolute left-4 top-0 w-px bg-gradient-to-b from-pink-400 via-purple-500 to-cyan-400 md:left-1/2"
        />

        <motion.div
          ref={planeRef}
          style={{ top: planeTop, x: "-50%", y: "-50%", rotate: planeWobble }}
          className="absolute left-4 z-30 md:left-1/2"
          aria-hidden
        >
          <motion.span
            style={{ x: sx, y: sy }}
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-pink-400 to-cyan-400 text-neutral-950 ring-4 ring-white dark:ring-neutral-950 shadow-[0_0_30px_rgba(236,72,153,0.45)]"
          >
            <FaPlane className="text-base" />
          </motion.span>
        </motion.div>

        <ol className="space-y-10">
          {EXPERIENCES.map((exp, index) => {
            const left = index % 2 === 0;
            return (
              <li key={index} className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <MilestoneDot
                    index={index}
                    total={EXPERIENCES.length}
                    scrollYProgress={scrollYProgress}
                  />
                </span>

                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-10 rounded-xl border border-neutral-200 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.18)] dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:hover:border-cyan-400/40 dark:hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] md:ml-0 ${
                    left ? "md:col-start-1 md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <p className="mb-1 text-xs uppercase tracking-wider text-cyan-700 dark:text-cyan-300/80">{exp.year}</p>
                  <h6 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {exp.role} <span className="text-sm font-normal text-purple-700 dark:text-purple-200">— {exp.company}</span>
                  </h6>
                  <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-purple-300/70 bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 transition-colors hover:bg-purple-200 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-200 dark:hover:bg-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
