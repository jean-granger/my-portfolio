import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
    {
      title: "Data Science Online Internship",
      issuer: "ShadowFox",
      link: "https://drive.google.com/file/d/1767YH1P1OwAIyThrTnHIkMlBtgMh7kAN/view?usp=sharing",
      category: "Data & Analytics"
    },
    {
      title: "Cloud Computing Fundamentals", 
      issuer: "IBM SkillsBuild",
      link: "https://drive.google.com/file/d/1XpJ68d4HI-UDB8aKtkeLtimqvAd7upD-/view?usp=sharing",
      category: "Cloud & Infrastructure"
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM SkillsBuild", 
      link: "https://drive.google.com/file/d/1i-utnIrPqPu_N1CY5GlsYxiDdvikeYzD/view?usp=sharing",
      category: "Security"
    },
    {
      title: "Python Programming Language",
      issuer: "IBM SkillsBuild",
      link: "https://drive.google.com/file/d/1h1mHo_zWZa1Utm9LGEMIF79dFX2kAJm0/view?usp=sharing", 
      category: "Programming"
    },
    {
      title: "Introduction to Artificial Intelligence(AI)",
      issuer: "IBM SkillsBuild",
      link: "https://drive.google.com/availableSoon", 
      category: "AI"
    },
    {
      title: "AI/ML Virtual Internship",
      issuer: "ShadowFox",
      link: "https://drive.google.com/availableSoon", 
      category: "AI & ML"
    },
    {
      title: "AI & ML Engineering Professional Cerificate",
      issuer: "Microsoft",
      link: "https://drive.google.com/AvailableSoon", 
      category: "AI Professional"
    },
  ];

  const certificationsToShow = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="py-20 mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-bold text-gray-800 mb-6">
            Professional <span className="text-cyan-600">Certifications</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Validated expertise in cutting-edge technologies and methodologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnimatePresence>
            {certificationsToShow.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all group"
              >
                {/* Icon and Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                    <Award className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="w-8 h-1 bg-cyan-600 rounded-full mt-1"></div>
                  </div>
                </div>

                {/* Issuer and Category */}
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Issued by:</span> {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium">
                      {cert.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Expand/Collapse Button */}
        {certifications.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  View All Certifications
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;