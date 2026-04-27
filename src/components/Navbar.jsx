import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/AM.svg";
import { SOCIAL_LINKS } from "../constants";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "technologies", label: "Tech" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "border-b border-neutral-800/60 bg-neutral-950/60 backdrop-blur-xl dark:bg-neutral-950/60 light:bg-white/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <a href="#top" className="flex flex-shrink-0 items-center gap-2 group">
          <img className="w-9 transition-transform duration-500 group-hover:rotate-[360deg]" src={logo} alt="logo" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="relative px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white dark:text-neutral-300"
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 text-xl text-neutral-300 md:flex">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-all duration-300 hover:scale-110 hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-all duration-300 hover:scale-110 hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-all duration-300 hover:scale-110 hover:text-cyan-400">
              <FaInstagram />
            </a>
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="transition-all duration-300 hover:scale-110 hover:text-cyan-400">
              <FaSquareXTwitter />
            </a>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-neutral-700/60 bg-neutral-900/40 text-lg text-neutral-200 backdrop-blur md:hidden"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-neutral-800/60 bg-neutral-950/80 backdrop-blur-xl md:hidden"
          >
            <ul className="container mx-auto flex flex-col gap-1 px-8 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800/60 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-4 px-3 pt-2 text-xl text-neutral-300">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"><FaSquareXTwitter /></a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
