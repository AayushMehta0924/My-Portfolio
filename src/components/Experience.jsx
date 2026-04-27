import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-neutral-900 pb-12 pt-16 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="my-12 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-pink-400/30 via-purple-500/30 to-cyan-400/30 md:left-1/2" />

        <ol className="space-y-10">
          {EXPERIENCES.map((exp, index) => {
            const left = index % 2 === 0;
            return (
              <li key={index} className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="block h-3 w-3 rounded-full bg-gradient-to-br from-pink-400 to-cyan-400 ring-4 ring-neutral-950" />
                </span>

                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-10 rounded-xl border border-neutral-800/70 bg-neutral-950/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] md:ml-0 ${
                    left ? "md:col-start-1 md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <p className="mb-1 text-xs uppercase tracking-wider text-cyan-300/80">{exp.year}</p>
                  <h6 className="mb-2 text-lg font-semibold text-neutral-100">
                    {exp.role} <span className="text-sm font-normal text-purple-200">— {exp.company}</span>
                  </h6>
                  <p className="mb-4 text-sm text-neutral-400">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-medium text-purple-200 transition-colors hover:bg-purple-500/20"
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
