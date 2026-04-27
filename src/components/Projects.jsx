import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS } from "../constants";

const TiltCard = ({ project, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950/40 p-1 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_60px_-20px_rgba(168,85,247,0.45)]"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(168,85,247,0.15), transparent 60%)",
        }}
      />
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition-transform duration-500 ease-out-expo group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-300 group-hover:translate-y-0">
          <h6 className="text-lg font-semibold text-neutral-100">{project.title}</h6>
        </div>
      </div>
      <div className="p-5">
        <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 pb-12 pt-16 scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="my-12 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <TiltCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
