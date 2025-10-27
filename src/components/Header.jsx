import { motion } from 'framer-motion';
import { Award, Menu, X } from 'lucide-react';
import Logo from '../assets/looog.png';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['Skills', 'Projects', 'About', 'Contact'];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center p-6 max-w-7xl mx-auto mr-4"
    >
      {/* Logo and Name */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-0 cursor-pointer ml-4"
        onClick={scrollToTop}
      >
        <img
          src={Logo}
          alt="JG Logo"
          className="w-28 h-28 -mr-2"
        />
        <h1 className="text-2xl font-bold text-gray-600 font-sans hover:text-cyan-600"> 
          Jean Granger
        </h1>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <div className="flex gap-8 text-base font-medium">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#67e8f9" }}
              className="text-gray-700 hover:text-cyan-300 transition-colors cursor-pointer text-lg"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Certifications Link */}
        <motion.a
          href="#certifications"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-700 hover:text-cyan-300 hover:border-cyan-300 transition-colors text-lg"
        >
          <Award className="w-5 h-5" />
          <span className="font-medium">Certifications</span>
        </motion.a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-700 hover:text-cyan-300 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-24 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden overflow-hidden"
      >
        <div className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: "#67e8f9" }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 hover:text-cyan-300 transition-colors text-lg font-medium py-2 border-b border-gray-100"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#certifications"
            whileHover={{ color: "#67e8f9" }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 text-gray-700 hover:text-cyan-300 transition-colors text-lg font-medium py-2"
          >
            <Award className="w-5 h-5" />
            <span>Certifications</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;