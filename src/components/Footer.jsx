import { motion } from 'framer-motion';
import { Heart, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-12 bg-cyan-700 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <p className="text-cyan-100">
          © 2025 Jean Granger — All Rights Reserved 
    
        </p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-cyan-200 text-sm mt-2"
        >
          Crafted with React & Tailwind CSS
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;