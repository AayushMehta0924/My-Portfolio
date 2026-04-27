import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, [role='button'], [data-cursor-hover]";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 700, damping: 35, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 700, damping: 35, mass: 0.4 });
  const ringX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-on");

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (hidden) setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);
    const onOver = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest(HOVER_SELECTOR)) setHovering(true);
    };
    const onOut = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest(HOVER_SELECTOR)) setHovering(false);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerenter", onEnter);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerout", onOut);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerenter", onEnter);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.classList.remove("custom-cursor-on");
    };
  }, [x, y, hidden]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: pressed ? 0.6 : hovering ? 0.4 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-white mix-blend-difference"
      />
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: pressed ? 0.85 : hovering ? 1.8 : 1,
          opacity: hidden ? 0 : hovering ? 0.55 : 0.3,
          borderWidth: hovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-white mix-blend-difference"
      />
    </>
  );
};

export default CustomCursor;
