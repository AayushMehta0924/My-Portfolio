import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAMESPACE = "aayushmehta-portfolio";
const KEY = "visits";
const CACHE_KEY = "visit-count-cache";
const COUNTED_KEY = "visit-counted-browser";

const fetchCount = async (shouldIncrement) => {
  const path = shouldIncrement ? "hit" : "get";
  const res = await fetch(`https://abacus.jasoncameron.dev/${path}/${NAMESPACE}/${KEY}`);
  if (!res.ok) throw new Error("counter unavailable");
  const data = await res.json();
  if (typeof data.value !== "number") throw new Error("bad payload");
  return data.value;
};

const VisitCounter = () => {
  const [count, setCount] = useState(() => {
    if (typeof window === "undefined") return null;
    const cached = parseInt(window.localStorage.getItem(CACHE_KEY) || "", 10);
    return Number.isFinite(cached) && cached > 0 ? cached : null;
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const counted = window.localStorage.getItem(COUNTED_KEY) === "1";
    let cancelled = false;
    fetchCount(!counted)
      .then((n) => {
        if (cancelled) return;
        setCount(n);
        window.localStorage.setItem(CACHE_KEY, String(n));
        if (!counted) window.localStorage.setItem(COUNTED_KEY, "1");
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const digits = (count == null ? "      0" : String(count).padStart(7, "0")).split("");

  return (
    <div className="inline-flex items-center gap-2 text-xs text-neutral-500">
      <span className="uppercase tracking-widest">visitors</span>
      <div className="flex overflow-hidden rounded-md border border-neutral-300 bg-neutral-900 dark:border-neutral-700">
        <AnimatePresence initial={false} mode="popLayout">
          {digits.map((d, i) => (
            <motion.span
              key={`${i}-${d}`}
              initial={{ y: -14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 14, opacity: 0 }}
              transition={{ delay: i * 0.025, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid h-6 w-5 place-items-center border-r border-neutral-700 font-mono text-[13px] font-semibold text-emerald-400 last:border-r-0"
            >
              {d === " " ? "·" : d}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
      {error && count == null && (
        <span className="text-neutral-600" title="Counter service unreachable">offline</span>
      )}
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
