import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const SoundContext = createContext({ enabled: false, toggle: () => {} });

export const SoundProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("sound-enabled") === "1";
  });
  const ctxRef = useRef(null);
  const lastPlayed = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("sound-enabled", enabled ? "1" : "0");
  }, [enabled]);

  const ensureCtx = () => {
    if (!ctxRef.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      ctxRef.current = new Ctx();
    }
    return ctxRef.current;
  };

  const play = useCallback(
    (kind = "click") => {
      if (!enabled) return;
      const ctx = ensureCtx();
      if (!ctx) return;
      const now = ctx.currentTime;
      if (now - lastPlayed.current < 0.04) return;
      lastPlayed.current = now;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const freq = kind === "hover" ? 880 : kind === "toggle" ? 660 : 1320;
      const peak = kind === "hover" ? 0.04 : 0.08;
      const dur = kind === "hover" ? 0.06 : 0.09;

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.6, now + dur);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peak, now + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

      osc.connect(gain).connect(ctx.destination);
      osc.start(now);
      osc.stop(now + dur + 0.01);
    },
    [enabled]
  );

  useEffect(() => {
    if (!enabled) return;
    const onClick = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest("a, button, [role='button']")) play("click");
    };
    const onHover = (e) => {
      const t = e.target;
      if (t && t.closest && t.closest("a, button, [role='button']")) play("hover");
    };
    document.addEventListener("click", onClick);
    document.addEventListener("pointerenter", onHover, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("pointerenter", onHover, true);
    };
  }, [enabled, play]);

  const toggle = () => {
    setEnabled((v) => {
      const next = !v;
      if (next) {
        const ctx = ensureCtx();
        if (ctx && ctx.state === "suspended") ctx.resume();
      }
      return next;
    });
  };

  return (
    <SoundContext.Provider value={{ enabled, toggle, play }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => useContext(SoundContext);
