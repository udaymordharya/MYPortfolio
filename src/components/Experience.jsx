import { useState } from "react";
import { EXPERIENCES } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
  },
  tap: {
    scale: 0.98,
  },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContent = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const Experience = () => {
  const [selected, setSelected] = useState(null);

  const handleClose = () => setSelected(null);

  return (
    <motion.div
      className="border-b border-neutral-900 pb-10 px-4 sm:px-6 md:px-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-14 text-center text-3xl sm:text-4xl font-bold text-white">
        Experience
      </motion.h1>

      <div className="flex flex-col items-center">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setSelected(experience)}
            className="cursor-pointer mb-10 flex w-full max-w-5xl flex-col gap-4 rounded-xl border border-neutral-800 p-4 sm:flex-row sm:items-start transition-all duration-300"
          >
            <div className="w-full sm:w-1/4">
              <p className="text-center sm:text-left mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl sm:w-3/4">
              <h6 className="mb-2 font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-purple-200">{experience.company}</span>
              </h6>
              <p className="text-neutral-400 line-clamp-2">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
          >
            <motion.div
              className="max-w-xl w-full bg-neutral-900 text-white rounded-lg p-6 shadow-xl relative"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute top-2 right-3 text-neutral-400 hover:text-white text-xl cursor-pointer"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-2">
                {selected.role}{" "}
                <span className="text-purple-400 text-base">
                  ({selected.company})
                </span>
              </h2>
              <p className="text-sm text-neutral-400 mb-2">{selected.year}</p>
              <p className="mb-4">{selected.description}</p>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-3 py-1 text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Experience;
