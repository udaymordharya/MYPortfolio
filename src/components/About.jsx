import aboutGif from "../assets/download.jpeg"; // your uploaded gif
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        {/* Image / GIF */}
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
          <motion.img
            src={aboutGif}
            alt="About Uday"
            className="rounded-2xl w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Text */}
        <div className="my-6 w-full lg:w-1/2">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mx-2 my-2 max-w-xl text-neutral-300">{ABOUT_TEXT}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
