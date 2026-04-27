import {
    SiPython,
    SiJavascript,
    SiGooglecloud,
    SiAmazon,
    SiGooglebigquery,
    SiApacheairflow,
    SiApachekafka,
    SiApachespark,
    SiDocker,
    SiKubernetes,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiNeo4J,
    SiTensorflow,
    SiPytorch,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiDbt,
    SiLooker,
    SiTableau,
    SiGit,
    SiGitlab,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -8 },
    animate: {
        y: [8, -8],
        transition: {
            duration: duration,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const TECHS = [
    { Icon: SiPython, color: "text-yellow-400", duration: 2.5, label: "Python", glow: "shadow-yellow-400/40" },
    { Icon: SiJavascript, color: "text-yellow-300", duration: 3.2, label: "JavaScript", glow: "shadow-yellow-300/40" },
    { Icon: SiGooglecloud, color: "text-blue-400", duration: 2.0, label: "Google Cloud", glow: "shadow-blue-400/40" },
    { Icon: SiAmazon, color: "text-orange-400", duration: 4.0, label: "AWS", glow: "shadow-orange-400/40" },
    { Icon: SiGooglebigquery, color: "text-blue-500", duration: 3.5, label: "BigQuery", glow: "shadow-blue-500/40" },
    { Icon: SiApacheairflow, color: "text-sky-500", duration: 2.5, label: "Airflow", glow: "shadow-sky-500/40" },
    { Icon: SiApachekafka, color: "text-neutral-200", duration: 5.0, label: "Kafka", glow: "shadow-neutral-300/40" },
    { Icon: SiApachespark, color: "text-orange-500", duration: 2.8, label: "Spark", glow: "shadow-orange-500/40" },
    { Icon: SiDbt, color: "text-orange-400", duration: 3.6, label: "dbt", glow: "shadow-orange-400/40" },
    { Icon: SiDocker, color: "text-blue-400", duration: 3.0, label: "Docker", glow: "shadow-blue-400/40" },
    { Icon: SiKubernetes, color: "text-blue-500", duration: 4.2, label: "Kubernetes", glow: "shadow-blue-500/40" },
    { Icon: SiPostgresql, color: "text-sky-700", duration: 4.0, label: "PostgreSQL", glow: "shadow-sky-700/40" },
    { Icon: SiMysql, color: "text-blue-500", duration: 2.0, label: "MySQL", glow: "shadow-blue-500/40" },
    { Icon: SiMongodb, color: "text-green-500", duration: 5.0, label: "MongoDB", glow: "shadow-green-500/40" },
    { Icon: SiRedis, color: "text-red-500", duration: 3.4, label: "Redis", glow: "shadow-red-500/40" },
    { Icon: SiNeo4J, color: "text-cyan-400", duration: 3.8, label: "Neo4j", glow: "shadow-cyan-400/40" },
    { Icon: SiTensorflow, color: "text-orange-500", duration: 3.0, label: "TensorFlow", glow: "shadow-orange-500/40" },
    { Icon: SiPytorch, color: "text-orange-400", duration: 2.5, label: "PyTorch", glow: "shadow-orange-400/40" },
    { Icon: SiScikitlearn, color: "text-blue-400", duration: 4.4, label: "scikit-learn", glow: "shadow-blue-400/40" },
    { Icon: SiPandas, color: "text-purple-400", duration: 4.0, label: "Pandas", glow: "shadow-purple-400/40" },
    { Icon: SiNumpy, color: "text-sky-400", duration: 3.2, label: "NumPy", glow: "shadow-sky-400/40" },
    { Icon: SiLooker, color: "text-fuchsia-400", duration: 3.6, label: "Looker", glow: "shadow-fuchsia-400/40" },
    { Icon: SiTableau, color: "text-blue-400", duration: 2.8, label: "Tableau", glow: "shadow-blue-400/40" },
    { Icon: SiGit, color: "text-orange-600", duration: 3.0, label: "Git", glow: "shadow-orange-600/40" },
    { Icon: SiGitlab, color: "text-orange-500", duration: 4.0, label: "GitLab", glow: "shadow-orange-500/40" },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
};

const tileVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const Technologies = () => {
  return (
    <section id="technologies" className="border-b border-neutral-800 pb-24 pt-16 scroll-mt-24">
        <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="my-12 text-center text-4xl">Technologies</motion.h2>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4">
            {TECHS.map(({ Icon, color, duration, label, glow }) => (
                <motion.div
                    key={label}
                    variants={tileVariants}
                    whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                    className={`group relative rounded-2xl border-4 border-neutral-800 p-4 transition-shadow duration-300 hover:border-neutral-700 hover:shadow-2xl ${glow}`}
                >
                    <motion.div
                        variants={iconVariants(duration)}
                        initial="initial"
                        animate="animate"
                    >
                        <Icon className={`text-7xl ${color}`} />
                    </motion.div>
                    <span className="pointer-events-none absolute inset-x-0 -bottom-7 mx-auto text-center text-xs font-medium text-neutral-300 opacity-0 transition-all duration-300 group-hover:-bottom-6 group-hover:opacity-100">
                        {label}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default Technologies
