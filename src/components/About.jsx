import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      className="bg-[#1b0426] flex flex-col items-center p-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="p-3 ml-13 mr-14 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mt-8">
          About <span className="text-[#8729B5]">Me</span>
        </h1>
        <h3>Code today, conquer tomorrow (once the tests pass)</h3>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row p-4 m-6 items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="place-content-center flex p-2 m-3 mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            className="rounded-2xl object-cover h-60 w-60 md:h-80 md:w-250 lg:w-110"
            src="pfp-img.jpg"
            alt="profile picture"
          />
        </motion.div>

        <motion.div
          className="p-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-[#8729B5] font-bold mb-4 text-xl">
            Hello there! 🤞😁
          </h4>
          <p>
            <span className="text-[#8729B5] font-bold">I'm Dhiraj</span>{" "}
            <span className="text-[#71189E] font-semibold">
              - an aspiring full-stack developer !
            </span>
            <br />
            who's constantly chasing clean code, better logic, and the
            occasional missing semicolon. <br />
            <br />
            I'm passionate about building modern web apps that are not just
            functional, but also fun to use. From debugging late-night errors to
            learning new frameworks on the fly, I enjoy the chaos and creativity
            that come with tech. <br />
            <br />
            I've been sharpening my skills in frontend and backend development,
            solving DSA problems (and occasionally creating some), and working
            on projects that help me grow. <br />
            <br />
            Whether it's JavaScript, Express, or caffeine — I'm always ready to
            ship code and learn something new along the way.{" "}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
