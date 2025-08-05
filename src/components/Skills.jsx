import { motion } from "framer-motion";
import LogoTab from "./LogoTab";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <motion.div
      id="skills"
      className="p-2 mt-20 text-center mb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="font-bold text-4xl mb-1">
          Tech <span className="text-[#8729B5]">Stack</span>
        </h1>
        <h3>Tools That Keep Me Sane</h3>
      </motion.div>

      <motion.div
        className="flex flex-row flex-wrap justify-center gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          ["java.svg", "Java"],
          ["html.svg", "HTML"],
          ["css.svg", "CSS"],
          ["js.svg", "JavaScript"],
          ["react.svg", "React"],
          ["node-js.svg", "Node.js"],
          ["express2.svg", "Express.js"],
          ["mongodb.svg", "MongoDB"],
          ["tailwind.svg", "Tailwind CSS"],
          ["figma.svg", "Figma"],
          ["git.svg", "Git"],
          ["github.svg", "GitHub"],
          ["vercel.svg", "Vercel"],
          ["render.jpg", "Render"],
        ].map(([src, name], index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
          >
            <LogoTab src={src} name={name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
