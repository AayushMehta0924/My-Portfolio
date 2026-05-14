import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMenu, FiX, FiSun, FiMoon, FiVolume2, FiVolumeX, FiDownload, FiTerminal } from "react-icons/fi";
import { SOCIAL_LINKS } from "../../constants";
import { useTheme } from "../../context/ThemeContext";
import { useSound } from "../../context/SoundContext";

const RADIUS = 130;
const START_ANGLE = 90;   // south (straight down)
const END_ANGLE = 180;    // west (straight left)

const positionFor = (i, total) => {
  const t = total <= 1 ? 0 : i / (total - 1);
  const angle = START_ANGLE + (END_ANGLE - START_ANGLE) * t;
  const rad = (angle * Math.PI) / 180;
  return {
    x: Math.cos(rad) * RADIUS,
    y: Math.sin(rad) * RADIUS,
  };
};

const openTerminalEvent = () => {
  window.dispatchEvent(new CustomEvent("open-prompt-bar"));
};

const Hamburger = () => {
  const { theme, toggle: toggleTheme } = useTheme();
  const { enabled: soundOn, toggle: toggleSound } = useSound();
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const onEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const onLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 300);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const items = [
    {
      key: "linkedin",
      label: "LinkedIn",
      Icon: FaLinkedin,
      ring: "ring-cyan-400/40 hover:text-cyan-500 dark:hover:text-cyan-300",
      action: { href: SOCIAL_LINKS.linkedin, target: "_blank", rel: "noopener noreferrer" },
    },
    {
      key: "github",
      label: "GitHub",
      Icon: FaGithub,
      ring: "ring-neutral-400/40 hover:text-neutral-900 dark:hover:text-white",
      action: { href: SOCIAL_LINKS.github, target: "_blank", rel: "noopener noreferrer" },
    },
    {
      key: "terminal",
      label: "Terminal",
      Icon: FiTerminal,
      ring: "ring-emerald-400/40 hover:text-emerald-600 dark:hover:text-emerald-300",
      action: {
        onClick: () => {
          openTerminalEvent();
          setOpen(false);
        },
      },
    },
    {
      key: "resume",
      label: "Download résumé",
      Icon: FiDownload,
      ring: "ring-cyan-400/40 hover:text-cyan-600 dark:hover:text-cyan-300",
      action: {
        href: "/Aayush_Resume.pdf",
        download: "Aayush_Mehta_Resume.pdf",
      },
    },
    {
      key: "sound",
      label: soundOn ? "Mute sounds" : "Enable sounds",
      Icon: soundOn ? FiVolume2 : FiVolumeX,
      ring: "ring-purple-400/40 hover:text-purple-600 dark:hover:text-purple-300",
      action: {
        onClick: () => toggleSound(),
      },
    },
    {
      key: "theme",
      label: theme === "dark" ? "Switch to light" : "Switch to dark",
      Icon: theme === "dark" ? FiMoon : FiSun,
      ring: "ring-yellow-400/40 hover:text-yellow-600 dark:hover:text-yellow-300",
      action: {
        onClick: () => toggleTheme(),
      },
    },
  ];

  return (
    <div
      className="relative"
      style={{ width: 40, height: 40 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* invisible hover bridge covering the whole radial area so cursor can travel without breaking hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          right: -10,
          top: -10,
          width: RADIUS + 80,
          height: RADIUS + 80,
        }}
      />
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="relative z-20 grid h-10 w-10 place-items-center rounded-full border border-neutral-300 bg-white/70 text-lg text-neutral-800 backdrop-blur transition-colors hover:border-cyan-500/60 hover:text-cyan-600 dark:border-neutral-700/70 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 grid place-items-center"
          >
            {open ? <FiX /> : <FiMenu />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* faint backdrop ring around the radial */}
            <motion.div
              key="halo"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute z-0"
              style={{
                top: -RADIUS,
                left: -RADIUS,
                width: RADIUS * 2 + 40,
                height: RADIUS * 2 + 40,
                background:
                  "radial-gradient(circle at center, rgba(168,85,247,0.10), transparent 60%)",
              }}
            />
            {items.map((item, i) => {
              const { x, y } = positionFor(i, items.length);
              const Tag = item.action?.href ? motion.a : motion.button;
              return (
                <Tag
                  key={item.key}
                  {...(item.action || {})}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  aria-label={item.label}
                  title={item.label}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                  animate={{ x, y, opacity: 1, scale: 1 }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0.4, transition: { delay: (items.length - 1 - i) * 0.025 } }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 22,
                    delay: i * 0.04,
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  className={`absolute right-0 top-0 z-10 grid h-11 w-11 place-items-center rounded-full border border-neutral-200 bg-white/85 text-lg text-neutral-700 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] ring-2 ring-transparent backdrop-blur transition-colors dark:border-neutral-700 dark:bg-neutral-900/85 dark:text-neutral-200 ${item.ring}`}
                >
                  <item.Icon />
                </Tag>
              );
            })}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hamburger;
