import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="border-b border-neutral-900 pb-10 px-6 md:px-14">
      <motion.h1
        className="my-16 text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(project)}
            className="group relative overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-purple-500/50 hover:bg-neutral-800/60 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <span className="text-white font-semibold text-lg">Click to View Details</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 text-neutral-400 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-2xl border border-neutral-800 shadow-2xl p-6 md:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
              >
                <FaTimes size={20} />
              </button>

              <div className="flex flex-col gap-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-purple-900/30 px-3 py-1 text-sm font-medium text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-neutral-300 text-base leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full font-medium transition-all hover:scale-105"
                    >
                      <FaGithub size={20} />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
