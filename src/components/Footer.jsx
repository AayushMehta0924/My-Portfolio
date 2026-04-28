import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BASE_VISITS = 1247;

const VisitCounter = () => {
  const [count, setCount] = useState(BASE_VISITS);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = parseInt(window.localStorage.getItem("visit-count") || "0", 10);
    const next = (isNaN(stored) ? 0 : stored) + 1;
    window.localStorage.setItem("visit-count", String(next));
    setCount(BASE_VISITS + next);
  }, []);

  const digits = String(count).padStart(7, "0").split("");

  return (
    <div className="inline-flex items-center gap-2 text-xs text-neutral-500">
      <span className="uppercase tracking-widest">visitor</span>
      <div className="flex overflow-hidden rounded-md border border-neutral-300 bg-neutral-900 dark:border-neutral-700">
        {digits.map((d, i) => (
          <motion.span
            key={`${i}-${d}`}
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid h-6 w-5 place-items-center border-r border-neutral-700 font-mono text-[13px] font-semibold text-emerald-400 last:border-r-0"
          >
            {d}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 bg-white/60 py-8 backdrop-blur-sm dark:border-neutral-900 dark:bg-neutral-950/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 text-xs text-neutral-500 sm:flex-row">
        <p>© {year} Aayush Mehta · built with React + Framer Motion</p>
        <VisitCounter />
      </div>
    </footer>
  );
};

export default Footer;
