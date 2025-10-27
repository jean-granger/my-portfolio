import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col items-center text-center mt-20 px-6"
    >
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm <span className="text-cyan-600">Jean Granger</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          A Machine Learning & AI Enthusiast passionate about building intelligent systems 
          and exploring the frontiers of artificial intelligence.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex gap-6 mt-8"
      >
        {/* View Resume Button */}
        <motion.a
          href="/PROFESSIONALCV-JEANANGEEMMANUEL.pdf"
          target='_blank'
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all group"
        >
          <FileText className="w-5 h-5" />
          View Resume
          <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </motion.a>

        {/* View Projects Button */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-white border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-gray-700 shadow-sm hover:shadow-md transition-all group hover:border-cyan-300"
        >
          View Projects
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;