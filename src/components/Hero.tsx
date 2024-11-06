import { motion } from "framer-motion";
import img from "../assets/logo_converted.jpg";
import resume from "../assets/Skylar Ennenga Resume.pdf";

const Hero = () => {
  return (
    <div className="ml-16 flex-1 flex items-center justify-center bg-gray-700 py-16 relative">
      {/* Resume Button */}
      <motion.div
        className="absolute top-4 right-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a
          href={resume}
          target="_blank"
          className="bg-green-600 text-white px-4 py-2 rounded-full shadow inline-block"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Resume
        </motion.a>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="text-center p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.div
          className="mb-8 mt-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={img}
            alt="Skylar Ennenga"
            className="w-48 h-48 rounded-full mx-auto shadow-lg"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl font-bold text-white mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Skylar Ennenga
        </motion.h1>

        {/* Welcome Message */}
        <motion.p
          className="text-xl text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Welcome to My Portfolio
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-gray-400 mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          With a strong foundation in network operations and deployable
          communications, I am now transitioning into front-end development
          after completing the Coding Temple bootcamp. Driven by a passion for
          building intuitive and engaging web experiences, I’m excited to
          leverage my technical skills in a new career path. Dive in to explore
          my work and journey in front-end development!
        </motion.p>

        {/* Explore My Work Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <motion.a
            href="https://github.com/Skylar-Ennenga"
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow inline-block"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}

          >
            Explore My Work
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
