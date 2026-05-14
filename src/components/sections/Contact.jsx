import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiArrowUpRight } from "react-icons/fi";
import { CONTACT } from "../../constants";
import SectionWatermark from "../ui/SectionWatermark";
import MagneticButton from "../ui/MagneticButton";

const item = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Contact = () => {
  return (
    <section id="contact" className="relative pb-20 pt-16 scroll-mt-24">
      <SectionWatermark>Hello</SectionWatermark>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="my-10 text-center text-4xl text-neutral-900 dark:text-neutral-100"
      >
        Get in Touch
      </motion.h2>

      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 px-4 sm:grid-cols-3">
        <motion.div
          {...item(0)}
          className="flex flex-col items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:hover:border-cyan-400/40"
        >
          <FiMapPin className="text-2xl text-cyan-600 dark:text-cyan-300" />
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{CONTACT.address}</p>
        </motion.div>

        <motion.a
          {...item(0.1)}
          href={`tel:${CONTACT.phoneNo.replace(/\s+/g, "")}`}
          className="flex flex-col items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:hover:border-purple-400/40"
        >
          <FiPhone className="text-2xl text-purple-600 dark:text-purple-300" />
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{CONTACT.phoneNo}</p>
        </motion.a>

        <motion.a
          {...item(0.2)}
          href={`mailto:${CONTACT.email}`}
          className="flex flex-col items-center gap-2 rounded-xl border border-neutral-200 bg-white/70 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 dark:border-neutral-800/70 dark:bg-neutral-950/40 dark:hover:border-pink-400/40"
        >
          <FiMail className="text-2xl text-pink-600 dark:text-pink-300" />
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{CONTACT.email}</p>
        </motion.a>
      </div>

      <motion.div {...item(0.3)} className="mt-10 flex justify-center">
        <MagneticButton
          as="a"
          href={`mailto:${CONTACT.email}`}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-shadow duration-300 hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.6)]"
        >
          Say hello
          <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </MagneticButton>
      </motion.div>

    </section>
  );
};

export default Contact;
