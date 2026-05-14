import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import MagneticButton from "./MagneticButton";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 45 }}
          transition={{ type: "spring", stiffness: 240, damping: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <span className="relative">
            <span className="absolute inset-0 animate-ping rounded-full bg-purple-500/30" />
            <MagneticButton
              as="button"
              onClick={onClick}
              aria-label="Back to top"
              className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-white shadow-[0_8px_30px_rgba(168,85,247,0.45)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(168,85,247,0.65)]"
            >
              <FiArrowUp className="text-xl" />
            </MagneticButton>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
