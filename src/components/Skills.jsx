import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Transformers"]
    },
    {
      category: "Data Science",
      skills: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Feature Engineering"]
    },
    {
      category: "Software Development and Programming",
      skills: ["Python", "JavaScript", "Github", "React"]
    }
  ];

  return (
    <section id="skills" className="py-20 mt-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-bold text-gray-800 mb-6">
            Skills & <span className="text-cyan-700">Technologies</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning machine learning, data science, and software engineering
          </p>
        </motion.div>

        {/* Centered Skills Grid - UPDATED */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-cyan-100 w-full max-w-sm"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h4 className="font-bold text-xl text-gray-800 mb-3">{category.category}</h4>
                <div className="w-16 h-1.5 bg-cyan-600 rounded-full"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-100 transition-colors"
                  >
                    <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium text-lg">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-lg">
            Continuously learning and adapting to new technologies in the fast-evolving AI landscape
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;