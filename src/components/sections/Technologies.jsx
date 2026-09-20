import {
    SiPython,
    SiJavascript,
    SiGnubash,
    SiGooglecloud,
    SiGooglebigquery,
    SiGooglecloudcomposer,
    SiGooglegemini,
    SiAmazon,
    SiAmazons3,
    SiAwslambda,
    SiAmazonredshift,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiDbt,
    SiOpenai,
    SiTensorflow,
    SiPytorch,
    SiDocker,
    SiGit,
    SiGitlab,
    SiGithubactions,
    SiLooker,
    SiTableau,
    SiStreamlit,
    SiPostgresql,
    SiMysql,
    SiSap,
} from "react-icons/si";
import { TbSql, TbBrandAzure } from "react-icons/tb";
import { motion } from "framer-motion";
import SectionWatermark from "../ui/SectionWatermark";

const PowerBiIcon = (props) => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true" {...props}>
        <rect x="3" y="12" width="4" height="9" rx="1" opacity="0.55" />
        <rect x="10" y="7" width="4" height="14" rx="1" opacity="0.8" />
        <rect x="17" y="2" width="4" height="19" rx="1" />
    </svg>
);

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
    { Icon: SiPython, color: "text-yellow-500 dark:text-yellow-400", duration: 2.5, label: "Python", glow: "shadow-yellow-400/40" },
    { Icon: TbSql, color: "text-sky-600 dark:text-sky-400", duration: 3.1, label: "SQL", glow: "shadow-sky-400/40" },
    { Icon: SiGnubash, color: "text-neutral-800 dark:text-neutral-200", duration: 3.8, label: "Shell Scripting", glow: "shadow-neutral-300/40" },
    { Icon: SiJavascript, color: "text-yellow-500 dark:text-yellow-300", duration: 3.2, label: "JavaScript", glow: "shadow-yellow-300/40" },
    { Icon: SiGooglecloud, color: "text-blue-500 dark:text-blue-400", duration: 2.0, label: "Google Cloud", glow: "shadow-blue-400/40" },
    { Icon: SiGooglebigquery, color: "text-blue-600 dark:text-blue-500", duration: 3.5, label: "BigQuery", glow: "shadow-blue-500/40" },
    { Icon: SiGooglecloudcomposer, color: "text-sky-500 dark:text-sky-400", duration: 2.9, label: "Cloud Composer", glow: "shadow-sky-400/40" },
    { Icon: SiAmazon, color: "text-orange-500 dark:text-orange-400", duration: 4.0, label: "AWS", glow: "shadow-orange-400/40" },
    { Icon: SiAmazons3, color: "text-green-600 dark:text-green-500", duration: 3.3, label: "Amazon S3", glow: "shadow-green-500/40" },
    { Icon: SiAwslambda, color: "text-orange-500 dark:text-orange-400", duration: 2.7, label: "AWS Lambda", glow: "shadow-orange-400/40" },
    { Icon: SiAmazonredshift, color: "text-violet-600 dark:text-violet-400", duration: 4.1, label: "Redshift", glow: "shadow-violet-400/40" },
    { Icon: TbBrandAzure, color: "text-sky-600 dark:text-sky-400", duration: 3.6, label: "Azure", glow: "shadow-sky-400/40" },
    { Icon: SiSnowflake, color: "text-cyan-500 dark:text-cyan-300", duration: 2.4, label: "Snowflake", glow: "shadow-cyan-400/40" },
    { Icon: SiApacheairflow, color: "text-sky-600 dark:text-sky-500", duration: 2.5, label: "Airflow", glow: "shadow-sky-500/40" },
    { Icon: SiDbt, color: "text-orange-500 dark:text-orange-400", duration: 3.6, label: "dbt", glow: "shadow-orange-400/40" },
    { Icon: SiApachekafka, color: "text-neutral-700 dark:text-neutral-200", duration: 5.0, label: "Kafka", glow: "shadow-neutral-300/40" },
    { Icon: SiGooglegemini, color: "text-indigo-500 dark:text-indigo-400", duration: 3.0, label: "Gemini", glow: "shadow-indigo-400/40" },
    { Icon: SiOpenai, color: "text-neutral-800 dark:text-neutral-200", duration: 3.9, label: "OpenAI", glow: "shadow-neutral-300/40" },
    { Icon: SiTensorflow, color: "text-orange-600 dark:text-orange-500", duration: 3.0, label: "TensorFlow", glow: "shadow-orange-500/40" },
    { Icon: SiPytorch, color: "text-orange-500 dark:text-orange-400", duration: 2.5, label: "PyTorch", glow: "shadow-orange-400/40" },
    { Icon: SiDocker, color: "text-blue-500 dark:text-blue-400", duration: 3.0, label: "Docker", glow: "shadow-blue-400/40" },
    { Icon: SiGit, color: "text-orange-700 dark:text-orange-600", duration: 3.0, label: "Git", glow: "shadow-orange-600/40" },
    { Icon: SiGitlab, color: "text-orange-600 dark:text-orange-500", duration: 4.0, label: "GitLab", glow: "shadow-orange-500/40" },
    { Icon: SiGithubactions, color: "text-blue-600 dark:text-blue-400", duration: 3.4, label: "GitHub Actions", glow: "shadow-blue-400/40" },
    { Icon: SiLooker, color: "text-fuchsia-600 dark:text-fuchsia-400", duration: 3.6, label: "Looker", glow: "shadow-fuchsia-400/40" },
    { Icon: SiTableau, color: "text-blue-500 dark:text-blue-400", duration: 2.8, label: "Tableau", glow: "shadow-blue-400/40" },
    { Icon: PowerBiIcon, color: "text-yellow-500 dark:text-yellow-400", duration: 3.2, label: "Power BI", glow: "shadow-yellow-400/40" },
    { Icon: SiStreamlit, color: "text-red-500 dark:text-red-400", duration: 2.6, label: "Streamlit", glow: "shadow-red-400/40" },
    { Icon: SiPostgresql, color: "text-sky-700", duration: 4.0, label: "PostgreSQL", glow: "shadow-sky-700/40" },
    { Icon: SiMysql, color: "text-blue-600 dark:text-blue-500", duration: 2.0, label: "MySQL", glow: "shadow-blue-500/40" },
    { Icon: SiSap, color: "text-blue-600 dark:text-blue-400", duration: 4.2, label: "SAP", glow: "shadow-blue-500/40" },
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
    <section id="technologies" className="relative pb-24 pt-16 scroll-mt-24">
        <SectionWatermark>Tech</SectionWatermark>
        <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="my-12 text-center text-4xl text-neutral-900 dark:text-neutral-100">Technologies</motion.h2>

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
                    className={`group relative rounded-2xl border-4 border-neutral-200 bg-white/40 p-4 backdrop-blur-sm transition-shadow duration-300 hover:border-neutral-300 hover:shadow-2xl dark:border-neutral-800 dark:bg-transparent dark:hover:border-neutral-700 ${glow}`}
                >
                    <motion.div
                        variants={iconVariants(duration)}
                        initial="initial"
                        animate="animate"
                    >
                        <Icon className={`text-7xl ${color}`} />
                    </motion.div>
                    <span className="pointer-events-none absolute inset-x-0 -bottom-7 mx-auto text-center text-xs font-medium text-neutral-700 opacity-0 transition-all duration-300 group-hover:-bottom-6 group-hover:opacity-100 dark:text-neutral-300">
                        {label}
                    </span>
                </motion.div>
            ))}
        </motion.div>
    </section>
  )
}

export default Technologies
