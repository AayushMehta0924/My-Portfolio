import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { ABOUT_DATA } from "../constants";
import SectionWatermark from "./SectionWatermark";

const renderValue = (value, indent = 1) => {
  const pad = "  ".repeat(indent);
  if (Array.isArray(value)) {
    return (
      <span>
        [
        <br />
        {value.map((v, i) => (
          <span key={i}>
            {pad}
            {"  "}
            {typeof v === "string" ? (
              <span className="text-emerald-600 dark:text-green-400">"{v}"</span>
            ) : typeof v === "number" || typeof v === "boolean" ? (
              <span className="text-orange-600 dark:text-orange-300">{String(v)}</span>
            ) : (
              renderValue(v, indent + 1)
            )}
            {i < value.length - 1 ? "," : ""}
            <br />
          </span>
        ))}
        {pad}]
      </span>
    );
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value);
    return (
      <span>
        {"{"}
        <br />
        {entries.map(([k, v], i) => (
          <span key={k}>
            {pad}
            {"  "}
            <span className="text-amber-600 dark:text-yellow-300">"{k}"</span>: {renderValue(v, indent + 1)}
            {i < entries.length - 1 ? "," : ""}
            <br />
          </span>
        ))}
        {pad}
        {"}"}
      </span>
    );
  }
  if (typeof value === "string") return <span className="text-emerald-600 dark:text-green-400">"{value}"</span>;
  if (typeof value === "number" || typeof value === "boolean")
    return <span className="text-orange-600 dark:text-orange-300">{String(value)}</span>;
  return null;
};

const About = () => {
  const entries = Object.entries(ABOUT_DATA);
  const [open, setOpen] = useState(() =>
    Object.fromEntries(entries.map(([k], i) => [k, i < 2]))
  );

  const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));
  const allOpen = entries.every(([k]) => open[k]);
  const setAll = (v) => setOpen(Object.fromEntries(entries.map(([k]) => [k, v])));

  return (
    <section id="about" className="relative pb-12 pt-16 scroll-mt-24">
      <SectionWatermark>About</SectionWatermark>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="my-12 text-center text-4xl text-neutral-900 dark:text-neutral-100"
      >
        About <span className="text-neutral-400 dark:text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          layout
          className="w-full max-w-3xl rounded-2xl border border-neutral-200/80 bg-white/70 p-6 font-mono text-sm leading-relaxed text-neutral-800 shadow-xl backdrop-blur-sm dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:text-neutral-200 sm:text-base"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 text-xs text-neutral-500">about.json</span>
            </div>
            <button
              onClick={() => setAll(!allOpen)}
              className="rounded-md border border-neutral-300 px-2 py-1 text-xs text-neutral-700 transition-colors hover:border-cyan-500/60 hover:text-cyan-700 dark:border-neutral-700/60 dark:text-neutral-300 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap break-words">
            <code>
              <span className="text-neutral-700 dark:text-neutral-300">{"{"}</span>
              <motion.div layout>
                {entries.map(([key, value], idx) => {
                  const isOpen = !!open[key];
                  return (
                    <motion.div layout key={key} className="pl-4">
                      <button
                        onClick={() => toggle(key)}
                        className="group flex w-full items-center gap-1 text-left transition-colors hover:bg-neutral-100 rounded px-1 -ml-1 dark:hover:bg-neutral-800/40"
                        aria-expanded={isOpen}
                      >
                        <motion.span
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="text-neutral-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-300"
                        >
                          <FiChevronRight />
                        </motion.span>
                        <span className="text-rose-600 dark:text-red-400">"{key}"</span>
                        <span className="text-neutral-700 dark:text-neutral-300">:</span>
                        {!isOpen && (
                          <span className="ml-2 text-neutral-400 italic dark:text-neutral-600">
                            {Array.isArray(value)
                              ? `[ … ${value.length} item${value.length !== 1 ? "s" : ""} ]`
                              : value && typeof value === "object"
                              ? `{ … ${Object.keys(value).length} field${
                                  Object.keys(value).length !== 1 ? "s" : ""
                                } }`
                              : typeof value === "string"
                              ? `"${value.length > 40 ? value.slice(0, 40) + "…" : value}"`
                              : String(value)}
                          </span>
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden pl-5"
                          >
                            <div className="py-1">{renderValue(value, 1)}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {idx < entries.length - 1 && (
                        <span className="block pl-5 text-neutral-700 dark:text-neutral-300">,</span>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
              <span className="text-neutral-700 dark:text-neutral-300">{"}"}</span>
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
