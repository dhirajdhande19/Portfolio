import { motion } from "framer-motion";
import LinksTab from "./LinksTab";

export default function ProjectTab({
  num,
  projectName,
  desc,
  img,
  techStack,
  githubLink,
  siteLink,
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // delay between each chip
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Project Title & Description */}
      <div>
        <h3 className="text-xl mb-2 md:text-2xl font-semibold">
          00
          <span className="text-[#71189E] font-semibold">
            {num}. {projectName}
          </span>
        </h3>
        <p className="md:text-xl">
          <span className="text-[#71189E] font-semibold">{projectName}</span> -{" "}
          {desc}
        </p>
      </div>

      {/* Image & Number Block */}
      <div className="flex flex-row flex-wrap items-center text-center gap-2 md:gap-10 p-2 m-2 md:mb-10 md:mt-10">
        <img
          src={img}
          className="object-cover h-40 rounded-xl md:h-75 lg:h-110 xl:h-150"
        />
        <motion.h3
          className="font-semibold text-xl md:text-2xl"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          00<span className="text-[#71189E]">{num}</span>
        </motion.h3>
      </div>

      {/* Tech Stack & Links */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Tech stack buttons */}
        <div className="flex flex-row flex-wrap mb-2 mt-2">
          <motion.div
            className="flex flex-row flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                variants={chipVariants}
                whileHover={{ scale: 1.05 }}
                className="p-1 pr-4 pl-4 m-1 rounded-3xl bg-[#4A187F] cursor-pointer hover:bg-[#7e45ba]"
                transition={{ type: "spring", stiffness: 200 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Project Links */}
        <div className="flex flex-row justify-center items-center gap-10">
          <LinksTab githubLink={githubLink} siteLink={siteLink} />
        </div>
      </motion.div>
    </motion.div>
  );
}
