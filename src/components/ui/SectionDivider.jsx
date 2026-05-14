import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="my-2 flex justify-center" aria-hidden>
    <svg
      viewBox="0 0 800 30"
      preserveAspectRatio="none"
      className="h-6 w-full max-w-4xl"
    >
      <defs>
        <linearGradient id="div-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(244,114,182,0)" />
          <stop offset="50%" stopColor="rgba(168,85,247,0.5)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0)" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 15 Q 100 0 200 15 T 400 15 T 600 15 T 800 15"
        fill="none"
        stroke="url(#div-grad)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  </div>
);

export default SectionDivider;
