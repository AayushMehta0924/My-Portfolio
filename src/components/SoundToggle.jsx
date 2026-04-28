import { motion, AnimatePresence } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { useSound } from "../context/SoundContext";

const SoundToggle = () => {
  const { enabled, toggle } = useSound();

  return (
    <button
      onClick={toggle}
      aria-label={enabled ? "Mute sounds" : "Enable sounds"}
      title={enabled ? "Mute sounds" : "Enable sounds"}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-neutral-300 bg-white/40 text-base text-neutral-800 backdrop-blur transition-colors hover:border-cyan-500/60 hover:text-cyan-600 dark:border-neutral-700/60 dark:bg-neutral-900/40 dark:text-neutral-200 dark:hover:border-cyan-400/60 dark:hover:text-cyan-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={enabled ? "on" : "off"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 grid place-items-center"
        >
          {enabled ? <FiVolume2 /> : <FiVolumeX />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default SoundToggle;
