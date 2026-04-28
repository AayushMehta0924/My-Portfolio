import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Terminal from "./Terminal";

const HINTS = ["help", "whoami", "skills", "projects", "piano", "joke"];
const PROMPT = "aayush@portfolio:~$";

const PromptBar = () => {
  const [heroVisible, setHeroVisible] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [hintIdx, setHintIdx] = useState(0);
  const wrapRef = useRef(null);

  // observe Hero so we hide the bar once user has scrolled past it
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = document.getElementById("top");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // auto-collapse if user scrolls out of Hero while expanded
  useEffect(() => {
    if (!heroVisible && expanded) setExpanded(false);
  }, [heroVisible, expanded]);

  // listen for hamburger / global "open" events
  useEffect(() => {
    const onOpen = () => setExpanded(true);
    window.addEventListener("open-prompt-bar", onOpen);
    return () => window.removeEventListener("open-prompt-bar", onOpen);
  }, []);

  // click-outside to collapse
  useEffect(() => {
    if (!expanded) return;
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setExpanded(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [expanded]);

  // rotate the placeholder hint while collapsed
  useEffect(() => {
    if (expanded) return;
    const id = setInterval(() => setHintIdx((i) => (i + 1) % HINTS.length), 2200);
    return () => clearInterval(id);
  }, [expanded]);

  const visible = heroVisible || expanded;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={wrapRef}
          key="prompt-bar"
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-[68px] z-30 mx-auto w-full max-w-3xl px-4"
        >
          {!expanded ? (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              aria-label="Open terminal"
              className="group flex w-full items-center gap-3 rounded-full border border-neutral-300 bg-white/80 px-4 py-2 font-mono text-sm text-neutral-700 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] dark:border-neutral-800 dark:bg-neutral-950/70 dark:text-neutral-300 dark:hover:border-emerald-400/60"
            >
              <span className="text-emerald-600 dark:text-emerald-400">{PROMPT}</span>
              <span className="flex-1 truncate text-left text-neutral-500">
                <span className="opacity-60">try </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-200">
                  {`'${HINTS[hintIdx]}'`}
                </span>
              </span>
              <span className="hidden items-center gap-1 text-[10px] uppercase tracking-widest text-neutral-500 sm:flex">
                click to open
              </span>
              <span className="ml-1 inline-block h-4 w-[2px] animate-blink bg-emerald-500/80" aria-hidden />
            </button>
          ) : (
            <motion.div
              initial={{ scaleY: 0.85, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top center" }}
            >
              <Terminal onClose={() => setExpanded(false)} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromptBar;
