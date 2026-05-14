import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticButton = ({
  as: Tag = "button",
  children,
  className = "",
  strength = 0.35,
  radius = 90,
  ...rest
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius + Math.max(rect.width, rect.height) / 2) {
        x.set(dx * strength);
        y.set(dy * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    const onLeave = () => {
      x.set(0);
      y.set(0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength, radius, x, y]);

  const MotionTag = motion[Tag] || motion.button;

  return (
    <MotionTag ref={ref} style={{ x: sx, y: sy }} className={className} {...rest}>
      {children}
    </MotionTag>
  );
};

export default MagneticButton;
