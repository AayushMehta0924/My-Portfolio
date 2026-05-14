import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../layout/Logo";

const LoadingSplash = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.sessionStorage.getItem("splash-shown")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      window.sessionStorage.setItem("splash-shown", "1");
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[200] grid place-items-center bg-white dark:bg-neutral-950"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo className="h-20 w-20" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-xs uppercase tracking-[0.4em] text-neutral-500"
            >
              loading
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingSplash;
