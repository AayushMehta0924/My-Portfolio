import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <section id="education" className="border-b border-neutral-900 pb-12 pt-16 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="my-12 text-center text-4xl"
      >
        Education
      </motion.h2>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 via-purple-500/30 to-pink-400/30 md:left-1/2" />

        <ol className="space-y-10">
          {EDUCATION.map((edu, index) => {
            const left = index % 2 === 0;
            return (
              <li key={index} className="relative md:grid md:grid-cols-2 md:gap-10">
                <span className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-neutral-950 ring-4 ring-neutral-950">
                    <FiAward className="text-sm" />
                  </span>
                </span>

                <motion.div
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-12 rounded-xl border border-neutral-800/70 bg-neutral-950/40 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] md:ml-0 ${
                    left ? "md:col-start-1 md:text-right md:pr-14" : "md:col-start-2 md:pl-14"
                  }`}
                >
                  <p className="mb-1 text-xs uppercase tracking-wider text-purple-300/80">{edu.year}</p>
                  <h6 className="mb-2 text-lg font-semibold text-neutral-100">
                    {edu.degree}
                  </h6>
                  <p className="mb-2 text-sm text-purple-200">{edu.school}</p>
                  <p className="text-sm text-neutral-400">{edu.details}</p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Education;
