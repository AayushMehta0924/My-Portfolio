const SectionWatermark = ({ children }) => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 -z-10 flex justify-center overflow-hidden"
  >
    <span className="sticky top-24 select-none self-start whitespace-nowrap text-[18vw] font-black uppercase leading-[0.85] tracking-tighter text-neutral-900/[0.045] dark:text-white/[0.045] sm:text-[14vw]">
      {children}
    </span>
  </div>
);

export default SectionWatermark;
