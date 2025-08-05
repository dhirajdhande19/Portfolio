import { MoveRight, ChevronDown } from "lucide-react";
import StarBG from "./StarBG";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative text-center flex flex-col items-center">
      <StarBG />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold pb-0 md:text-6xl"
      >
        <h1 className="mt-[85%] md:mt-40">
          Hi, I'm <br />
          <span className="text-[#8729B5]">Dhiraj Dhande</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 pt-2"
      >
        <h2 className="text-xl md:text-2xl">
          <span className="text-[#71189E] font-semibold">
            Fullstack Developer{" "}
          </span>
          | Debugging my destiny
        </h2>
      </motion.div>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="flex border-2 rounded-4xl p-1 gap-3 pl-4 pr-4 md:mt-10">
          <p>View my work</p>
          <MoveRight />
        </div>
      </motion.a>

      <motion.div
        animate={{ y: [0, -20, 0] }} // move up, then back to original
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="mt-60 border-2 rounded-4xl p-2 mb-45 md:mt-40"
      >
        <a href="#about">
          {" "}
          <ChevronDown size={27} />
        </a>
      </motion.div>
    </div>
  );
}
