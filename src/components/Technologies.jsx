import {
    SiPython,
    SiJavascript,
    SiGooglecloud,
    SiAmazon,
    SiGooglebigquery,
    SiApacheairflow,
    SiApachekafka,
    SiDocker,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiTensorflow,
    SiPytorch,
    SiPandas,
    SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const TECHS = [
    { Icon: SiPython, color: "text-yellow-400", duration: 2.5, label: "Python" },
    { Icon: SiJavascript, color: "text-yellow-300", duration: 3, label: "JavaScript" },
    { Icon: SiGooglecloud, color: "text-blue-400", duration: 2, label: "Google Cloud" },
    { Icon: SiAmazon, color: "text-orange-400", duration: 4, label: "AWS" },
    { Icon: SiGooglebigquery, color: "text-blue-500", duration: 3.5, label: "BigQuery" },
    { Icon: SiApacheairflow, color: "text-sky-500", duration: 2.5, label: "Airflow" },
    { Icon: SiApachekafka, color: "text-neutral-200", duration: 5, label: "Kafka" },
    { Icon: SiDocker, color: "text-blue-400", duration: 3, label: "Docker" },
    { Icon: SiPostgresql, color: "text-sky-700", duration: 4, label: "PostgreSQL" },
    { Icon: SiMysql, color: "text-blue-500", duration: 2, label: "MySQL" },
    { Icon: SiMongodb, color: "text-green-500", duration: 5, label: "MongoDB" },
    { Icon: SiTensorflow, color: "text-orange-500", duration: 3, label: "TensorFlow" },
    { Icon: SiPytorch, color: "text-orange-400", duration: 2.5, label: "PyTorch" },
    { Icon: SiPandas, color: "text-purple-400", duration: 4, label: "Pandas" },
    { Icon: SiGit, color: "text-orange-600", duration: 3, label: "Git" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            {TECHS.map(({ Icon, color, duration, label }) => (
                <motion.div
                    key={label}
                    variants={iconVariants(duration)}
                    initial="initial"
                    animate="animate"
                    title={label}
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <Icon className={`text-7xl ${color}`} />
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Technologies
