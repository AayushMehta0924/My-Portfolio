import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "technologies", label: "Tech" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SectionDots = () => {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-3">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-label={`Go to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center gap-3"
              >
                <motion.span
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 8 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded bg-neutral-900/80 px-2 py-0.5 text-xs font-medium text-white shadow-md backdrop-blur dark:bg-white/85 dark:text-neutral-900"
                >
                  {s.label}
                </motion.span>
                <motion.span
                  initial={false}
                  animate={{
                    width: isActive ? 24 : 8,
                    backgroundColor: isActive ? "rgb(168 85 247)" : "rgba(115,115,115,0.55)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="block h-2 rounded-full"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionDots;
