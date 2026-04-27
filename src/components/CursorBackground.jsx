import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const CursorBackground = () => {
  const { theme } = useTheme();
  const ref = useRef(null);

  useEffect(() => {
    let raf = 0;
    let pendingX = window.innerWidth / 2;
    let pendingY = -window.innerHeight * 0.2;

    const flush = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      el.style.setProperty("--cursor-x", `${pendingX}px`);
      el.style.setProperty("--cursor-y", `${pendingY}px`);
    };

    const onMove = (e) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!raf) raf = requestAnimationFrame(flush);
    };

    flush();
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const tint = theme === "dark"
    ? "rgba(120, 119, 198, 0.30)"
    : "rgba(56, 189, 248, 0.18)";
  const baseColor = theme === "dark" ? "#0a0a0a" : "#f8fafc";

  return (
    <div className="fixed inset-0 -z-10 h-full w-full" aria-hidden="true">
      <div
        ref={ref}
        className="absolute inset-0 transition-colors duration-700"
        style={{
          backgroundColor: baseColor,
          backgroundImage: `radial-gradient(600px circle at var(--cursor-x) var(--cursor-y), ${tint}, transparent 60%)`,
        }}
      />
    </div>
  );
};

export default CursorBackground;
