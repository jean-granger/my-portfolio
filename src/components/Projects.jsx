import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = [
    {
      title: 'MLCloud Platform',
      desc: 'A no-code AutoML platform built with Flask, React, and TPOT for predictive modeling.',
      link: 'https://github.com/jean-granger/MLCloud--A-no-code-Machine-Learning-platform-for-predictive-analysis',
      tech: ['Flask', 'React', 'TPOT', 'AutoML', 'Docker']
    },
    {
      title: 'Deep Learning Projects',
      desc: 'Image classification, text classification, and summarization using CNNs and Transformers.',
      link: 'https://github.com/jean-granger/Machine-Learning---Deep-Learning-project',
      tech: ['PyTorch', 'CNN', 'Transformers', 'NLP', 'Computer Vision']
    },
    {
      title: 'Data-Centric AI Case Study',
      desc: 'Heart disease analysis focusing on data quality improvement over model tweaking. Exploration, cleaning, and modeling workflow.',
      link: 'https://github.com/jean-granger/data-centric-ai-case-study',
      tech: ['Python', 'Pandas', 'Data Cleaning', 'Machine Learning']
    },
  ];

  const allProjects = [
    ...featuredProjects,
    {
      title: 'AI Research Assistant',
      desc: 'Automation workflow for AI research using n8n and LLM integration.',
      link: 'https://github.com/jean-granger/AI-Automation-Agent',
      tech: ['n8n', 'LLM', 'Automation', 'AI Agents', 'Python']
    },
    {
      title: 'ShadowFox Data Science Internship',
      desc: 'Data visualization and analysis projects including Matplotlib/Plotly documentation and Delhi AQI trend analysis.',
      link: 'https://github.com/jean-granger/ShadowFox-Internship-Data-Science',
      tech: ['Python', 'Data Visualization', 'Matplotlib', 'Plotly', 'Pandas']
    }
  ];

  const projectsToShow = showAll ? allProjects : featuredProjects;

  return (
    <section id="projects" className="py-20 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-bold text-gray-800 mb-6">
            Featured <span className="text-cyan-600">Projects</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications of machine learning and AI technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence>
            {projectsToShow.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200 group overflow-hidden"
              >
                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{project.desc}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Repository Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-cyan-600 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-2">
                      View Git Repository
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Button */}
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
                View All Projects
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

