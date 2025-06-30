import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="border-b border-neutral-900 pb-10 px-4 sm:px-6 md:px-10"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="my-14 text-center text-3xl sm:text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <div className="flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-10 flex w-full max-w-5xl flex-col gap-4 rounded-xl border border-neutral-800 p-4 sm:flex-row sm:items-start transition-all duration-300"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              width={150}
              height={150}
              className="mx-auto sm:mx-0 rounded-lg shadow-md w-[150px] h-[150px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            <div className="flex flex-col justify-center text-center sm:text-left">
              <h6 className="mb-2 text-xl font-semibold text-white">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
