import { motion } from "framer-motion";

export default function LinksTab({ githubLink, siteLink }) {
  return (
    <>
      <motion.div
        className="p-2 pl-4 pr-4  rounded-3xl bg-[#4A187F] hover:bg-[#7e45ba]"
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
      >
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 flex-row text-center"
        >
          <p>GitHub</p>
          <img src="github.svg" alt="GitHub" width={25} />
        </a>
      </motion.div>

      <motion.div
        className=" p-2 pl-4 pr-4 rounded-3xl bg-[#4A187F] hover:bg-[#7e45ba]"
        transition={{ type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
      >
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 flex-row text-center"
        >
          <p>Website</p>
          <img src="website.svg" alt="GitHub" width={25} />
        </a>
      </motion.div>
    </>
  );
}
